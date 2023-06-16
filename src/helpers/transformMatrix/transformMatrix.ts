import {
  Matrix,
  MatrixRow,
} from '../../types';

export default function transformMatrix(matrix: Matrix) {
  const transformedMatrix: Matrix = [];

  matrix.forEach((row: MatrixRow) => {
    row.forEach((cell, x) =>
      transformedMatrix[x]?.push(cell) ||
      transformedMatrix.push([cell])
    );
  });
  return transformedMatrix;
}
