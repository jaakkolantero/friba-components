import React from "react";

import { storiesOf } from "@storybook/react";
import { text, color } from "@storybook/addon-knobs/react";
import { Button } from "./Button";
import { inlineInfo } from "./utils";

storiesOf("Button", module)
  .addWithJSX(
    "with background",
    inlineInfo(`
    description 
    
    ~~~js
    <Button>asdasd</Button>
    ~~~`)(() => <Button bg={text("bg", "green")}>Hello world</Button>)
  )
  .addWithJSX(
    "with background 2",
    inlineInfo(`
    description 
    
    ~~~js
    <Button>asdasd</Button>
    ~~~`)(() => (
      <Button bg={color("bg", "purple", "group1")}>Hello world2</Button>
    ))
  );
