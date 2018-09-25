import React from "react";
import { inlineInfo } from "../../utils";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import Selector from "./Selector";

storiesOf("<Selector>", module).addWithJSX(
  "basic usage",
  inlineInfo(`
      description
      `)(() => (
    <Selector
      value="3"
      onDecrement={action("decrement")}
      onIncrement={action("increment")}
    />
  ))
);
