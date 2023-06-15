import transformMatrix from "../../helpers/transformMatrix/transformMatrix";
import hintsFromMatrix from "../../helpers/hintsFromMatrix/hintsFromMatrix";

import ColumnHint from "../ColumnHint/ColumnHint";

import css from "./ColumnHints.module.css";

interface Props {
  matrix: boolean[][];
}

export default function ColumnHints({ matrix }: Props) {
  const transformedMatrix = transformMatrix(matrix);
  const columnHints = hintsFromMatrix(transformedMatrix);

  return (
    <div className={css.column_hints}>
      {columnHints.map((columnHint, columnIndex) => (
        <ColumnHint key={`column-hint${columnIndex}`} columnHint={columnHint} />
      ))}
    </div>
  );
}
