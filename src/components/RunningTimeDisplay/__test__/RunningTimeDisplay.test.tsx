import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import RunningTimeDisplay from "../RunningTimeDisplay";

describe("RunningTimeDisplay", () => {
  it("should display zero time isRunning prop is false", () => {
    render(<RunningTimeDisplay isRunning={false} />);

    expect(screen.getByText("00h:00m:00s:000ms")).toBeTruthy();
  });

  // TODO:
  // Assert that:
  // It always starts from zero time when isRunning changes from false to true
  // It displays the correct time according the elapsed time
});
