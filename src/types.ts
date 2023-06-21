type Coords = { x: number; y: number };

type CellState = boolean | null;

type GridRow = CellState[];

type Grid = GridRow[];

type Clue = number;

type Clues = Clue[];

type LevelStats = {
  time: number;
  moves: number;
};

export type { CellState, Clue, Clues, Coords, Grid, GridRow, LevelStats };
