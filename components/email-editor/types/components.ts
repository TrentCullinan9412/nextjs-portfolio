import { Height, Href, Width } from ".";

export type Container = Width & {
  type: "container";
};

export type Section = Width & {
  type: "section";
};

export type Column = Height & {
  type: "column";
};

export type Row = Width & {
  type: "row";
};

export type Paragraph = {
  type: "paragraph";
};

export type Text = {
  type: "text";
  text?: string;
};

export const HeadingTypes = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

export type HeadingLevel = (typeof HeadingTypes)[number];

export type Heading = {
  type: "heading";
  as: HeadingLevel;
};

export type Button = Href & {
  type: "button";
};

export type Anchor = Href & {
  type: "anchor";
};

export type HorizontalRow = {
  type: "hr";
};

export type Image = Href &
  Height & {
    type: "image";
  };
