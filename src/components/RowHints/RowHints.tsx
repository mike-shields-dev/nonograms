import hintsFromMatrix from "../../helpers/cluesArrayFromMatrix/cluesArrayFromMatrix";
import RowHint from "../RowHint/RowHint";
import css from "./RowHints.module.css";

interface Props {
  matrix: boolean[][];
}

export default function RowHints({ matrix }: Props) {
  const rowHints = hintsFromMatrix(matrix);

  return (
    <div className={css.row_hints}>
      {rowHints.map((rowHint, rowIndex) => (
        <RowHint key={`row-hint${rowIndex}`} rowHint={rowHint} />
      ))}
    </div>
  );
}
