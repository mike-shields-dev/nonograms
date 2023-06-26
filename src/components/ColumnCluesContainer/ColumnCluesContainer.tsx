import { cluesArrayFromLevelGrid, transformGrid } from "../../utils";
import "../../utils/transformGrid/transformGrid";
import { Grid } from "../../types";
import { ColumnClues } from "../../components";
import css from "./ColumnCluesContainer.module.css";

interface Props {
  levelGrid: Grid;
}

export default function ColumnCluesContainer({ levelGrid: Grid }: Props) {
  const transformedGrid = transformGrid(Grid);
  const columnCluesArr = cluesArrayFromLevelGrid(transformedGrid);

  return (
    <div className={`${css.column_clues_container} outer-border`}>
      {columnCluesArr.map((columnClues, i) => (
        <ColumnClues key={`column_clues${i}`} columnClues={columnClues} />
      ))}
    </div>
  );
}
