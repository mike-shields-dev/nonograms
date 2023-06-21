import { Clues, Grid, GridRow } from "../../types";

export default function cluesArrayFromLevelGrid(Grid: Grid) {
  return Grid.map((row: GridRow) => {
    const tempClues: Clues = [];

    return row.reduce((tempClues, cell, cellIndex) => {
      const prevCell = row[cellIndex - 1];

      if (cell) {
        prevCell ? tempClues[tempClues.length - 1]++ : tempClues.push(1);
      }

      return tempClues;
    }, tempClues);
  });
}
