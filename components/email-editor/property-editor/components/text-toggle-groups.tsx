import { useSelection } from "../utils";
import { ItalicToggle } from "./italic-toggle";
import { TextAlign, TextAlignToggleGroup } from "./text-align-toggle-group";
import {
  TextDecoration,
  TextDecorationToggleGroup,
} from "./text-decoration-toggle-group";

export function TextToggleGroups() {
  const { makeInputStyleChangeHandler } = useSelection();

  const [textAlign, setTextAlign] = makeInputStyleChangeHandler("textAlign");

  const handleTextAlignChange = (textAlign: TextAlign | "") =>
    setTextAlign(textAlign || undefined);

  const [textDocoration, setTextDecoration] =
    makeInputStyleChangeHandler("textDecoration");

  const handleTextDecorationChange = (textDecoration: TextDecoration | "") =>
    setTextDecoration(textDecoration || undefined);

  const [fontStyle, setFontStyle] = makeInputStyleChangeHandler("fontStyle");

  const italicEnabled = fontStyle === "italic";

  const handleItalicChange = (pressed: boolean) =>
    setFontStyle(pressed ? "italic" : undefined);

  return (
    <div className="flex gap-2">
      <TextAlignToggleGroup
        textAlign={textAlign as TextAlign}
        onChange={handleTextAlignChange}
      />
      <TextDecorationToggleGroup
        textDecoration={textDocoration as TextDecoration}
        onChange={handleTextDecorationChange}
      />
      <ItalicToggle
        pressed={italicEnabled}
        onPressedChange={handleItalicChange}
      />
    </div>
  );
}
