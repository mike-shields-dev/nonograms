import { CellState } from "../../types";

export default function switchState(currentState: CellState) {
  if (currentState === null) return true;
  if (currentState === true) return false;
  if (currentState === false) return null;
}