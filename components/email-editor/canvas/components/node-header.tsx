import * as React from "react";
import { PropsWithChildren } from "react";
import { HeadingLevel } from "../../types";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  level: HeadingLevel;
}

type HeadingStyleMap = {
  [level in HeadingLevel]: string;
};

const HeadingStyles: HeadingStyleMap = {
  h1: "text-5xl",
  h2: "text-4xl",
  h3: "text-3xl",
  h4: "text-2xl",
  h5: "text-xl",
  h6: "text-lg",
};

const NodeHeader = React.forwardRef<
  HTMLHeadingElement,
  PropsWithChildren<Props>
>(({ level, className, ...props }, ref) => {
  const Header = level;

  return (
    <Header
      ref={ref}
      className={cn(HeadingStyles[level], className)}
      {...props}
    />
  );
});
NodeHeader.displayName = "NodeHeader";

export { NodeHeader };
