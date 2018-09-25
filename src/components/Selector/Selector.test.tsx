import * as React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import Selector from "./Selector";

afterEach(cleanup);

test("<Selector>", () => {
  const onIncrement = jest.fn();
  const onDecrement = jest.fn();
  const { debug, getByTestId } = render(
    <Selector value="3" onDecrement={onDecrement} onIncrement={onIncrement} />
  );
  debug();
  fireEvent.click(getByTestId("decrement-selector"));
  expect(onDecrement).toHaveBeenCalledTimes(1);
  fireEvent.click(getByTestId("decrement-selector"));
  expect(onDecrement).toHaveBeenCalledTimes(2);
  fireEvent.click(getByTestId("increment-selector"));
  expect(onIncrement).toHaveBeenCalledTimes(1);
  fireEvent.click(getByTestId("increment-selector"));
  expect(onIncrement).toHaveBeenCalledTimes(2);
  expect(getByTestId("value-selector").textContent).toBe("3");
});
