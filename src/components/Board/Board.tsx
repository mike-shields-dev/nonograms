import { Coords, CellState, Matrix, MatrixRow } from "../../types";

import { Cell } from "../../components";
import css from "./Board.module.css";

interface Props {
  userMatrix: Matrix;
  onCellClick: (coords: Coords) => void;
}

export default function Board({ userMatrix, onCellClick }: Props) {
  return (
    <div className={css.Board}>
      {userMatrix.map((row: MatrixRow, y) =>
        row.map((state: CellState, x) => (
          <Cell
            coords={{ x, y }}
            key={`cell-${y}${x}`}
            onCellClick={onCellClick}
            state={state}
          />
        ))
      )}
    </div>
  );
}
