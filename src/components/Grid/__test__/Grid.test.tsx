import { describe, expect, it, vi } from "vitest";

import { cleanup, render, screen } from "@testing-library/react";

import Grid from "../Grid";

const onCellClick = vi.fn();

type Level = (boolean | null)[][];

const testGrids: Level[] = [
  [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ],
];

describe("Board", () => {
  it("displays the correct number of grid cells based on the gridResolution", () => {
    testGrids.forEach((grid) => {
      const cellCount = grid.length ** 2;

      render(<Grid grid={grid} onCellClick={onCellClick} />);

      expect(screen.getAllByRole("button")).toHaveLength(cellCount);

      cleanup();
    });
  });
});
