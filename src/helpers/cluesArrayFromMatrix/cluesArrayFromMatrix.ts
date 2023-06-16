import { Clues, Matrix, MatrixRow } from "../../types";

export default function cluesFromMatrix(matrix: Matrix) {
  return matrix.map((row: MatrixRow) => {
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
