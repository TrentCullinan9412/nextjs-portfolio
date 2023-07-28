"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";

const TextAlignments = ["start", "center", "end", "justify"] as const;

export type TextAlign = (typeof TextAlignments)[number];

type Option = {
  value: TextAlign;
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  label: string;
};

const TextAlignmentOptions: Option[] = [
  {
    value: "start",
    Icon: TextAlignLeftIcon,
    label: "Start",
  },
  {
    value: "center",
    Icon: TextAlignCenterIcon,
    label: "Center",
  },
  {
    value: "end",
    Icon: TextAlignRightIcon,
    label: "End",
  },
  {
    value: "justify",
    Icon: TextAlignJustifyIcon,
    label: "Justify",
  },
];

type Props = {
  textAlign?: TextAlign | "";
  onChange: (textAlign: TextAlign | "") => void;
};

export function TextAlignToggleGroup({ textAlign, onChange }: Props) {
  return (
    <TooltipProvider>
      <ToggleGroup
        type="single"
        size="sm"
        variant="outline"
        aria-label="Text alignment"
        value={textAlign}
        onValueChange={onChange}
      >
        {TextAlignmentOptions.map(({ value, label, Icon }) => (
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
