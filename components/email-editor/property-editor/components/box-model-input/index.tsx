import * as React from "react";
import { useState } from "react";
import { PositionInput } from "./position-input";
import { InputMode, ModeSelect } from "./mode-select";

type Props = {
  value?: string;
  onChange: (value: string) => void;
};

type InnerProps = Props & {
  split?: string[];
};

function DirectionBoxModelInput({ split, onChange }: InnerProps) {
  const [topValue = "", rightValue = "", bottomValue = "", leftValue = ""] =
    split ?? ["", "", "", ""];

  const handleTopChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = `${e.target.value || 0} ${rightValue || 0} ${
      bottomValue || 0
    } ${leftValue || 0}`.trim();

    onChange(value);
  };

  const handleRightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = `${topValue || 0} ${e.target.value || 0} ${
      bottomValue || 0
    } ${leftValue || 0}`.trim();

    onChange(value);
  };

  const handleBottomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = `${topValue || 0} ${rightValue || 0} ${e.target.value || 0} ${
      leftValue || 0
    }`.trim();

    onChange(value);
  };

  const handleLeftChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = `${topValue || 0} ${rightValue || 0} ${bottomValue || 0} ${
      e.target.value || 0
    }`.trim();

    onChange(value);
  };

  return (
    <div className="flex-1 grid grid-cols-4 gap-2">
      <PositionInput
        value={topValue}
        onChange={handleTopChange}
        position="top"
      />
      <PositionInput
        value={rightValue}
        onChange={handleRightChange}
        position="right"
      />
      <PositionInput
        value={bottomValue}
        onChange={handleBottomChange}
        position="bottom"
      />
      <PositionInput
        value={leftValue}
        onChange={handleLeftChange}
        position="left"
      />
    </div>
  );
}

function XYBoxModelInput({ split, onChange }: InnerProps) {
  const [yValue = "", xValue = ""] = split ?? ["", ""];

  const handleYChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = `${e.target.value || 0} ${xValue || 0}`.trim();

    onChange(value);
  };

  const handleXChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = `${yValue || 0} ${e.target.value || 0}`.trim();

    onChange(value);
  };

  return (
    <div className="flex-1 grid grid-cols-2 gap-2">
      <PositionInput value={yValue} onChange={handleYChange} position="y" />
      <PositionInput value={xValue} onChange={handleXChange} position="x" />
    </div>
  );
}

function DirectionXBoxModelInput({ split, onChange }: InnerProps) {
  const [topValue = "", xValue = "", bottomValue = ""] = split ?? ["", "", ""];

  const handleTopChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = `${e.target.value || 0} ${xValue || 0} ${
      bottomValue || 0
    }`.trim();

    onChange(value);
  };

  const handleXChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = `${topValue || 0} ${e.target.value || 0} ${
      bottomValue || 0
    }`.trim();

    onChange(value);
  };

  const handleBottomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = `${topValue || 0} ${xValue || 0} ${
      e.target.value || 0
    }`.trim();

    onChange(value);
  };

  return (
    <div className="flex-1 grid grid-cols-3 gap-2">
      <PositionInput
        value={topValue}
        onChange={handleTopChange}
        position="top"
      />
      <PositionInput value={xValue} onChange={handleXChange} position="x" />
      <PositionInput
        value={bottomValue}
        onChange={handleBottomChange}
        position="bottom"
      />
    </div>
  );
}

function ManualBoxModelInput({ value, onChange }: InnerProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <PositionInput position="all" value={value} onChange={handleChange} />;
}

type InputComponent = (props: InnerProps) => JSX.Element;

function GetInputModeComponent(
  split: string[],
  userMode?: InputMode,
): [InputMode, InputComponent] {
  if (userMode) {
    switch (userMode) {
      case "manual":
        return [userMode, ManualBoxModelInput];
      case "y/x":
        return [userMode, XYBoxModelInput];
      case "top/x/bottom":
        return [userMode, DirectionXBoxModelInput];
      default:
        return [userMode, DirectionBoxModelInput];
    }
  }
  switch (split.length) {
    case 1:
      return ["manual", ManualBoxModelInput];
    case 2:
      return ["y/x", XYBoxModelInput];
    case 3:
      return ["top/x/bottom", DirectionXBoxModelInput];
    default:
      return ["top/right/left/bottom", DirectionBoxModelInput];
  }
}

export function BoxModelInput(props: Props) {
  const { value, onChange } = props;

  const [userMode, setUserMode] = useState<InputMode>();

  const split = value?.split(" ") ?? [];

  const [mode, Input] = GetInputModeComponent(split, userMode);

  const handleUserModeChange = (mode: InputMode) => {
    setUserMode(mode);
  };

  return (
    <div className="flex gap-1">
      <Input value={value} split={split} onChange={onChange} />
      <div>
        <ModeSelect mode={mode} onChange={handleUserModeChange} />
      </div>
    </div>
  );
}
