"use client";

import * as React from "react";
import { format, isValid, parseISO } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { type DayPickerSingleProps } from "react-day-picker"; // Import only DayPickerSingleProps as a type

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

// Define CalendarProps to be DayPickerSingleProps but omitting the ones we set manually.
export type CalendarProps = Omit<DayPickerSingleProps, 'mode' | 'onSelect' | 'selected'>;

// Basic DatePicker Component
export interface DatePickerProps {
  date?: Date;
  setDate: (date?: Date) => void;
  placeholder?: string;
  className?: string; // For PopoverContent styling
  calendarProps?: CalendarProps;
  buttonClassName?: string;
}

export function DatePicker({
  date,
  setDate,
  placeholder = "Pick a date",
  className,
  calendarProps,
  buttonClassName,
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground",
            buttonClassName
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date && isValid(date) ? format(date, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("w-auto p-0", className)} align="start">
        <Calendar
          mode="single"
          selected={date && isValid(date) ? date : undefined}
          onSelect={setDate}
          initialFocus
          {...calendarProps}
        />
      </PopoverContent>
    </Popover>
  );
}

// DatePicker Component Integrated with React Hook Form
interface FormDatePickerProps {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string; // General class for FormItem
  calendarProps?: CalendarProps;
  popoverContentClassName?: string;
  buttonClassName?: string;
  description?: string;
}

export function FormDatePicker({
  name,
  label,
  placeholder,
  className,
  calendarProps,
  popoverContentClassName,
  buttonClassName,
  description,
}: FormDatePickerProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        const selectedDate = field.value
          ? typeof field.value === 'string'
            ? parseISO(field.value)
            : field.value
          : undefined;

        return (
          <FormItem className={cn("flex flex-col", className)}>
            {label && <FormLabel>{label}</FormLabel>}
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !field.value && "text-muted-foreground",
                      buttonClassName
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate && isValid(selectedDate) ? (
                      format(selectedDate, "PPP")
                    ) : (
                      <span>{placeholder || "Pick a date"}</span>
                    )}
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className={cn("w-auto p-0", popoverContentClassName)} align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate && isValid(selectedDate) ? selectedDate : undefined}
                  onSelect={(currentDate: Date | undefined) => {
                    field.onChange(currentDate ? format(currentDate, "yyyy-MM-dd") : undefined);
                  }}
                  disabled={calendarProps?.disabled}
                  initialFocus
                  {...calendarProps}
                />
              </PopoverContent>
            </Popover>
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
            {error && <FormMessage>{error.message}</FormMessage>}
          </FormItem>
        );
      }}
    />
  );
}
