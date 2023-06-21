import { Grid, GridRow } from "../../types";

export default function transformGrid(grid: Grid) {
  const transformedGrid: Grid = [];

  grid.forEach((row: GridRow) => {
    row.forEach(
      (cell, x) =>
        transformedGrid[x]?.push(cell) || transformedGrid.push([cell])
    );
  });

  return transformedGrid;
}
