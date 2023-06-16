import { CellState, Matrix } from "../../types";

export default function calculateCompleteness(matrix: Matrix, userMatrix: Matrix) {
  const flatMatrix = matrix.flat();
  const flatUserMatrix = userMatrix.flat();

  const completed = flatMatrix.reduce((completed: number, cell: CellState, i) => {
    if(cell === flatUserMatrix[i]) {
      completed++;
    }
    return completed;
  }, 0);

  return Math.round((completed / matrix.length * 100) / matrix.length);
}