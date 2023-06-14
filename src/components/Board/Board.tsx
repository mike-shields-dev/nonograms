import { useEffect } from "react";
import Cell from "../Cell/Cell";
import css from "./Board.module.css";

interface Props {
  currentLevel: boolean[][];
}

export default function Board({ currentLevel }: Props) {
  const gridSize = currentLevel[0].length;

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--gridSize", `${gridSize}`);
  }, [gridSize]);

  return (
    <div className={css.Board}>
      {currentLevel.map((row, y) =>
        row.map((_, x) => 
        <Cell key={`cell-${y}${x}`} coords={[x, y]} />)
      )}
    </div>
  );
}
