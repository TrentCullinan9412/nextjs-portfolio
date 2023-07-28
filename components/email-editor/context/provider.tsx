"use client";

import { PropsWithChildren, useState } from "react";
import EmailContext from ".";
import {
  EmailElementMapTree,
  EmailElementNode,
  EmailNode,
  EmailNodeWithChildren,
} from "../types";

type Props = {
  tree: EmailElementMapTree;
};

export function EmailContextProvider({
  tree,
  children,
}: PropsWithChildren<Props>) {
  const [t, setT] = useState(tree);
  const [selectedId, setSelectedId] = useState<string>();

  const clearSelected = () => setSelectedId(undefined);

  const find = (nodeId?: string) => {
    if (!nodeId) return undefined;
    if (!t) return undefined;

    return t && t?.items[nodeId];
  };

  const update = (nodeId: string, value: EmailNode) => {
    setT((prev) => ({ ...prev, items: { ...prev.items, [nodeId]: value } }));
  };

  const remove = (nodeId: string) =>
    setT((prev) => {
      const items = { ...prev.items };

      const target = items[nodeId] as EmailElementNode;

      const parentId = target.parentId as string;

      const parent = items[parentId] as EmailNodeWithChildren;

      if (parent.children) {
        const idx = parent.children.indexOf(nodeId);

        parent.children.splice(idx, 1);
      }

      delete items[nodeId];

      return { ...prev, items };
    });

  const moveOut = (nodeId: string) =>
    setT((prev) => {
      const items = { ...prev.items };

      const target = items[nodeId];

      if (typeof target === "string") return { ...prev, items };

      const parentId = target.parentId;

      if (!parentId) return { ...prev, items };

      const parent = items[parentId] as EmailElementNode &
        EmailNodeWithChildren;

      const grandparentId = parent.parentId;

      if (!grandparentId) return { ...prev, items };

      const grandparent = items[grandparentId] as EmailNodeWithChildren;

      // remove child node from parent node
      if (parent.children) {
        const idx = parent.children.indexOf(nodeId);

        parent.children.splice(idx, 1);
      }

      // add parent's parent node to child node
      target.parentId = grandparentId;

      // add child node to parent's parent node
      if (grandparent.children) {
        const parentIdx = grandparent.children.indexOf(parentId);

        grandparent.children.splice(parentIdx, 0, nodeId);
      }

      return { ...prev, items };
    });

  return (
    <EmailContext.Provider
      value={{
        tree: t,
        selectedId,
        setSelectedId,
        clearSelected,
        find,
        update,
        remove,
        moveOut,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
}
