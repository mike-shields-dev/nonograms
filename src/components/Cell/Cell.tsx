import useToggle from "../../hooks/useToggle/useToggle";

import css from "./Cell.module.css";

import { Coords, CellState } from "../../types";
import { useEffect } from "react";

interface Props {
  coords: Coords;
  onStateChange: (coords: Coords, state: CellState | (() => void)) => void;
}

export default function Cell({ coords, onStateChange }: Props) {
  const [state, toggleState] = useToggle();

  function onClick() {
    typeof toggleState === "function" && toggleState();
  }

  useEffect(() => {
    if (state !== null) {
      onStateChange(coords, state);
    }
  }, [onStateChange, coords, state]);

  return (
    <button
      value={`${state}`}
      onClick={onClick}
      className={`
        ${css.Cell} 
        ${css[`${state}`]} 
      `}
    />
  );
}
