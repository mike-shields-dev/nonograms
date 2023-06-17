import { Matrix, Clues } from "../../types";

import { cluesArrayFromMatrix } from "../../helpers/";

import { RowClues } from "../../components";

import css from "./RowCluesContainer.module.css";

interface Props {
  levelMatrix: Matrix;
}

export default function RowCluesContainer({ levelMatrix: matrix }: Props) {
  const rowCluesArr = cluesArrayFromMatrix(matrix);

  return (
    <div className={css.row_hints}>
      {rowCluesArr.map((rowClues: Clues, i) => (
        <RowClues key={`row-hint${i}`} rowClues={rowClues} />
      ))}
    </div>
  );
}
