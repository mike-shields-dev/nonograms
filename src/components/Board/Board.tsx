import Cell from "../Cell/Cell";
import css from "./Board.module.css";

interface Props {
  matrix: boolean[][];
}

export default function Board({ matrix }: Props) {
  return (
    <div className={css.Board}>
      {matrix.map((row, y) =>
        row.map((_, x) => 
        <Cell key={`cell-${y}${x}`} coords={[x, y]} />)
      )}
    </div>
  );
}
