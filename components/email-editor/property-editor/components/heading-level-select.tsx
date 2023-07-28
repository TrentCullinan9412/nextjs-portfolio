import { useSelection } from "../utils";
import { HeadingElement, HeadingTypes } from "../../types";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function HeadingLevelSelect() {
  const { makeInputChangeHandler } = useSelection();

  const [level, setLevel] = makeInputChangeHandler<HeadingElement>("as");

  return (
    <>
      <Select defaultValue="h1" value={level} onValueChange={setLevel}>
        <SelectTrigger className="w-16">
          <SelectValue placeholder="Select a heading" />
        </SelectTrigger>
        <SelectContent className="min-w-min">
          <SelectGroup>
            {HeadingTypes.map((x) => (
              <SelectItem key={x} value={x}>
                {x}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Label className="text-xs">Heading level</Label>
    </>
  );
}
