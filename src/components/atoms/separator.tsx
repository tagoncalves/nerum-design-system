import * as React from "react";

import { cn } from "../../lib/utils";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
}

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = "horizontal", ...props }, ref) => (
    <div
      aria-orientation={orientation}
      className={cn(
        "nds-separator",
        orientation === "horizontal"
          ? "nds-separator--horizontal"
          : "nds-separator--vertical",
        className
      )}
      ref={ref}
      role="separator"
      {...props}
    />
  )
);

Separator.displayName = "Separator";
