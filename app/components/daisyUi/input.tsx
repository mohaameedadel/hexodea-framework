import * as React from "react";
import { cn } from "~/utils/cn";
import { LuCircleAlert } from "react-icons/lu";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  mask?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, type, ...props }, ref) => {
    return (
      <fieldset className="fieldset">
        {label && (
          <label
            htmlFor={props.id}
            className="label text-sm font-medium text-dark"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          {...props}
          type={type || "text"}
          className={cn(
            "bg-white p-3 rounded-xl border border-[#E2E8F0] focus:outline-main text-xs text-muted",
            className,
          )}
        />

        {error && (
          <p className="text-[#EF4444] text-sm font-normal flex items-center gap-2">
            {<LuCircleAlert />} {error}
          </p>
        )}
      </fieldset>
    );
  },
);
Input.displayName = "Input";

export { Input };
