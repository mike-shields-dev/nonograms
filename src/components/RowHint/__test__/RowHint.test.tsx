import { describe, it, expect } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import RowHint from "../RowHint";

describe("RowHint", () => {
  it("renders an element with the correct value for each count in rowHint prop", () => {
    const rowHint = [1, 2, 3, 4, 5, 6];
    render(<RowHint rowHint={rowHint} rowIndex={1} />);
    
    rowHint.forEach((count, i) => {
      const expectedCount = i < rowHint.length - 1 ? `${count},` : count;
      const rowHintCountEl = screen.getByText(expectedCount);
      
      expect(rowHintCountEl).toBeTruthy();
    });
  });
});
