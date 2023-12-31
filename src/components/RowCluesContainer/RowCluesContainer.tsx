import { RowClues } from "../../components";
import { cluesArrayFromLevelGrid } from "../../utils";
import { Clues, Grid } from "../../types";
import css from "./RowCluesContainer.module.css";

interface Props {
  levelGrid: Grid;
}

export default function RowCluesContainer({ levelGrid: Grid }: Props) {
  const rowCluesArr = cluesArrayFromLevelGrid(Grid);

  return (
    <div className={`${css.row_clues_container} outer-border`}>
      {rowCluesArr.map((rowClues: Clues, i) => (
        <RowClues key={`row-clues${i}`} rowClues={rowClues} />
      ))}
    </div>
  );
}
