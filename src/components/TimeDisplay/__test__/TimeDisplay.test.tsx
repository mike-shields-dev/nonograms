import { describe, it, expect } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import TimeDisplay from "../TimeDisplay";

describe("TimeDisplay", () => {
  it("should display a given duration of time in ms in the format HH:MM:SS:ms", () => {
    milliSecondsTestCases.forEach(({ durationMs, expected }) => {
      render(<TimeDisplay durationMs={durationMs} />);

      expect(screen.getByText(expected)).toBeTruthy();

      cleanup();
    });

    secondsTestCases.forEach(({ durationMs, expected }) => {
      render(<TimeDisplay durationMs={durationMs} />);

      expect(screen.getByText(expected)).toBeTruthy();

      cleanup();
    });

    minutesTestCases.forEach(({ durationMs, expected }) => {
      render(<TimeDisplay durationMs={durationMs} />);

      expect(screen.getByText(expected)).toBeTruthy();

      cleanup();
    });

    hoursTestCases.forEach(({ durationMs, expected }) => {
      render(<TimeDisplay durationMs={durationMs} />);

      expect(screen.getByText(expected)).toBeTruthy();

      cleanup();
    });
  });
});

const milliSecondsTestCases = [
  {
    durationMs: 0,
    expected: "00h:00m:00s:00ms",
  },
  {
    durationMs: 1,
    expected: "00h:00m:00s:00ms",
  },
  {
    durationMs: 9,
    expected: "00h:00m:00s:00ms",
  },
  {
    durationMs: 10,
    expected: "00h:00m:00s:01ms",
  },
  {
    durationMs: 99,
    expected: "00h:00m:00s:09ms",
  },
  {
    durationMs: 100,
    expected: "00h:00m:00s:10ms",
  },
  {
    durationMs: 999,
    expected: "00h:00m:00s:99ms",
  },
];

const secondsTestCases = [
  {
    durationMs: 1000,
    expected: "00h:00m:01s:00ms",
  },
  {
    durationMs: 9000,
    expected: "00h:00m:09s:00ms",
  },
  {
    durationMs: 10000,
    expected: "00h:00m:10s:00ms",
  },
  {
    durationMs: 59000,
    expected: "00h:00m:59s:00ms",
  },
];

const minutesTestCases = [
  {
    durationMs: 60000,
    expected: "00h:01m:00s:00ms",
  },
  {
    durationMs: 3540000,
    expected: "00h:59m:00s:00ms",
  },
];

const hoursTestCases = [
  {
    durationMs: 3600000,
    expected: "01h:00m:00s:00ms",
  },
  {
    durationMs: 82800000,
    expected: "23h:00m:00s:00ms",
  },
];
