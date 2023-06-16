import { Coords } from "../../../types";
import { it, expect, describe, beforeEach, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Cell from "../Cell";

const onCellClick = vi.fn();
const coords: Coords = { x: 0, y: 0 };

describe("Cell", () => {
  beforeEach(() => {
    cleanup();
  });

  it("renders a button with initial state of null", () => {
    render(<Cell coords={coords} onCellClick={onCellClick} userMatrix={testMatrix}/>);

    const cell = screen.getByRole("button");

    expect(cell.getAttribute("value")).toBe("null");
  });

  it("invokes onCellClick when clicked and state is either true or false, passing the correct arguments", async () => {
    render(<Cell coords={coords} onCellClick={onCellClick} userMatrix={testMatrix}/>);
    const btnEl = screen.getByRole("button");

    expect(onCellClick).not.toHaveBeenCalled();
    
    if (btnEl) {
      await userEvent.click(btnEl);

      expect(onCellClick).toHaveBeenCalledTimes(1);
      expect(onCellClick).toHaveBeenCalledWith(coords);

      await userEvent.click(btnEl);

      expect(onCellClick).toHaveBeenCalledTimes(2);
      expect(onCellClick).toHaveBeenCalledWith(coords);

      await userEvent.click(btnEl);

      expect(onCellClick).toHaveBeenCalledTimes(3);
      expect(onCellClick).toHaveBeenCalledWith(coords);
    }
  });
});
