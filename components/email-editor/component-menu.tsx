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
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const components = [
  {
    name: "Container",
    Icon: GridIcon,
  },
  {
    name: "Column",
    Icon: ColumnsIcon,
  },
  {
    name: "Row",
    Icon: RowsIcon,
  },
  {
    name: "Section",
    Icon: TableIcon,
  },
  {
    name: "Button",
    Icon: ButtonIcon,
  },
  {
    name: "Link",
    Icon: Link2Icon,
  },
  {
    name: "Image",
    Icon: ImageIcon,
  },
  {
    name: "Horizontal Row",
    Icon: DividerHorizontalIcon,
  },
  {
    name: "Heading",
    Icon: HeadingIcon,
  },
  {
    name: "Paragraph",
    Icon: TextIcon,
  },
];

export function ComponentMenu() {
  return (
    <RadioGroup className="flex flex-col gap-4">
      {components.map(({ name, Icon }) => (
        <Label
          key={name}
          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
        >
          <RadioGroupItem id={name} value={name} className="sr-only" />
          <Icon className="mb-2 h-6 w-6" />
          {name}
        </Label>
      ))}
    </RadioGroup>
  );
}
