import * as React from "react";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}

const inter = Inter({ subsets: ["latin"] });

const NodeLabel = React.forwardRef<HTMLDivElement, LabelProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "p-1 text-xs select-none font-medium text-primary not-italic",
          className,
          inter.className
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
