import { useSelection } from "../utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ColorInput() {
  const { makeInputStyleChangeHandler } = useSelection();

  const [color, setColor] = makeInputStyleChangeHandler("color");

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setColor(e.target.value);

  return (
    <>
      <Input
        type="color"
        className="w-16"
        value={color || "#000000"}
        onChange={handleColorChange}
      />
      <Label className="text-xs">Color</Label>
    </>
  );
}
