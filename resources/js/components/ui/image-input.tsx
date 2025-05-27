import React, { useState, useCallback, ChangeEvent, DragEvent } from "react";
import { Input } from "@/components/ui/input"; // Removed type InputProps import
import { Button } from "@/components/ui/button";
import { XCircle, ImageUp } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ImageInputProps
  extends Omit<React.ComponentProps<typeof Input>, "type" | "onChange" | "value"> { // Changed to React.ComponentProps<typeof Input>
  value?: File | string | null; // Can be File object for new upload, string for existing URL, or null
  onChange: (file: File | null) => void;
  defaultPreviewUrl?: string | null;
  imagePreviewClassName?: string;
  dropzoneClassName?: string;
  placeholderText?: string;
  showRemoveButton?: boolean;
}

export const ImageInput: React.FC<ImageInputProps> = ({
  value,
  onChange,
  defaultPreviewUrl,
  imagePreviewClassName = 'w-32 h-32 object-cover rounded-md border border-dashed',
  dropzoneClassName = 'flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-card hover:bg-muted/50 transition-colors',
  placeholderText,
  showRemoveButton = true,
  disabled,
  ...props
}) => {
  const { t } = useTranslation();
  const [preview, setPreview] = useState<string | null>(
    typeof value === 'string' ? value : defaultPreviewUrl || null
  );
  const [isDragging, setIsDragging] = useState(false);

  const internalPlaceholderText = placeholderText || t('Click to upload or drag & drop an image');

  React.useEffect(() => {
    if (typeof value === 'string') {
      setPreview(value);
    } else if (value instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(value);
    } else if (defaultPreviewUrl && !value) {
        setPreview(defaultPreviewUrl);
    } else if (!value && !defaultPreviewUrl) {
      setPreview(null);
    }
  }, [value, defaultPreviewUrl]);

  const handleFileChange = useCallback(
    (file: File | null) => {
      if (file) {
        onChange(file);
        // Preview is handled by useEffect above based on `value` prop
      } else {
        onChange(null);
        // Preview is handled by useEffect above
      }
    },
    [onChange]
  );

  const onFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    handleFileChange(file || null);
    if (event.target) {
        event.target.value = ''; // Reset input value
    }
  };

  const onFileDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      setIsDragging(false);
      if (disabled) return;

      const file = event.dataTransfer.files?.[0];
      if (file && file.type.startsWith('image/')) {
        handleFileChange(file);
      } else {
        alert(t('Invalid file type. Please upload an image.'));
      }
    },
    [handleFileChange, disabled, t]
  );

  const onDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (!disabled) {
        setIsDragging(true);
    }
  };

  const onDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  };

  const handleRemoveImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    handleFileChange(null);
  };

  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="w-full">
      {preview ? (
        <div className="relative group">
          <img src={preview} alt={t('Image preview')} className={imagePreviewClassName} />
          {showRemoveButton && !disabled && (
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity rounded-full h-6 w-6 p-1"
              onClick={handleRemoveImage}
              aria-label={t('Remove image')}
            >
              <XCircle size={16} />
            </Button>
          )}
          <Input
            type="file"
            accept="image/*"
            onChange={onFileSelected} // This will be effectively unused if preview is shown but needed for form participation
            className="hidden"
            ref={inputRef}
            disabled={disabled}
            {...props}
          />
           {!disabled && (
             <Button
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => inputRef.current?.click()}
             >
                {t('Change image')}
             </Button>
           )}
        </div>
      ) : (
        <div
          className={`${dropzoneClassName} ${isDragging ? 'border-primary ring-2 ring-primary ring-offset-2' : 'border-input'} ${disabled ? 'cursor-not-allowed bg-muted/30' : ''}`}
          onDrop={onFileDrop}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onClick={() => !disabled && inputRef.current?.click()}
          role="button"
          tabIndex={disabled ? -1 : 0}
          onKeyDown={(e) => {
            if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
              inputRef.current?.click();
            }
          }}
          aria-disabled={disabled}
          aria-label={internalPlaceholderText}
        >
          <Input
            type="file"
            accept="image/*"
            onChange={onFileSelected}
            className="hidden"
            ref={inputRef}
            disabled={disabled}
            {...props}
          />
          <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
            <ImageUp className={`w-8 h-8 mb-4 ${disabled ? 'text-muted-foreground/50' : 'text-muted-foreground'}`} />
            <p className={`mb-2 text-sm ${disabled ? 'text-muted-foreground/50' : 'text-muted-foreground'}`}>
              <span className="font-semibold">{t('Click to upload')}</span> {t('or drag and drop')}
            </p>
            <p className={`text-xs ${disabled ? 'text-muted-foreground/50' : 'text-muted-foreground'}`}>{t('PNG, JPG, GIF up to 10MB')}</p> {/* You might want to make this configurable */}
          </div>
        </div>
      )}
    </div>
  );
};
