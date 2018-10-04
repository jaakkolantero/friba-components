import React from "react";
import { inlineInfo } from "../../utils";
import { storiesOf } from "@storybook/react";
import Autocomplete from "./Autocomplete";
import { values } from "../../mockData/autocompleteValues";

storiesOf("<Autocomplete>", module)
  .addWithJSX(
    "basic usage",
    inlineInfo(`
      description
      `)(() => (
      <Autocomplete
        value="testing"
        values={values}
        placeholder="Track name"
        title="Track name"
        onValueChange={({ value }) => console.log(value)}
      />
    ))
  )
  .addWithJSX(
    "with error",
    inlineInfo(`
        description
        `)(() => (
      <Autocomplete
        values={values}
        placeholder="Track name"
        error="Name should be atleast 3 chars"
        title="Track name"
        onValueChange={({ value }) => console.log(value)}
      />
    ))
  )
  .addWithJSX(
    "with placeholder",
    inlineInfo(`
        description
        `)(() => (
      <Autocomplete
        values={values}
        placeholder="Track name"
        onValueChange={({ value }) => console.log(value)}
      />
    ))
  )
  .addWithJSX(
    "with title",
    inlineInfo(`
        description
        `)(() => (
      <Autocomplete
        values={values}
        title="Track name"
        onValueChange={({ value }) => console.log(value)}
      />
    ))
  );
