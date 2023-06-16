import { Clues } from "../../types";
import css from "./ColumnClues.module.css";

interface Props {
  columnClues: Clues;
}

export default function ColumnClues({ columnClues }: Props) {
  return (
    <div className={css.column_clues}>
      {columnClues.map((clue, i) => (
        <div key={`column-clue${i}`} className="column_clue">
          {clue}
        </div>
      ))}
    </div>
  );
}
