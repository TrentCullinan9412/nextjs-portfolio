import { useSelection } from "../utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function BackgroundColorInput() {
  const { makeInputStyleChangeHandler } = useSelection();

  const [bgColor, setBgColor] = makeInputStyleChangeHandler("backgroundColor");

  const handleBgColorChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setBgColor(e.target.value);

  return (
    <>
      <Input
        type="color"
        className="w-16"
        value={bgColor || "#000000"}
        onChange={handleBgColorChange}
      />
      <Label className="text-xs">Background color</Label>
    </>
  );
}
