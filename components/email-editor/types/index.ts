export type Width = {
  width?: string | number;
};

export type Height = Width & {
  height?: string | number;
};

export type Href = {
  href?: string;
};

export { HeadingTypes } from "./components";
export type { Text, HeadingLevel } from "./components";

export type {
  NodeType,
  EmailElement,
  EmailNode,
  EmailElementNode,
  EmailNodeWithChildren,
  EmailElementMapTree,
  EmailElementMap,
  HeadingElement,
  HeightElement,
  WidthElement,
  HrefElement,
} from "./elements";
