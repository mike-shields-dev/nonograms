import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { RowCluesContainer } from "../..";

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
  it("renders an element for each row the provided Grid prop", () => {
    matrices.forEach((Grid) => {
      const { container } = render(<RowCluesContainer levelGrid={Grid} />);
      const rowCluesContainer = container.firstChild;

      if (rowCluesContainer) {
        expect(rowCluesContainer.childNodes).toHaveLength(Grid.length);
      }
    });
  });
});
