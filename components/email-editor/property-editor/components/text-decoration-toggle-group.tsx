"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  OverlineIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";

const TextDecorations = ["underline", "overline", "line-through"] as const;

export type TextDecoration = (typeof TextDecorations)[number];

type Option = {
  value: TextDecoration;
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  label: string;
};

const TextDecorationOptions: Option[] = [
  {
    value: "underline",
    Icon: UnderlineIcon,
    label: "Underline",
  },
  {
    value: "overline",
    Icon: OverlineIcon,
    label: "Overline",
  },
  {
    value: "line-through",
    Icon: StrikethroughIcon,
    label: "Line through",
  },
];

type Props = {
  textDecoration?: TextDecoration | "";
  onChange: (textDecoration: TextDecoration | "") => void;
};

export function TextDecorationToggleGroup({ textDecoration, onChange }: Props) {
  return (
    <TooltipProvider>
      <ToggleGroup
        type="single"
        size="sm"
        variant="outline"
        aria-label="Text alignment"
        value={textDecoration}
        onValueChange={onChange}
      >
        {TextDecorationOptions.map(({ value, label, Icon }) => (
          <ToggleGroupItem key={value} value={value} aria-label={label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Icon className="h-4 w-4" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </TooltipProvider>
  );
}
