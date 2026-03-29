import * as React from "react";
import { cn } from "~/utils/cn";

export type TextareaProps = React.ComponentProps<"textarea"> & {
  label?: string;
  error?: string;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <fieldset className="fieldset">
        {label && <label className="label">{label}</label>}

        <textarea
          ref={ref}
          className={cn(
            `textarea textarea-bordered bg-[#F8F7FC] p-4 rounded-lg border-0 focus:outline-none focus:border-none shadow text-xl w-full`,
            className
          )}
          {...props}
        />

        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </fieldset>
    );
  }
);

Textarea.displayName = "Textarea";
