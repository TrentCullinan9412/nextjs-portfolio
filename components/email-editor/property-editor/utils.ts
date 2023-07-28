import { CSSProperties, useContext } from "react";
import EmailContext from "../context";
import { EmailElement } from "../types";

export const useSelection = () => {
  const { selectedId, find, update } = useContext(EmailContext);

  const selected = find(selectedId)!;

  const { id, style } = selected;

  const makeInputChangeHandler = <K extends EmailElement = EmailElement>(
    name: keyof K,
  ) => {
    const handleChange = (value: K[typeof name]) =>
      update(id, { ...selected, [name]: value });

    const s = selected as EmailElement as K;
    const value = (s[name] || "") as string;

    return [value, handleChange] as const;
  };

  const makeInputStyleChangeHandler = <T extends keyof CSSProperties>(
    name: T,
  ) => {
    const handleStyleChange = (value: CSSProperties[T]) =>
      update(id, {
        ...selected,
        style: { ...selected.style, [name]: value },
      });

    const clear = () =>
      update(id, {
        ...selected,
        style: { ...selected.style, [name]: undefined },
      });

    return [(style && style[name]) || "", handleStyleChange, clear] as const;
  };

  return {
    selectedId,
    selected,
    makeInputChangeHandler,
    makeInputStyleChangeHandler,
    update,
  };
};
