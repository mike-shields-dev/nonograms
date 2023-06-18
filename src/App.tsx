import "./App.css";

import { useEffect, useState } from "react";

import levels from "./assets/levels.json";
import {
  Board,
  ColumnCluesContainer,
  Header,
  LevelDisplay,
  MovesDisplay,
  Portal,
  RowCluesContainer,
  TimeDisplay,
} from "./components";
import {
  calculateCompleteness,
  getTargetMoves,
  freshUserMatrix,
  setCSSGridResolution,
  toggleState,
} from "./helpers";
import { CellState, Coords, LevelStats } from "./types";

function App() {
  const [levelMoves, setLevelMoves] = useState(0);
  const [level, setLevel] = useState(0);
  const [startTimeMs, setStartTimeMs] = useState<number>(0);
  const [elapsedTimeMs, setElapsedTimeMs] = useState<number>();
  const levelMatrix = levels[level].map((row) => row.map(Boolean));
  const gridResolution = levelMatrix.length;
  const [userMatrix, setUserMatrix] = useState(freshUserMatrix(gridResolution));
  const isLevelComplete =
    JSON.stringify(userMatrix) === JSON.stringify(levelMatrix);
  const [gameStats, setGameStats] = useState<LevelStats[]>([]);
  const totalElapsedTimeMs = gameStats.reduce(
    (totalElapsedTimeMs, { time: elapsedTimeMs }) =>
      totalElapsedTimeMs + elapsedTimeMs,
    0
  );
  const totalMoves = gameStats.reduce(
    (totalMoves, { moves }) => totalMoves + moves,
    0
  );

  setCSSGridResolution(gridResolution);

  useEffect(() => {
    setCSSGridResolution(gridResolution);
    setUserMatrix(freshUserMatrix(gridResolution));
    setStartTimeMs(Date.now());
  }, [gridResolution]);

  useEffect(() => {
    if (!isLevelComplete) return;

    const elapsedTimeMs = Date.now() - startTimeMs;
    const levelStats = { time: elapsedTimeMs, moves: levelMoves };

    setElapsedTimeMs(elapsedTimeMs);
    setGameStats((gameStats) => [...gameStats, levelStats]);
  }, [isLevelComplete, startTimeMs, levelMoves]);

  function onCellClick(coords: Coords): void {
    setLevelMoves(levelMoves + 1);
    setUserMatrix(
      userMatrix.map((row, y) =>
        row.map((cellState: CellState, x: number) =>
          y === coords.y && x === coords.x ? toggleState(cellState) : cellState
        )
      )
    );
  }

  function onNextLevelBtnClick() {
    setLevel(level + 1);
    setLevelMoves(0);
    setUserMatrix(freshUserMatrix(gridResolution));
  }

  return (
    <>
      <Header completed={calculateCompleteness(levelMatrix, userMatrix)}>
        <LevelDisplay level={level} />
        <MovesDisplay moves={levelMoves} />
      </Header>
      <main>
        <div className="column_clues_container_gridarea">
          <ColumnCluesContainer levelMatrix={levelMatrix} />
        </div>
        <div className="row_clues_container_gridarea">
          <RowCluesContainer levelMatrix={levelMatrix} />
        </div>
        <div className="board_wrapper">
          <Board userMatrix={userMatrix} onCellClick={onCellClick} />
        </div>
        {isLevelComplete && (
          <Portal>
            <p>Target Moves: {getTargetMoves(levelMatrix)}</p>
            <p>Your Moves: {levelMoves}</p>
            <p>Total Moves: {totalMoves}</p>
            <p>
              Time:
              <TimeDisplay durationMs={elapsedTimeMs} />
            </p>
            <p>
              Total Time:
              <TimeDisplay durationMs={totalElapsedTimeMs} />
            </p>
            <button onClick={onNextLevelBtnClick}>Next Level</button>
          </Portal>
        )}
      </main>
    </>
  );
}

export default App;
