import "./App.css";

import { useEffect, useState } from "react";

import levels from "./assets/levels.json";
import {
  Grid,
  ColumnCluesContainer,
  Header,
  LevelDisplay,
  MovesDisplay,
  Portal,
  RowCluesContainer,
  StartOverlay,
  TimeDisplay,
} from "./components";
import {
  calculateCompleteness,
  freshUserGrid,
  getTargetMoves,
  setCSSGridResolution,
  toggleState,
} from "./helpers";
import { CellState, Coords, LevelStats } from "./types";
import RunningTimeDisplay from "./components/RunningTimeDisplay/RunningTimeDisplay";
import CompletedDisplay from "./components/CompletedDisplay/CompletedDisplay";

function App() {
  const [levelMoves, setLevelMoves] = useState(0);
  const [level, setLevel] = useState(0);
  const [startTimeMs, setStartTimeMs] = useState<number>(0);
  const [elapsedTimeMs, setElapsedTimeMs] = useState<number>();
  const levelGrid = levels[level].map((row) => row.map(Boolean));
  const gridResolution = levelGrid.length;
  const [userGrid, setUserGrid] = useState(freshUserGrid(gridResolution));
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const isLevelComplete =
    JSON.stringify(userGrid) === JSON.stringify(levelGrid);
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

  const completed = calculateCompleteness(levelGrid, userGrid);

  setCSSGridResolution(gridResolution);

  useEffect(() => {
    setCSSGridResolution(gridResolution);
    setUserGrid(freshUserGrid(gridResolution));
  }, [gridResolution]);

  useEffect(() => {
    if (!isLevelComplete) return;

    const elapsedTimeMs = Date.now() - startTimeMs;
    const levelStats = { time: elapsedTimeMs, moves: levelMoves };

    setElapsedTimeMs(elapsedTimeMs);
    setGameStats((gameStats) => [...gameStats, levelStats]);
  }, [isLevelComplete, startTimeMs, levelMoves]);

  function onCellClick(coords: Coords): void {
    if (isLevelComplete) return;

    setLevelMoves(levelMoves + 1);
    setUserGrid(
      userGrid.map((row, y) =>
        row.map((cellState: CellState, x: number) =>
          y === coords.y && x === coords.x ? toggleState(cellState) : cellState
        )
      )
    );
  }

  function onStart() {
    setStartTimeMs(Date.now());
    setHasGameStarted(true);
  }

  function onNext() {
    setHasGameStarted(false);
    setLevel(level + 1);
    setLevelMoves(0);
    setUserGrid(freshUserGrid(gridResolution));
  }

  function incrementLevelMoves() {
    setLevelMoves(levelMoves + 1);
  }

  return (
    <>
      <Header>
        <LevelDisplay level={level} />
        <MovesDisplay moves={levelMoves} />
        <RunningTimeDisplay isRunning={hasGameStarted && !isLevelComplete} />
        <CompletedDisplay
          onClick={incrementLevelMoves}
          completed={completed}
          isDisabled={levelMoves === 0 || isLevelComplete}
        />
      </Header>

      <main>
        <div className="column_clues_container_gridarea">
          <ColumnCluesContainer levelGrid={levelGrid} />
        </div>
        <div className="row_clues_container_gridarea">
          <RowCluesContainer levelGrid={levelGrid} />
        </div>
        <div className="board_gridarea">
          <Grid grid={userGrid} onCellClick={onCellClick} />
          {!hasGameStarted && <StartOverlay onClick={onStart} />}
        </div>
        {isLevelComplete && (
          <Portal>
            <p>Target Moves: {getTargetMoves(levelGrid)}</p>
            <p>Your Moves: {levelMoves}</p>
            <p>Total Moves: {totalMoves}</p>
            <p>
              Time:
              <TimeDisplay durationMs={elapsedTimeMs} />
            </p>
            <p>
              Total Time:
              <TimeDisplay
                durationMs={totalElapsedTimeMs}
                showMilliseconds={true}
              />
            </p>
            <button onClick={onNext} className="next_button">
              Next Level
            </button>
          </Portal>
        )}
      </main>
    </>
  );
}

export default App;
