type Hint = number[];

export default function hintsFromMatrix(matrix: boolean[][]) {
  return matrix.map((row) => {
    const tempHint: Hint = [];

    return row.reduce((tempHint, cell, cellIndex) => {
      const prevCell = row[cellIndex - 1];

      if (cell) {
        prevCell ? tempHint[tempHint.length - 1]++ : tempHint.push(1);
      }

      return tempHint;
    }, tempHint);
  }).filter(subArray => subArray.length > 0);
}
