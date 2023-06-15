import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import RowHints from "../RowHints";

const matrices = [
  [
    [true, false],
    [false, false],
  ],
  [
    [true, false, true],
    [false, true, false],
    [false, false, false],
  ], 
  [
    [true, false, true, false],
    [true, true, false, false],
    [true, true, true, true],
    [false, false, false, false],
  ]
];

describe("RowHints", () => {
  it("renders an element for each matrix row", () => {
    matrices.forEach((matrix) => {
      const { container } = render(<RowHints matrix={matrix} />);
      const RowHintsEl = container.firstChild;

      if(RowHintsEl) {
        expect(RowHintsEl.childNodes).toHaveLength(matrix.length);
      }
    });
  });
});
