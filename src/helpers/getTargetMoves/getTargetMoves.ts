import { Matrix } from "../../types";

const numberOfMovesToGetStateToTrue = 1;
const numberOfMovesToGetStateToFalse = 2;

export default function getTargetMoves(levelMatrix: Matrix) {
  return levelMatrix.flat().reduce((targetMoves, cell) => {
    cell
      ? (targetMoves += numberOfMovesToGetStateToTrue)
      : (targetMoves += numberOfMovesToGetStateToFalse);

    return targetMoves;
  }, 0);
}
