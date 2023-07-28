import { useSelection } from "../utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function FontFamilyInput() {
  const { makeInputStyleChangeHandler } = useSelection();

  const [fontFamily, setFontFamily] = makeInputStyleChangeHandler("fontFamily");

  const handleFontFamilyChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFontFamily(e.target.value);

  return (
    <div>
      <Label className="text-xs">Font family</Label>
      <Input
        className="h-9 text-xs"
        value={fontFamily}
        onChange={handleFontFamilyChange}
      />
    </div>
  );
}
