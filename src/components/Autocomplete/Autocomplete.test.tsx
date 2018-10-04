import * as React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import Autocomplete from "./Autocomplete";
import { values } from "../../mockData/autocompleteValues";

afterEach(cleanup);

//clear selction available with default value
//clear selection clears input
test("<Autocomplete> clear selection", async () => {
  const mockOnValueChange = jest.fn();
  const { getByTestId } = render(
    <Autocomplete
      value="asd"
      values={values}
      placeholder="Track name"
      w
      onValueChange={mockOnValueChange}
    />
  );
  const autocompleteInput = getByTestId(
    "input-autocomplete"
  ) as HTMLInputElement;
  expect(autocompleteInput.value).toBe("asd");
});

//clear selection activates when text appears
test("<Autocomplete> clear selection visibility", async () => {
  const mockOnValueChange = jest.fn();
  const { queryByTestId, getByTestId } = render(
    <Autocomplete
      values={values}
      placeholder="Track name"
      title="Track name"
      onValueChange={mockOnValueChange}
    />
  );
  let clearSelection = queryByTestId("clear-autocomplete");
  expect(clearSelection).toBeNull();

  const autocompleteInput = getByTestId(
    "input-autocomplete"
  ) as HTMLInputElement;
  fireEvent.change(autocompleteInput, {
    target: { value: "A" }
  });

  clearSelection = queryByTestId("clear-autocomplete");
  expect(clearSelection).not.toBeNull();

  const autocompleteClear = getByTestId(
    "clear-autocomplete"
  ) as HTMLInputElement;
  fireEvent.click(autocompleteClear);

  clearSelection = queryByTestId("clear-autocomplete");
  expect(clearSelection).toBeNull();
});

test("<Autocomplete>", () => {
  const mockOnValueChange = jest.fn();
  const { getByTestId, queryAllByTestId, getByText } = render(
    <Autocomplete
      values={values}
      placeholder="Track name"
      title="Track name"
      onValueChange={mockOnValueChange}
    />
  );
  expect(mockOnValueChange).toBeCalledTimes(0);
  let autocompleteInput = getByTestId("input-autocomplete") as HTMLInputElement;
  fireEvent.change(autocompleteInput, {
    target: { value: "A" }
  });

  //Check that suggestions are shown properly
  const suggestions = queryAllByTestId("menuitem-autocomplete");
  expect(suggestions.length).toBe(5);
  expect(suggestions[0].textContent).toBe("Aland Islands");
  expect(suggestions[4].textContent).toBe("Andorra");

  //Check that OnValueChange is called properly.
  expect(mockOnValueChange).toBeCalledTimes(1);
  expect(mockOnValueChange).toBeCalledWith({ value: "A" });

  //Clicking suggestion selects suggestion to input.
  fireEvent.click(getByText("Aland Islands"));
  autocompleteInput = getByTestId("input-autocomplete") as HTMLInputElement;
  expect(autocompleteInput.value).toBe("Aland Islands");
});
