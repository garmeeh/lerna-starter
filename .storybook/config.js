import React from "react"
import { configure } from "@storybook/react"

const req = require.context("../packages", true, /.story.(jsx?|js?)$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
