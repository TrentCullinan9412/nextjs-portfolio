import { createContext } from "react";
import { EmailElementMapTree, EmailNode } from "../types";

type ContextState = {
  tree?: EmailElementMapTree;
  selectedId?: string | undefined;
  setSelectedId: (nodeId?: string) => void;
  clearSelected: () => void;
  find: (nodeId?: string) => EmailNode | undefined;
  update: (nodeId: string, value: EmailNode) => void;
  remove: (nodeId: string) => void;
  moveOut: (nodeId: string) => void;
};

const noop = () => {};

const EmailContext = createContext<ContextState>({
  setSelectedId: noop,
  clearSelected: noop,
  find: () => undefined,
  update: noop,
  remove: noop,
  moveOut: noop,
});

export default EmailContext;
