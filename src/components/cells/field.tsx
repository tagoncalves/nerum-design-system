import * as React from "react";

import { Input, type InputProps } from "../atoms/input";
import { Label } from "../atoms/label";

export interface FieldProps extends InputProps {
  description?: string;
  error?: string;
  label: string;
}

export const Field = React.forwardRef<HTMLInputElement, FieldProps>(
  ({ description, error, id, label, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    const descriptionId = description ? `${inputId}-description` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;

    return (
      <div className="nds-field">
        <Label htmlFor={inputId}>{label}</Label>
        <Input
          aria-describedby={[descriptionId, errorId].filter(Boolean).join(" ") || undefined}
          aria-invalid={Boolean(error) || undefined}
          id={inputId}
          ref={ref}
          {...props}
        />
        {description ? (
          <p className="nds-field__description" id={descriptionId}>
            {description}
          </p>
        ) : null}
        {error ? (
          <p className="nds-field__error" id={errorId}>
            {error}
          </p>
        ) : null}
      </div>
    );
  }
);

Field.displayName = "Field";
