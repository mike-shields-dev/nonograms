type Coords = { x: number; y: number };

type CellState = boolean | null;

type MatrixRow = CellState[];

type Matrix = MatrixRow[];

type Clue = number;

type Clues = Clue[];

type LevelStats = {
  time: number;
  moves: number;
};

export type { CellState, Clue, Clues, Coords, LevelStats, Matrix, MatrixRow };
