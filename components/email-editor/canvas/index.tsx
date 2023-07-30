"use client";

import { useContext } from "react";
import EmailContext from "../context";
import { NodeTree } from "./components/node-tree";

export function Canvas() {
  const { tree } = useContext(EmailContext);

  return (
    <div className="w-full h-full bg-muted">
      <div className="h-full w-[50vw] mx-auto py-8">
        {tree?.root &&
          tree.root.map((nodeId) => <NodeTree key={nodeId} nodeId={nodeId} />)}
      </div>
    </div>
  );
}
