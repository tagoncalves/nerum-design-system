import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../lib/utils";

export const buttonVariants = cva("nds-button nds-focus-ring", {
  variants: {
    variant: {
      primary: "nds-button--primary",
      secondary: "nds-button--secondary",
      outline: "nds-button--outline",
      ghost: "nds-button--ghost",
      danger: "nds-button--danger",
    },
    size: {
      sm: "nds-button--sm",
      md: "nds-button--md",
      lg: "nds-button--lg",
      icon: "nds-button--icon",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, size, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ className, size, variant }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
