import { describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import RunningTimeDisplay from "../RunningTimeDisplay";

describe("RunningTimeDisplay", () => {
  it("should be reset if isRunning prop is false", () => {
    render(<RunningTimeDisplay isRunning={false} />);

    expect(screen.getByText("00h:00m:00s:000ms")).toBeTruthy();
    cleanup();
  });

  it("should not be reset if isRunning prop is true", async () => {
    render(<RunningTimeDisplay isRunning={true} />);

    expect(screen.queryByText("00h:00m:00s:000ms")).toBeNull();
    cleanup();
  });

  // TODO:
  // Find out a way to assert that the displayed time updates according to
  // the elapsed time....
});
