import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { RowCluesContainer } from "../../../components";

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
  ],
];

describe("RowCluesContainer", () => {
  it("renders an element for each row the provided matrix prop", () => {
    matrices.forEach((matrix) => {
      const { container } = render(<RowCluesContainer levelMatrix={matrix} />);
      const rowCluesContainer = container.firstChild;

      if (rowCluesContainer) {
        expect(rowCluesContainer.childNodes).toHaveLength(matrix.length);
      }
    });
  });
});
