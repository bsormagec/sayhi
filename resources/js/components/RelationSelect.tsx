import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Loader2 } from "lucide-react";

interface Option {
  value: string | number;
  label: string;
}

interface RelationSelectProps {
  model: string;
  relation?: string;
  value?: string | number;
  onChange: (value: string | number) => void;
  valueField?: string;
  labelField?: string;
  placeholder?: string;
  filters?: Record<string, string | number | boolean>;
  className?: string;
  disabled?: boolean;
  required?: boolean;
}

/**
 * A combobox component that fetches options from a relation endpoint
 * Compatible with shadcn/ui form patterns
 */
export function RelationSelect({
  model,
  relation,
  value,
  onChange,
  valueField = 'id',
  labelField,
  placeholder = 'Select...',
  filters = {},
  className,
  disabled = false,
  required = false,
}: RelationSelectProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Anti-loop protection
  const isLoadingRef = React.useRef(false);
  const lastRequestTimeRef = React.useRef(0);
  const debounceTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const requestsInTimeWindowRef = React.useRef(0);
  const maxRequestsPerWindow = 3; // Max requests allowed in time window
  const timeWindowMs = 2000; // 2 seconds time window
  const initialFetchMadeRef = React.useRef(false);

  // Hard-stop for debugging purposes - will prevent any API calls after this many
  // To completely prevent infinite loops in production
  const totalRequestsRef = React.useRef(0);
  const absoluteMaxRequests = 10;

  // Function to get API URL
  const getApiUrl = () => {
    const baseUrl = `/ai-module-generator/api/relation-data/${model}`;
    return relation ? `${baseUrl}/${relation}` : baseUrl;
  };

  // Anti-loop detection
  const shouldPreventRequest = () => {
    const now = Date.now();

    // Absolute limit to prevent any runaway loops
    if (totalRequestsRef.current >= absoluteMaxRequests) {
      console.error(`[RelationSelect] Reached absolute maximum of ${absoluteMaxRequests} requests. Stopping all requests to prevent infinite loop.`);
      return true;
    }

    // If we're already loading, don't make another request
    if (isLoadingRef.current) {
      console.log('[RelationSelect] Already loading, preventing duplicate request');
      return true;
    }

    // Reset counter if outside time window
    if (now - lastRequestTimeRef.current > timeWindowMs) {
      requestsInTimeWindowRef.current = 0;
    }

    // Check if we've made too many requests in this time window
    if (requestsInTimeWindowRef.current >= maxRequestsPerWindow) {
      console.error(`[RelationSelect] Too many requests (${maxRequestsPerWindow}) in ${timeWindowMs}ms window. Possible infinite loop detected.`);
      return true;
    }

    return false;
  };

  // Basic fetch function with loop prevention
  const fetchOptions = async (search?: string) => {
    // Use time-based loop detection and prevention
    if (shouldPreventRequest()) {
      return;
    }

    // Update request tracking
    const now = Date.now();
    lastRequestTimeRef.current = now;
    requestsInTimeWindowRef.current++;
    totalRequestsRef.current++;
    isLoadingRef.current = true;

    // Show loading state
    setLoading(true);

    try {
      console.log(`[RelationSelect] Making request #${totalRequestsRef.current}`);

      // Build params
      const params = {
        value_field: valueField,
        ...(labelField && { label_field: labelField }),
        ...(search && { search }),
        ...(Object.keys(filters).length > 0 && { filters }),
      };

      const response = await axios.get(getApiUrl(), { params });

      let processedOptions: Option[] = [];

      try {
        if (response.data) {
          // Create a type for the API response items without using 'any'
          interface ResponseItem {
            [key: string]: string | number | boolean | null | undefined | object;
            value?: string | number;
            id?: string | number;
            label?: string;
            name?: string;
            email?: string;
          }

          // Process response data
          const processItem = (item: ResponseItem): Option => {
            // For value, try each possible field in order
            const itemValue =
              item.value !== undefined ? item.value :
              item.id !== undefined ? item.id :
              valueField && item[valueField] !== undefined ? item[valueField] as string | number :
              0;

            // For label, try each possible field in order
            const itemLabel =
              item.label !== undefined ? String(item.label) :
              item.name !== undefined ? String(item.name) :
              labelField && item[labelField] !== undefined ? String(item[labelField]) :
              'email' in item ? String(item.email) :
              String(itemValue);

            return { value: itemValue, label: itemLabel };
          };

          // Case 1: Direct array of options
          if (Array.isArray(response.data)) {
            processedOptions = response.data.map((item: unknown) => processItem(item as ResponseItem));
          }
          // Case 2: Response with data array property (most common case)
          else if (response.data.data && Array.isArray(response.data.data)) {
            processedOptions = response.data.data.map((item: unknown) => processItem(item as ResponseItem));
          }
        }
      } catch (err) {
        console.error("[RelationSelect] Error processing response data:", err);
      }


      setOptions(processedOptions);
    } catch (error) {
      console.error("[RelationSelect] Error fetching relation data:", error);
      setOptions([]);
    } finally {
      isLoadingRef.current = false;
      setLoading(false);
    }
  };

  // Use a single ref to track if component is mounted
  const isMountedRef = React.useRef(false);

  // Static initial fetch on mount - will only run ONCE
  useEffect(() => {
    // Set mounted flag
    isMountedRef.current = true;

    // IMPORTANT: This only runs once, guaranteed
    if (!disabled && !initialFetchMadeRef.current) {
      initialFetchMadeRef.current = true;
      fetchOptions();
    }

    // Cleanup function
    return () => {
      isMountedRef.current = false;
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
        debounceTimeoutRef.current = null;
      }
    };
  }, []); // Empty dependency array = only runs once on mount, ignoring disabled

  // Handle search input with strict anti-loop protection
  const handleSearchChange = (search: string) => {
    setSearchQuery(search);

    // Skip searches triggered by initial mounting
    // This prevents the double-request issue
    if (!isMountedRef.current || initialFetchMadeRef.current === false) {
      return;
    }

    // Clear any existing timeout
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
      debounceTimeoutRef.current = null;
    }

    // Use a simple setTimeout without dependencies
    if ((search && search.length >= 2) || search.length === 0) {
      debounceTimeoutRef.current = setTimeout(() => {
        // Only make a search request if the component is still mounted
        if (isMountedRef.current) {
          fetchOptions(search);
        }
      }, 300);
    }
  };


  // The key issue: Type mismatch between form value (string) and API value (number)
  // Need to normalize for comparison
  const normalizeValue = (val: string | number | undefined): string => {
    if (val === null || val === undefined) return '';
    return String(val);
  };

  // Find the current selected option with normalized comparison
  const selectedOption = options.find((option) => {
    const normalizedOptionValue = normalizeValue(option.value);
    const normalizedValue = normalizeValue(value);
    return normalizedOptionValue === normalizedValue;
  });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className={cn(
            "w-full justify-between",
            !selectedOption && "text-muted-foreground",
            className
          )}
          type="button"
        >
          {loading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : selectedOption ? (
            selectedOption.label
          ) : (
            t(placeholder)
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
        <Command>
          <CommandInput
            placeholder={t('Search...')}
            className="h-10"
            value={searchQuery}
            onValueChange={handleSearchChange}
          />
          <CommandList>
            {loading && (
              <div className="flex items-center justify-center py-6">
                <Loader2 className="h-4 w-4 animate-spin" />
              </div>
            )}
            {!loading && options.length === 0 && <CommandEmpty>{t('No results found.')}</CommandEmpty>}
            <CommandGroup className="max-h-[300px] overflow-auto">
              {loading ? (
                <div className="px-2 py-4 text-center text-sm">
                  {t('Loading...')}
                </div>
              ) : options.length === 0 && searchQuery.length > 0 ? (
                <div className="px-2 py-4 text-center text-sm">
                  {t('No results found for')}: "{searchQuery}"
                </div>
              ) : null}


              {!required && (
                <CommandItem
                  key="__empty__"
                  value="__empty__"
                  className="py-2"
                  onSelect={() => {
                    onChange('');
                    setOpen(false);
                  }}
                >
                  <span className="font-normal">{t('None')}</span>
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === '' || value === undefined || value === null
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              )}
              {options.map((option) => (
                <CommandItem
                  key={String(option.value)}
                  value={option.label} // Use label for search matching
                  onSelect={() => {
                    // Always use the original option value from our options array
                    // This ensures we preserve the type (number) from the API
                    onChange(option.value);
                    setOpen(false);
                  }}
                >
                  <span className="font-normal">{option.label}</span>
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      normalizeValue(option.value) === normalizeValue(value) ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
