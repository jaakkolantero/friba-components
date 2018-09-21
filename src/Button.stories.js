import React from "react";

import { storiesOf } from "@storybook/react";
import { Button } from "./Button";
import { inlineInfo } from "./utils";

storiesOf("Button", module)
  .addWithJSX(
    "with background",
    inlineInfo(`
    description 
    
    ~~~js
    <Button>asdasd</Button>
    ~~~`)(() => <Button bg="palegoldenrod">Hello world</Button>)
  )
  .addWithJSX(
    "with background 2",
    inlineInfo(`
    description 
    
    ~~~js
    <Button>asdasd</Button>
    ~~~`)(() => <Button bg="green">Hello world2</Button>)
  );
