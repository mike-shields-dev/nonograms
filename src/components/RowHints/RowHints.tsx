import css from "./RowHints.module.css";
import RowHint from "../RowHint/RowHint";
interface Props {
  matrix: boolean[][];
}

type Hint = number[];

export default function RowHints({ matrix }: Props) {
  const rowHints = matrix.map((row) => {
    const tempHint: Hint = [];

    return row.reduce((tempHint, cell, cellIndex) => {
      const prevCell = row[cellIndex - 1];

      if (cell) {
        prevCell ? tempHint[tempHint.length - 1]++ : tempHint.push(1);
      }

      return tempHint;
    }, tempHint);
  });

  return (
    <div className={css.row_hints}>
      {rowHints.map((rowHint, rowIndex) => (
        <RowHint key={`row-hint${rowIndex}`} rowHint={rowHint} />
      ))}
    </div>
  );
}
