import { useSelection } from "../utils";
import { HrefElement } from "../../types";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function UrlInput() {
  const { makeInputChangeHandler } = useSelection();

  const [url, setUrl] = makeInputChangeHandler<HrefElement>("href");

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUrl(e.target.value);

  return (
    <div>
      <Label className="text-xs">URL</Label>
      <Input className="h-7 text-xs" value={url} onChange={handleUrlChange} />
    </div>
  );
}
