import { describe, it, expect } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Header from "../Header";

const testCases = [
  {
    lives: 0,
    moves: 1,
  },
  {
    lives: 1,
    moves: 0,
  },
  {
    lives: 2,
    moves: 1,
  },
  {
    lives: 3,
    moves: 2,
  },
];

describe("Header", () => {
  it("renders the players lives", () => {
    testCases.forEach(({ lives, moves }) => {
      render(<Header level={lives} moves={moves} />);

      expect(screen.getByText(`Lives: ${lives}`)).toBeTruthy();
      cleanup();
    });
  });

  it("renders the players moves", () => {
    testCases.forEach(({ lives, moves }) => {
      render(<Header level={lives} moves={moves} />);

      expect(screen.getByText(`Moves: ${moves}`)).toBeTruthy();
      cleanup();
    });
  });
});
