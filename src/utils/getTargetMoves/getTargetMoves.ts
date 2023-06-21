import { Grid } from "../../types";

const numberOfMovesToGetStateToTrue = 1;
const numberOfMovesToGetStateToFalse = 2;

export default function getTargetMoves(levelGrid: Grid) {
  return levelGrid.flat().reduce((targetMoves, cell) => {
    cell
      ? (targetMoves += numberOfMovesToGetStateToTrue)
      : (targetMoves += numberOfMovesToGetStateToFalse);

    return targetMoves;
  }, 0);
}
