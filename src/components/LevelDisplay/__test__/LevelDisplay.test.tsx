import { describe, it, expect } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import LevelDisplay from "../LevelDisplay";

const levels = [0, 1, 2, 99, 100];

describe("LevelDisplay", () => {
  it("Displays the current level of the game", () => {
    levels.forEach((level) => {
      render(<LevelDisplay level={level} />);

      expect(screen.getByText(`Level: ${level}`)).toBeTruthy();

      cleanup();
    });
  });
});
