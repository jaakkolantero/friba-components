import { configure } from "@storybook/react";

const req = require.context("../src", true, /.stories.js$/);

function loadStories() {
  require("./indexStory");
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
