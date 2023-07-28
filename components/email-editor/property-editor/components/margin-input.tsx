import { useSelection } from "../utils";
import { Label } from "@/components/ui/label";
import { BoxModelInput } from "./box-model-input";

export function MarginInput() {
  const { selectedId, makeInputStyleChangeHandler } = useSelection();
  const [margin, setMargin] = makeInputStyleChangeHandler("margin");

  return (
    <div>
      <Label className="text-xs">Margin</Label>
      <BoxModelInput
        key={`${selectedId}:margin`}
        value={margin as string}
        onChange={setMargin}
      />
    </div>
  );
}
