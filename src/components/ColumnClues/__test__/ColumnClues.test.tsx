import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ColumnClues from "../ColumnClues";

describe("ColumnClues", () => {
  it("renders each value in the provided columnClues prop array", () => {
    const clues = [1, 2, 3, 4, 5, 6];
    const { container } = render(<ColumnClues columnClues={clues} />);
    
    const columnClues = container.firstChild;

    expect(columnClues?.childNodes).toHaveLength(clues.length);

    clues.forEach((clue) => {
      const clueEl = screen.getByText(clue);

      expect(clueEl).toBeTruthy();
    });
  });
});
