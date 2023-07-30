"use client";

import { Canvas } from "./canvas";
import { ComponentMenu } from "./component-menu";
import { PropertyEditor } from "./property-editor";
import { EmailContextProvider } from "./context/provider";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { ExampleOne } from "./examples/example-one";

export default function EmailEditor() {
  return (
    <div className="grid grid-cols-10 w-full h-[90vh] gap-4">
      <DndProvider backend={HTML5Backend}>
        <ComponentMenu />

        <EmailContextProvider tree={ExampleOne}>
          <div className="col-span-7">
            <Canvas />
          </div>
          <div className="col-span-2">
            <PropertyEditor />
          </div>
        </EmailContextProvider>
      </DndProvider>
    </div>
  );
}
