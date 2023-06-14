import { it, expect, describe, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Cell from "../Cell";

function renderCell() {
  render(<Cell coords={[0, 0]} />);
}

describe("Cell", () => {
  afterEach(() => cleanup());

  it("renders a button with initial state of null", () => {
    renderCell();

    const cell = screen.getByRole("button");

    expect(cell.getAttribute("value")).toBe("null");
  });

  it("toggles state when clicked", async () => {
    renderCell();
    const cell = screen.getByRole("button");

    await userEvent.click(cell);

    expect(cell.getAttribute("value")).toBe("true");

    await userEvent.click(cell);

    expect(cell.getAttribute("value")).toBe("false");

    await userEvent.click(cell);

    expect(cell.getAttribute("value")).toBe("null");
  });
});
