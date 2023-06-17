import { cluesArrayFromMatrix, transformMatrix } from "../../helpers";
import "../../helpers/transformMatrix/transformMatrix";
import { Matrix } from "../../types";
import { ColumnClues } from "../../components";
import css from "./ColumnCluesContainer.module.css";

interface Props {
  levelMatrix: Matrix;
}

export default function ColumnCluesContainer({ levelMatrix: matrix }: Props) {
  const transformedMatrix = transformMatrix(matrix);
  const columnCluesArr = cluesArrayFromMatrix(transformedMatrix);

  return (
    <div className={css.column_clues_container}>
      {columnCluesArr.map((columnClues, i) => (
        <ColumnClues key={`column_clues${i}`} columnClues={columnClues} />
      ))}
    </div>
  );
}
