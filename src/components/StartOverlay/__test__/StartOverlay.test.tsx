import { describe, it, expect, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StartOverlay from "../StartOverlay";

const spy = vi.fn();

describe("StartOverlay", () => {
  it("should display a single button", () => {
    render(<StartOverlay onClick={spy} />);

    expect(screen.getAllByRole("button")).toHaveLength(1);

    cleanup();
  });

  it("should display a button with the text matching /start/i", () => {
    render(<StartOverlay onClick={spy} />);

    expect(screen.getByRole("button").textContent).toMatch(/start/i);

    cleanup();
  });

  it("should invoke it's click handler when clicked", async () => {
    render(<StartOverlay onClick={spy} />);

    await userEvent.click(screen.getByRole("button"));

    expect(spy).toHaveBeenCalledTimes(1);

    cleanup();
  });
});
