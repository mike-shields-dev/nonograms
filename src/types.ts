type Coords = { x: number, y: number };

type CellState = boolean | null;

type MatrixRow = CellState[];

type Matrix = MatrixRow[];

export type { Coords, CellState, Matrix, MatrixRow };