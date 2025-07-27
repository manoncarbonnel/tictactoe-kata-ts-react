import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Board } from "../../src/components/Board";

test("shows the grid", async () => {
  render(<Board></Board>);
  const buttons = await screen.findAllByRole("button");
  expect(buttons.length).toEqual(10);
});
