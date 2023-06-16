import css from "./Cell.module.css";

import { Coords, CellState } from "../../types";

interface Props {
  coords: Coords;
  state: CellState;
  onCellClick: (coords: Coords) => void;
}

export default function Cell({ coords, state, onCellClick }: Props) {
  return (
    <button
      value={`${state}`}
      onClick={() => onCellClick(coords)}
      className={`
        ${css.Cell} 
        ${css[`${state}`]} 
      `}
    />
  );
}
