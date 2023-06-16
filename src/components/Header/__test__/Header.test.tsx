import { describe, it, expect } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Header from "../Header";

const testCases = [
  {
    level: 0,
    moves: 1,
  },
  {
    level: 1,
    moves: 0,
  },
  {
    level: 2,
    moves: 1,
  },
  {
    level: 3,
    moves: 2,
  },
];

describe("Header", () => {
  it("renders the game level", () => {
    testCases.forEach(({ level, moves }) => {
      render(<Header level={level} moves={moves} />);

      expect(screen.getByText(`Level: ${level}`)).toBeTruthy();
      cleanup();
    });
  });

  it("renders the players moves", () => {
    testCases.forEach(({ level, moves }) => {
      render(<Header level={level} moves={moves} />);

      expect(screen.getByText(`Moves: ${moves}`)).toBeTruthy();
      cleanup();
    });
  });
});
