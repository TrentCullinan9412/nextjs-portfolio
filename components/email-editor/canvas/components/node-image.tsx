import * as React from "react";
import { ImageIcon } from "@radix-ui/react-icons";

const NodeImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
  <div ref={ref} {...props}>
    <ImageIcon className="h-24 w-24" />
  </div>
));
NodeImage.displayName = "NodeImage";

export { NodeImage };
