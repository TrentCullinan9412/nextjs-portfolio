"use client";

import { Label } from "../../ui/label";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { useDrag } from "react-dnd";
import { Component, Components } from "./components";

function DraggableComponent({ name, nodeType, Icon }: Component) {
  const [, drag] = useDrag(() => ({
    type: nodeType,
    item: { nodeType },
  }));

  return (
    <Label
      ref={drag}
      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
    >
      <RadioGroupItem id={name} value={name} className="sr-only" />
      <Icon className="mb-2 h-6 w-6" />
      {name}
    </Label>
  );
}

export function ComponentMenu() {
  return (
    <RadioGroup className="flex flex-col gap-4">
      {Components.map((props) => (
        <DraggableComponent key={props.name} {...props} />
      ))}
    </RadioGroup>
  );
}
