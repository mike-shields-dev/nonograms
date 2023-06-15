import { Coords } from "../../../types";
import { it, expect, describe, beforeEach, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Cell from "../Cell";

const onStateChange = vi.fn();
const coords: Coords = [0, 0];

describe("Cell", () => {
  beforeEach(() => {
    cleanup();
  });

  it("renders a button with initial state of null", () => {
    render(<Cell coords={coords} onStateChange={onStateChange} />);

    const cell = screen.getByRole("button");

    expect(cell.getAttribute("value")).toBe("null");
  });

  it("invokes onStateChange when clicked and state is either true or false, passing the correct arguments", async () => {
    render(<Cell coords={coords} onStateChange={onStateChange} />);
    const btnEl = screen.getByRole("button");

    expect(onStateChange).not.toHaveBeenCalled();
    
    if (btnEl) {
      await userEvent.click(btnEl);

      expect(onStateChange).toHaveBeenCalledTimes(1);
      expect(onStateChange).toHaveBeenCalledWith(coords, true);

      await userEvent.click(btnEl);

      expect(onStateChange).toHaveBeenCalledTimes(2);
      expect(onStateChange).toHaveBeenCalledWith(coords, false);

      await userEvent.click(btnEl);

      expect(onStateChange).not.toHaveBeenCalledTimes(3);
      expect(onStateChange).not.toHaveBeenCalledWith(coords, null);
    }
  });

  it("toggles state when clicked", async () => {
    render(<Cell coords={coords} onStateChange={onStateChange} />);
    const cell = screen.getByRole("button");

    await userEvent.click(cell);

    expect(cell.getAttribute("value")).toBe("true");

    await userEvent.click(cell);

    expect(cell.getAttribute("value")).toBe("false");

    await userEvent.click(cell);

    expect(cell.getAttribute("value")).toBe("null");
  });
});
