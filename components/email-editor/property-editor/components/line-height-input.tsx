import { useSelection } from "../utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function LineHeightInput() {
  const { makeInputStyleChangeHandler } = useSelection();

  const [lineHeight, setLineHeight, clearLineHeight] =
    makeInputStyleChangeHandler("lineHeight");

  const handleLineHeightChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLineHeight(e.target.value);

  return (
    <div className="flex gap-2 items-end">
      <div className="flex-1">
        <Label className="text-xs">Line height</Label>
        <Input
          className="h-9 text-xs"
          value={lineHeight}
          onChange={handleLineHeightChange}
        />
      </div>
      <Button variant="ghost" className="text-xs" onClick={clearLineHeight}>
        Clear
      </Button>
    </div>
  );
}
