import { useSelection } from "../utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function FontSizeInput() {
  const { makeInputStyleChangeHandler } = useSelection();

  const [fontSize, setFontSize] = makeInputStyleChangeHandler("fontSize");

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFontSize(e.target.value);

  return (
    <div>
      <Label className="text-xs">Font size</Label>
      <Input
        className="h-9 text-xs"
        value={fontSize}
        onChange={handleFontSizeChange}
      />
    </div>
  );
}
