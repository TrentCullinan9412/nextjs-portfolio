import { useSelection } from "../utils";
import { HeightElement } from "../../types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function HeightInput() {
  const { makeInputChangeHandler } = useSelection();

  const [height, setHeight] = makeInputChangeHandler<HeightElement>("height");

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setHeight(e.target.value);

  return (
    <div>
      <Label className="text-xs">Height</Label>
      <Input
        className="h-7 text-xs"
        value={height || ""}
        onChange={handleHeightChange}
      />
    </div>
  );
}
