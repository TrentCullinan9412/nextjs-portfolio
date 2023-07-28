import * as React from "react";
import { NodeLabel } from "./node-label";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { NodeActions } from "./node-actions";
import { CSSProperties } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  root: string;
  nodeId: string;
  parentId?: string;
  label: string;
  asChild?: boolean;
  selected?: boolean;
  innerStyle?: CSSProperties;
}

const NodeContainer = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      root,
      nodeId,
      parentId,
      label,
      onClick,
      asChild,
      innerStyle,
      selected,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : "div";

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex-[0_1_100%] border-2 border-slate-400 dark:border-slate-600 data-[selected=true]:border-blue-500 dark:data-[selected=true]:border-blue-700",
          className,
        )}
        style={innerStyle}
        data-selected={selected}
        onClick={onClick}
        {...props}
      >
        {selected && (
          <NodeActions
            nodeId={nodeId}
            moveable={root !== parentId && root !== nodeId}
            removeable={root !== nodeId}
          />
        )}

        {selected && (
          <NodeLabel
            className="absolute -top-6 -left-[2px] bg-blue-500 dark:bg-blue-700 text-white text-ellipsis overflow-hidden whitespace-nowrap max-w-full"
            label={label}
            onClick={onClick}
          />
        )}

        <Component className="flex flex-wrap gap-2 p-2">{children}</Component>
      </div>
    );
  },
);
NodeContainer.displayName = "NodeContainer";

export { NodeContainer };
