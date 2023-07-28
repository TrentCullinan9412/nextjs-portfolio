import { Toggle } from "@/components/ui/toggle";
import { FontItalicIcon } from "@radix-ui/react-icons";

type Props = {
  pressed: boolean;
  onPressedChange: (pressed: boolean) => void;
};

export function ItalicToggle({ pressed, onPressedChange }: Props) {
  return (
    <Toggle
      pressed={pressed}
      onPressedChange={onPressedChange}
      size="sm"
      variant="outline"
      aria-label="Toggle italic"
    >
      <FontItalicIcon className="h-4 w-4" />
    </Toggle>
  );
}
