import { useSelection } from "../utils";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FontWeights = {
  "100": "Thin",
  "200": "Extra light",
  "300": "Light",
  "400": "Normal",
  "500": "Medium",
  "600": "Semibold",
  "700": "Bold",
  "800": "Extra bold",
  "900": "Black",
};

const FontWeightEntries = Object.entries(FontWeights);

export function FontWeightSelect() {
  const { makeInputStyleChangeHandler } = useSelection();

  const [fontWeight, setFontWeight] = makeInputStyleChangeHandler("fontWeight");

  return (
    <div>
      <Label className="text-xs">Font weight</Label>
      <Select
        defaultValue="400"
        value={(fontWeight as string | undefined) || "400"}
        onValueChange={setFontWeight}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a font weight" />
        </SelectTrigger>
        <SelectContent className="min-w-min">
          <SelectGroup>
            {FontWeightEntries.map(([key, displayName]) => (
              <SelectItem key={key} value={key}>
                {displayName}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
