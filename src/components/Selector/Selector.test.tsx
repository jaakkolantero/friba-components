import * as React from "react";
import { render } from "react-testing-library";
import Selector from "./Selector";

test("<Selector>", () => {
  const { debug } = render(<Selector />);
  expect(0).toBe(0);
  debug();
});
