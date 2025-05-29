import { cn } from '@/lib/utils';
import { TextareaHTMLAttributes } from 'react';
import { Textarea } from '../ui/textarea';

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string;
}

export function FormTextarea({ className, error, ...props }: FormTextareaProps) {
    return (
        <Textarea
            className={cn(
                error && 'border-destructive',
                className,
            )}
            {...props}
        />
    );
}