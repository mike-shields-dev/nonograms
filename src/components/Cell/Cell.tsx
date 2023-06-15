import css from "./Cell.module.css";

import { Coords, CellState} from "../../types";

interface Props {
  coords: Coords;
  userMatrix: CellState[][];
  onCellClick: (coords: Coords) => void;
}

export default function Cell({ coords, onCellClick, userMatrix}: Props) {
  const [x, y] = coords;
  const state = userMatrix[y][x];
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
