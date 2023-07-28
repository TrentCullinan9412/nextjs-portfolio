import { Canvas } from "./canvas";
import { ComponentMenu } from "./component-menu";
import { PropertyEditor } from "./property-editor";
import { EmailContextProvider } from "./context/provider";

import { ExampleOne } from "./examples/example-one";

export default function EmailEditor() {
  return (
    <div className="grid grid-cols-10 w-full h-[90vh] gap-4">
      <ComponentMenu />

      <EmailContextProvider tree={ExampleOne}>
        <div className="col-span-7">
          <Canvas />
        </div>
        <div className="col-span-2">
          <PropertyEditor />
        </div>
      </EmailContextProvider>
    </div>
  );
}
