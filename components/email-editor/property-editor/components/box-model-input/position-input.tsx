import * as React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const positions = {
  y: "Y (Top and bottom)",
  x: "X (Left and right)",
  top: "Top",
  right: "Right",
  bottom: "Bottom",
  left: "Left",
  all: "Delimited by spaces",
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  position: keyof typeof positions;
}

const PositionInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ position, ...props }: InputProps, ref) => {
    return (
      <div className="space-y-1 w-full">
        <Input
          ref={ref}
          maxLength={6}
          defaultValue={0}
          className="h-8 text-xs"
          {...props}
        />
        <p
          className={cn(
            "text-xs text-muted-foreground whitespace-nowrap text-ellipsis overflow-hidden",
            position === "all" ? "text-left" : "text-center",
          )}
        >
          {positions[position]}
        </p>
      </div>
    );
  },
);

export { PositionInput };
