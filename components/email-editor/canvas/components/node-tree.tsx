import { useContext } from "react";
import EmailContext from "../../context";
import { NodeTextInput } from "./node-text-input";
import { NodeContainer } from "./node-container";
import { NodeHeader } from "./node-header";
import { NodeImage } from "./node-image";

export type Props = {
  rootId: string;
  nodeId: string;
};

export function NodeTree({ rootId, nodeId }: Props) {
  const { selectedId, setSelectedId, find } = useContext(EmailContext);

  if (!nodeId) return null;

  const node = find(nodeId);

  if (!node) return null;

  const { parentId, name, type, style } = node;
  const label = name || type;
  const selected = selectedId === nodeId;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setSelectedId(nodeId);
  };

  switch (type) {
    case "text": {
      const parent = find(parentId);

      const parentStyle = parent?.style ?? {};

      const nodeInputStyle = { ...(style ?? {}), ...parentStyle };

      delete nodeInputStyle["margin"];
      delete nodeInputStyle["padding"];

      return <NodeTextInput node={{ ...node, style: nodeInputStyle }} />;
    }
    case "image":
      return (
        <NodeContainer
          rootId={rootId}
          nodeId={nodeId}
          parentId={parentId}
          label={label}
          onClick={handleClick}
          className="basis-0 mx-auto"
          asChild
          selected={selected}
          innerStyle={style}
        >
          <NodeImage />
        </NodeContainer>
      );
    case "heading":
      return (
        <NodeContainer
          rootId={rootId}
          nodeId={nodeId}
          parentId={parentId}
          label={label}
          onClick={handleClick}
          asChild
          selected={selected}
          innerStyle={style}
        >
          <NodeHeader level={node.as}>
            {node.children?.map((x) => (
              <NodeTree key={x} rootId={rootId} nodeId={x} />
            ))}
          </NodeHeader>
        </NodeContainer>
      );
    case "hr":
      return (
        <NodeContainer
          rootId={rootId}
          nodeId={nodeId}
          parentId={parentId}
          label={label}
          onClick={handleClick}
          selected={selected}
          innerStyle={style}
        >
          <hr className="w-full border-primary border-2" />
        </NodeContainer>
      );
    case "column":
      return (
        <NodeContainer
          rootId={rootId}
          nodeId={nodeId}
          parentId={parentId}
          label={label}
          onClick={handleClick}
          className="flex-1"
          asChild
          selected={selected}
          innerStyle={style}
        >
          <div>
            {node.children?.map((x) => (
              <NodeTree key={x} rootId={rootId} nodeId={x} />
            ))}
          </div>
        </NodeContainer>
      );
    default:
      return (
        <NodeContainer
          rootId={rootId}
          nodeId={nodeId}
          parentId={parentId}
          label={label}
          onClick={handleClick}
          selected={selected}
          innerStyle={style}
        >
          {node.children?.map((x) => (
            <NodeTree key={x} rootId={rootId} nodeId={x} />
          ))}
        </NodeContainer>
      );
  }
}
