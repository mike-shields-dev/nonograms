import { it, expect, describe, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Board from "../Board";

const onCellClick = vi.fn();

type Level = (boolean | null)[][];

const userMatrices: Level[] = [
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
    userMatrices.forEach((userMatrix) => {
      const cellCount = userMatrix.length ** 2;

      render(<Board userMatrix={userMatrix} onCellClick={onCellClick} />);

      expect(screen.getAllByRole("button")).toHaveLength(cellCount);

      cleanup();
    });
  });
});
