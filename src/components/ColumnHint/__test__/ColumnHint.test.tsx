import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ColumnHint from "../ColumnHint";

describe("ColumnHint", () => {
  it("renders an element with the correct value for each count in columnHint prop", () => {
    const columnHint = [1, 2, 3, 4, 5, 6];
    render(<ColumnHint columnHint={columnHint} />);

    columnHint.forEach((count) => {
      const columnHintCountEl = screen.getByText(count);

      expect(columnHintCountEl).toBeTruthy();
    });
  });
});
