"use client";

import { useContext } from "react";
import EmailContext from "../context";
import { Separator } from "../../ui/separator";
import { ColorInput } from "./components/color-input";
import { BackgroundColorInput } from "./components/background-color-input";
import { FontFamilyInput } from "./components/font-family-input";
import { FontSizeInput } from "./components/font-size-input";
import { LineHeightInput } from "./components/line-height-input";
import { NameInput } from "./components/name-input";
import { UrlInput } from "./components/url-input";
import { MarginInput } from "./components/margin-input";
import { PaddingInput } from "./components/padding-input";
import { HeadingLevelSelect } from "./components/heading-level-select";
import { FontWeightSelect } from "./components/font-weight-select";
import { HeightInput } from "./components/height-input";
import { WidthInput } from "./components/width-input";
import { TextToggleGroups } from "./components/text-toggle-groups";

const noChildren = ["hr", "image"] as const;
const heightElements = ["column", "image"] as const;
const widthElements = [
  ...heightElements,
  "container",
  "section",
  "row",
] as const;

export function PropertyEditor() {
  const { selectedId, find } = useContext(EmailContext);

  if (!selectedId) return null;

  const selected = find(selectedId);

  if (!selected) return null;

  const { id, type } = selected;

  const hasChildren = noChildren.every((x) => x !== type);
  const hasHeight = heightElements.some((x) => x === type);
  const hasWidth = hasHeight || widthElements.some((x) => x === type);

  return (
    <div className="grid space-y-2">
      <p className="text-muted-foreground text-xs">
        {id} ({type})
      </p>

      <NameInput />

      {(type === "anchor" || type === "button" || type === "image") && (
        <UrlInput />
      )}
      {(hasHeight || hasWidth) && (
        <div className="grid grid-flow-col gap-2">
          {hasWidth && <WidthInput />}
          {hasHeight && <HeightInput />}
        </div>
      )}
      <Separator />

      <div className="grid grid-flow-dense grid-cols-[min-content_1fr] gap-2 items-center">
        {type === "heading" && <HeadingLevelSelect />}
        <BackgroundColorInput />
        {hasChildren && <ColorInput />}
      </div>

      <Separator />

      <MarginInput />
      <PaddingInput />

      {hasChildren && (
        <>
          <Separator />
          <TextToggleGroups />
          <LineHeightInput />
          <FontFamilyInput />

          <div className="grid grid-cols-2 gap-2">
            <FontSizeInput />
            <FontWeightSelect />
          </div>
        </>
      )}
    </div>
  );
}
