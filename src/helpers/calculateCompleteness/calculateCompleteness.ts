import { CellState, Grid } from "../../types";

export default function calculateCompleteness(Grid: Grid, userGrid: Grid) {
  const flatGrid = Grid.flat();
  const flatUserGrid = userGrid.flat();

  const completed = flatGrid.reduce((completed: number, cell: CellState, i) => {
    if (cell === flatUserGrid[i]) {
      completed++;
    }
    return completed;
  }, 0);

  return Math.round(((completed / Grid.length) * 100) / Grid.length);
}
