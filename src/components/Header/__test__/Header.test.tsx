import { describe, it, expect } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Header from "../Header";

const testCases = [
  {
    level: 0,
    moves: 1,
    completeness: 0,
    targetMoves: 10,
  },
  {
    level: 1,
    moves: 0,
    completeness: 45,
    targetMoves: 15,
  },
  {
    level: 2,
    moves: 1,
    completeness: 72,
    targetMoves: 47,
  },
  {
    level: 3,
    moves: 2,
    completeness: 99,
    targetMoves: 999,
  },
];

describe("Header", () => {
  it("renders the game level", () => {
    testCases.forEach(({ level, moves, completeness, targetMoves }) => {
      render(
        <Header
          level={level}
          moves={moves}
          completeness={completeness}
          targetMoves={targetMoves}
        />
      );

      expect(screen.getByText(`Level: ${level}`)).toBeTruthy();
      cleanup();
    });
  });

  it("renders the players moves", () => {
    testCases.forEach(({ level, moves, completeness, targetMoves }) => {
      render(
        <Header
          level={level}
          moves={moves}
          completeness={completeness}
          targetMoves={targetMoves}
        />
      );

      expect(screen.getByText(`Moves: ${moves}`)).toBeTruthy();
      cleanup();
    });
  });

  it("renders the completeness of the board", () => {
    testCases.forEach(({ level, moves, completeness, targetMoves }) => {
      render(
        <Header
          level={level}
          moves={moves}
          completeness={completeness}
          targetMoves={targetMoves}
        />
      );

      expect(screen.getByText(`%: ${completeness}`)).toBeTruthy();
      cleanup();
    });
  });

  it("renders the minimum possible moves of the level", () => {
    testCases.forEach(({ level, moves, completeness, targetMoves }) => {
      render(
        <Header
          level={level}
          moves={moves}
          completeness={completeness}
          targetMoves={targetMoves}
        />
      );

      expect(screen.getByText(`Target: ${targetMoves}`)).toBeTruthy();
      cleanup();
    });
  });
});
