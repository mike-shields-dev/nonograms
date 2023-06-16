type Coords = { x: number; y: number };

type CellState = boolean | null;

type MatrixRow = CellState[];

type Matrix = MatrixRow[];

type Clue = number;

type Clues = Clue[];

export type { Coords, CellState, Matrix, MatrixRow, Clue, Clues };
