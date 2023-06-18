import { describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import MovesDisplay from "../MovesDisplay";

const testCases = [0, 1, 2, 99];

describe("MovesDisplay", () => {
  it("displays the number of moves that the playet has taken", () => {
    testCases.forEach((moves) => {
      render(<MovesDisplay moves={moves} />);

      expect(screen.getByText(`Moves: ${moves}`)).toBeTruthy();

      cleanup();
    });
  });
});
