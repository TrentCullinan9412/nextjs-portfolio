import { useContext } from "react";
import EmailContext from "../../context";
import { EmailElementNode, Text } from "../../types";

type Props = {
  node: EmailElementNode & Text;
};

export function NodeTextInput({ node }: Props) {
  const { update } = useContext(EmailContext);

  const { id, style, text } = node;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    update(id, { ...node, text: e.target.value });

  return (
    <input
      className="inline-block border-none bg-transparent w-full active:outline-none focus:outline-none vis"
      value={text || ""}
      onChange={handleChange}
      style={style}
    />
  );
}
