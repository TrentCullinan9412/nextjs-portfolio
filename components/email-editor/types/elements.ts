import { CSSProperties } from "react";
import { Height, Width } from ".";
import {
  Anchor,
  Button,
  Column,
  Container,
  Heading,
  HorizontalRow,
  Image,
  Paragraph,
  Row,
  Section,
  Text,
} from "./components";

export type EmailElement = {
  id: string;
  name?: string;
  parentId?: string;
  className?: string;
  style?: CSSProperties;
};

export type WidthElement = EmailElement & Width;
export type HeightElement = EmailElement & Height;

export type HrefElement = EmailElement & {
  href?: string;
};

export type HeadingElement = EmailElement & Heading;

export type EmailElementNode = EmailElement &
  (
    | EmailNodeWithChildren<Container>
    | EmailNodeWithChildren<Section>
    | EmailNodeWithChildren<Column>
    | EmailNodeWithChildren<Row>
    | HorizontalRow
    | EmailNodeWithChildren<Paragraph>
    | Text
    | EmailNodeWithChildren<Heading>
    | EmailNodeWithChildren<Anchor>
    | EmailNodeWithChildren<Button>
    | Image
  );

export type EmailNode = EmailElementNode;

export type EmailNodeWithChildren<T = unknown> = T & {
  children?: string[];
};

export type EmailElementMap = {
  [nodeId: string]: EmailNode;
};

export type EmailElementMapTree = {
  root: string;
  items: EmailElementMap;
};
