import { Coords, CellState } from "../../types";

import Cell from "../Cell/Cell";
import css from "./Board.module.css";

interface Props {
  userMatrix: CellState[][];
  onCellClick: (coords: Coords) => void;
}

export default function Board({ userMatrix, onCellClick }: Props) {
  return (
    <div className={css.Board}>
      {userMatrix.map((row: CellState[], y) =>
        row.map((_, x) => (
          <Cell
            key={`cell-${y}${x}`}
            coords={[x, y]}
            onCellClick={onCellClick}
            userMatrix={userMatrix}
          />
        ))
      )}
    </div>
  );
}
