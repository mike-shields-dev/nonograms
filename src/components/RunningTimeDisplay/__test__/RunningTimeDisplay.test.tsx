import { describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import RunningTimeDisplay from "../RunningTimeDisplay";

describe("RunningTimeDisplay", () => {
  it("should display as reset when isRunning prop is false", () => {
    render(<RunningTimeDisplay isRunning={false} />);

    expect(screen.getByTestId("time-display-hours").textContent).toBe("00");
    expect(screen.getByTestId("time-display-minutes").textContent).toBe("00");
    expect(screen.getByTestId("time-display-seconds").textContent).toBe("00");

    cleanup();
  });

  it.skip(`
    should display the correct amount of seconds that has passed,
    since the isRunning prop flipped to true`, async () => {
    vi.useFakeTimers();

    let prevDurationMs = 0;

    for (const { durationMs, expected } of [
      ...secondsTestCases,
      ...minutesTestCases,
      ...hoursTestCases,
    ]) {
      render(<RunningTimeDisplay isRunning={true} />);

      const advancementMs = durationMs - prevDurationMs;
      prevDurationMs = durationMs;

      console.log({ durationMs, advancementMs });

      console.log(vi.getTimerCount());

      await vi.advanceTimersByTimeAsync(advancementMs);

      expect(
        Number(screen.getByTestId("time-display-hours").textContent)
      ).toBeCloseTo(Number(expected.hours));
      expect(
        Number(screen.getByTestId("time-display-minutes").textContent)
      ).toBeCloseTo(Number(expected.minutes));
      expect(
        Number(screen.getByTestId("time-display-seconds").textContent)
      ).toBeCloseTo(Number(expected.seconds));

      cleanup();
      vi.clearAllTimers();
    }
  });

  // TODO:
  // Assert that:
  // The component displays the elapsed time correctly...
});

const secondsTestCases = [
  {
    durationMs: 1000,
    expected: {
      hours: "00",
      minutes: "00",
      seconds: "01",
    },
  },
  {
    durationMs: 9000,
    expected: {
      hours: "00",
      minutes: "00",
      seconds: "09",
    },
  },
  {
    durationMs: 10000,
    expected: {
      hours: "00",
      minutes: "00",
      seconds: "10",
    },
  },
  {
    durationMs: 59000,
    expected: {
      hours: "00",
      minutes: "00",
      seconds: "59",
    },
  },
];

const minutesTestCases = [
  {
    durationMs: 60000,
    expected: {
      hours: "00",
      minutes: "01",
      seconds: "00",
    },
  },
  {
    durationMs: 3540000,
    expected: {
      hours: "00",
      minutes: "59",
      seconds: "00",
    },
  },
];

const hoursTestCases = [
  {
    durationMs: 3600000,
    expected: {
      hours: "01",
      minutes: "00",
      seconds: "00",
    },
  },
  {
    durationMs: 82800000,
    expected: {
      hours: "23",
      minutes: "00",
      seconds: "00",
    },
  },
];
