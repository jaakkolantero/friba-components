import React from "react";
import { inlineInfo } from "../../utils";

import { storiesOf } from "@storybook/react";
import Selector from "./Selector";

storiesOf("<Selector>", module).addWithJSX(
  "basic usage",
  inlineInfo(`
      description
      `)(() => <Selector />)
);
