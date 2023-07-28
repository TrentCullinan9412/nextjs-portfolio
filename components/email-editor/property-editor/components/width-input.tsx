import { useSelection } from "../utils";
import { WidthElement } from "../../types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function WidthInput() {
  const { makeInputChangeHandler } = useSelection();

  const [width, setWidth] = makeInputChangeHandler<WidthElement>("width");

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setWidth(e.target.value);

  return (
    <div>
      <Label className="text-xs">Width</Label>
      <Input
        className="h-7 text-xs"
        value={width || ""}
        onChange={handleWidthChange}
      />
    </div>
  );
}
