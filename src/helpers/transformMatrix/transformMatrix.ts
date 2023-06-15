export default function transformMatrix(matrix: boolean[][]) {
  const transformedMatrix: boolean[][] = [];

  matrix.forEach((row) => {
    row.forEach((cell, x) =>
      transformedMatrix[x]?.push(cell) ||
      transformedMatrix.push([cell])
    );
  });
  console.log({ matrix, transformedMatrix });
  return transformedMatrix;
}
