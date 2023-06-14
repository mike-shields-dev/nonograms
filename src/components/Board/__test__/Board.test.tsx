import { it, expect, describe } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Board from "../Board";

type Level = boolean[][];

const levelData: Level[] = [
  [
    [true, true, true],
    [true, false, true],
    [true, true, true],
  ],
  [
    [true, true, true, true],
    [true, false, false, false],
    [true, true, true, true],
    [false, false, false, false],
  ],
];

describe("Board", () => {
  it("displays the correct number of grid cells based on the level data", () => {
    
    levelData.forEach((currentLevel) => {
      const [firstRow] = currentLevel;
      const cellCount = firstRow.length ** 2;

      render(<Board currentLevel={currentLevel} />);

      expect(screen.getAllByRole("button")).toHaveLength(cellCount);
      cleanup();
    });
  });
});
