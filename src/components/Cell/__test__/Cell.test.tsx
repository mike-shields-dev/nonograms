import { Coords } from "../../../types";
import { it, expect, describe, afterEach, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Cell from "../Cell";

const onCellClick = vi.fn();

const coords: Coords = { x: 0, y: 0 };

describe("Cell", () => {
  afterEach(() => {
    cleanup();
    vi.resetAllMocks();
    vi.clearAllMocks();
  });

  describe("renders a button with state equal to:  ", () => {
    it("- null when state prop is null", () => {
      render(<Cell coords={coords} state={null} onCellClick={onCellClick} />);
      const cell = screen.getByRole("button");

      expect(cell.getAttribute("value")).toBe("null");
    });

    it("- true when state prop is true", () => {
      render(<Cell coords={coords} state={true} onCellClick={onCellClick} />);
      const cell = screen.getByRole("button");

      expect(cell.getAttribute("value")).toBe("true");
    });

    it("- false when state prop is false", () => {
      render(<Cell coords={coords} state={false} onCellClick={onCellClick} />);
      const cell = screen.getByRole("button");

      expect(cell.getAttribute("value")).toBe("false");
    });
  });

  describe("invokes onCellClick passing the correct coords", () => {
    it("test 1: {x: 0, y: 1}", async () => {
      render(
        <Cell coords={{ x: 0, y: 1 }} state={true} onCellClick={onCellClick} />
      );
      const btnEl = screen.getByRole("button");

      btnEl && (await userEvent.click(btnEl));

      expect(onCellClick).toHaveBeenCalledTimes(1);
      expect(onCellClick).toHaveBeenCalledWith({ x: 0, y: 1 });
    });

    it("test 2: {x: 1, y: 0}", async () => {
      render(
        <Cell coords={{ x: 1, y: 0 }} state={true} onCellClick={onCellClick} />
      );
      const btnEl = screen.getByRole("button");

      btnEl && (await userEvent.click(btnEl));

      expect(onCellClick).toHaveBeenCalledTimes(1);
      expect(onCellClick).toHaveBeenCalledWith({ x: 1, y: 0 });
    });
  });
});
