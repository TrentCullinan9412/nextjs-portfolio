import { useSelection } from "../utils";
import { Label } from "@/components/ui/label";
import { BoxModelInput } from "./box-model-input";

export function PaddingInput() {
  const { selectedId, makeInputStyleChangeHandler } = useSelection();
  const [padding, setPadding] = makeInputStyleChangeHandler("padding");

  return (
    <div>
      <Label className="text-xs">Padding</Label>
      <BoxModelInput
        key={`${selectedId}:padding`}
        value={padding as string}
        onChange={setPadding}
      />
    </div>
  );
}
