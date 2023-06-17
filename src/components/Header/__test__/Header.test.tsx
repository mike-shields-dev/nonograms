import { describe, it, expect } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Header from "../Header";

const testCases = [
  {
    level: 0,
    moves: 1,
    completeness: 0,
  },
  {
    level: 1,
    moves: 0,
    completeness: 45,
  },
  {
    level: 2,
    moves: 1,
    completeness: 72,
  },
  {
    level: 3,
    moves: 2,
    completeness: 99,
  },
];

describe("Header", () => {
  it("renders the game level", () => {
    testCases.forEach(({ level, moves, completeness }) => {
      render(
        <Header level={level} moves={moves} completeness={completeness} />
      );

      expect(screen.getByText(`Level: ${level}`)).toBeTruthy();
      cleanup();
    });
  });

  it("renders the players moves", () => {
    testCases.forEach(({ level, moves, completeness }) => {
      render(
        <Header level={level} moves={moves} completeness={completeness} />
      );

      expect(screen.getByText(`Moves: ${moves}`)).toBeTruthy();
      cleanup();
    });
  });

  it("renders the completeness of the board", () => {
    testCases.forEach(({ level, moves, completeness }) => {
      render(
        <Header level={level} moves={moves} completeness={completeness} />
      );

      expect(screen.getByText(`%: ${completeness}`)).toBeTruthy();
      cleanup();
    });
  });
});
