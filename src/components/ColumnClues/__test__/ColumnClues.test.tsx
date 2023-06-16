import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ColumnClues from "../ColumnClues";

describe("ColumnClues", () => {
  it("renders each value in the provided columnClues prop array", () => {
    const columnCluesProp = [1, 2, 3, 4, 5, 6];
    const { container } = render(<ColumnClues columnClues={columnCluesProp} />);
    
    const columnClues = container.firstChild;

    expect(columnClues?.childNodes).toHaveLength(columnCluesProp.length);

    columnCluesProp.forEach((columnClue) => {
      const foundRowClue = screen.getByText(columnClue);

      expect(foundRowClue).toBeTruthy();
    });
  });
});
