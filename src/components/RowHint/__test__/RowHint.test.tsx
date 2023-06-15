import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import RowHint from "../RowHint";

describe("RowHint", () => {
  it("renders an element with the correct value for each count in rowHint prop", () => {
    const rowHint = [1, 2, 3, 4, 5, 6];
    render(<RowHint rowHint={rowHint} />);
    
    rowHint.forEach((count, i) => {
      const expectedCount = i < rowHint.length - 1 ? `${count},` : count;
      const rowHintCountEl = screen.getByText(expectedCount);
      
      expect(rowHintCountEl).toBeTruthy();
    });
  });
});
