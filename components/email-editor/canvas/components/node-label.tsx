import * as React from "react";
import { cn } from "@/lib/utils";

interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}

const NodeLabel = React.forwardRef<HTMLDivElement, LabelProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "p-1 text-xs select-none font-medium text-primary not-italic font-mono",
          className,
        )}
        {...props}
      >
        {label}
      </div>
    );
  },
);
NodeLabel.displayName = "NodeLabel";

export { NodeLabel };
