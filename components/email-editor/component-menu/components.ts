import {
  ButtonIcon,
  ColumnsIcon,
  DividerHorizontalIcon,
  GridIcon,
  HeadingIcon,
  ImageIcon,
  Link2Icon,
  RowsIcon,
  TableIcon,
  TextIcon,
} from "@radix-ui/react-icons";
import { NodeType } from "../types";
import { IconProps } from "@radix-ui/react-icons/dist/types";

export type Component = {
  name: string;
  nodeType: NodeType;
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
};

export const Components: Component[] = [
  {
    name: "Container",
    nodeType: "container",
    Icon: GridIcon,
  },
  {
    name: "Column",
    nodeType: "column",
    Icon: ColumnsIcon,
  },
  {
    name: "Row",
    nodeType: "row",
    Icon: RowsIcon,
  },
  {
    name: "Section",
    nodeType: "section",
    Icon: TableIcon,
  },
  {
    name: "Button",
    nodeType: "button",
    Icon: ButtonIcon,
  },
  {
    name: "Link",
    nodeType: "anchor",
    Icon: Link2Icon,
  },
  {
    name: "Image",
    nodeType: "image",
    Icon: ImageIcon,
  },
  {
    name: "Horizontal Row",
    nodeType: "hr",
    Icon: DividerHorizontalIcon,
  },
  {
    name: "Heading",
    nodeType: "heading",
    Icon: HeadingIcon,
  },
  {
    name: "Paragraph",
    nodeType: "paragraph",
    Icon: TextIcon,
  },
];
