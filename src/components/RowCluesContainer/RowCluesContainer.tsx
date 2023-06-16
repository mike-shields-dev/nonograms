import { Matrix, Clues } from "../../types";

import cluesArrayFromMatrix from "../../helpers/cluesArrayFromMatrix/cluesArrayFromMatrix";

import RowClues from "../RowClues/RowClues";

import css from "./RowCluesContainer.module.css";

interface Props {
  matrix: Matrix;
}

export default function RowCluesContainer({ matrix }: Props) {
  const rowCluesArr = cluesArrayFromMatrix(matrix);

  return (
    <div className={css.row_hints}>
      {rowCluesArr.map((rowClues: Clues, i) => (
        <RowClues key={`row-hint${i}`} rowClues={rowClues} />
      ))}
    </div>
  );
}
