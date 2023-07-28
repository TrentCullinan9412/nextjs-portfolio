import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon, ChevronLeftIcon } from "@radix-ui/react-icons";

const Modes = [
  "manual",
  "y/x",
  "top/x/bottom",
  "top/right/left/bottom",
] as const;

export type InputMode = (typeof Modes)[number];

type InputModeOptionMap = {
  [mode in InputMode]: string;
};

const InputOptionsMap: InputModeOptionMap = {
  manual: "Manual",
  "y/x": "Y / X",
  "top/x/bottom": "Top / X / Bottom",
  "top/right/left/bottom": "Top / Right / Bottom / Left",
};

const Options = Object.entries(InputOptionsMap);

type Props = {
  mode: InputMode;
  onChange: (mode: InputMode) => void;
};

export function ModeSelect({ mode, onChange }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="group h-8 w-8">
          <ChevronDownIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all group-data-[state=open]:-rotate-0 group-data-[state=open]:scale-0" />
          <ChevronLeftIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-0 transition-all group-data-[state=open]:rotate-0 group-data-[state=open]:scale-100" />
          <span className="sr-only">Open mode menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="left" align="start">
        <DropdownMenuRadioGroup
          value={mode}
          onValueChange={(v: string) => onChange(v as InputMode)}
        >
          {Options.map(([key, value]) => (
            <DropdownMenuRadioItem key={key} value={key} className="text-xs">
              {value}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
