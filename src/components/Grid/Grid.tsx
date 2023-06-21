import { Cell } from "..";
import { CellState, Coords, Grid, GridRow } from "../../types";
import css from "./Grid.module.css";

interface Props {
  grid: Grid;
  onCellClick: (coords: Coords) => void;
}

export default function Grid({ grid: grid, onCellClick }: Props) {
  return (
    <div className={css.Board}>
      {grid.map((row: GridRow, y) =>
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
