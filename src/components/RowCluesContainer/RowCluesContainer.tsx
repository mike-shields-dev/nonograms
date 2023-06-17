import { RowClues } from "../../components";
import { cluesArrayFromMatrix } from "../../helpers/";
import { Clues, Matrix } from "../../types";
import css from "./RowCluesContainer.module.css";

interface Props {
  levelMatrix: Matrix;
}

export default function RowCluesContainer({ levelMatrix: matrix }: Props) {
  const rowCluesArr = cluesArrayFromMatrix(matrix);

  return (
    <div className={css.row_clues_container}>
      {rowCluesArr.map((rowClues: Clues, i) => (
        <RowClues key={`row-clues${i}`} rowClues={rowClues} />
      ))}
    </div>
  );
}
