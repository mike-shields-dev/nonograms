import { describe, it, expect } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("renders it's children", () => {
    const children = (
      <>
        <div>CHILD1</div>
        <div>CHILD2</div>
      </>
    );

    testCases.forEach(({ moves, completeness }) => {
      render(
        <Header moves={moves} completed={completeness}>
          {children}
        </Header>
      );

      expect(screen.getByText("CHILD1")).toBeTruthy();
      expect(screen.getByText("CHILD2")).toBeTruthy();

      cleanup();
    });
  });

  it("renders the players moves", () => {
    testCases.forEach(({ moves, completeness }) => {
      render(<Header moves={moves} completed={completeness} />);

      expect(screen.getByText(`Moves: ${moves}`)).toBeTruthy();
      cleanup();
    });
  });

  it("renders the completeness of the board", () => {
    testCases.forEach(({ moves, completeness }) => {
      render(<Header moves={moves} completed={completeness} />);

      expect(screen.getByText(`Completed: ${completeness}%`)).toBeTruthy();
      cleanup();
    });
  });
});

const testCases = [
  {
    moves: 1,
    completeness: 0,
    children: (
      <>
        <div>CHILD1</div>
        <div>CHILD2</div>
      </>
    ),
  },
  {
    moves: 0,
    completeness: 45,
    children: (
      <>
        <div>CHILD1</div>
        <div>CHILD2</div>
      </>
    ),
  },
  {
    moves: 1,
    completeness: 72,
    children: (
      <>
        <div>CHILD1</div>
        <div>CHILD2</div>
      </>
    ),
  },
  {
    moves: 2,
    completeness: 99,
    children: (
      <>
        <div>CHILD1</div>
        <div>CHILD2</div>
      </>
    ),
  },
];
