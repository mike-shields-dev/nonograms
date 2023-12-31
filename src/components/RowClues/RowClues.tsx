import { Clue, Clues } from "../../types";
import css from "./RowClues.module.css";

interface Props {
  rowClues: Clues;
}

export default function RowClues({ rowClues }: Props) {
  return (
    <div className={css.row_clues}>
      {rowClues.map((rowClue: Clue, i) => (
        <div key={`row-clue${i}`} className="row_clues">
          {rowClue}
          {i < rowClues.length - 1 && ","}
        </div>
      ))}
    </div>
  );
}
