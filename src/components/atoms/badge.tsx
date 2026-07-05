import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../lib/utils";

export const badgeVariants = cva("nds-badge", {
  variants: {
    variant: {
      primary: "nds-badge--primary",
      secondary: "nds-badge--secondary",
      success: "nds-badge--success",
      warning: "nds-badge--warning",
      danger: "nds-badge--danger",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ className, variant }))} {...props} />;
}
