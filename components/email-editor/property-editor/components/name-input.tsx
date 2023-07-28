import { useSelection } from "../utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function NameInput() {
  const { makeInputChangeHandler } = useSelection();

  const [name, setName] = makeInputChangeHandler("name");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  return (
    <div>
      <Label className="text-xs">Name</Label>
      <Input className="h-7 text-xs" value={name} onChange={handleNameChange} />
    </div>
  );
}
