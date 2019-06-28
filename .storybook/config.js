import { load, addParameters } from "@storybook/react"
import { themes } from "@storybook/theming"
import { version } from "../package.json"

addParameters({
  options: {
    name: "storybook",
    theme: themes.light,
    showPanel: false,
    sidebarAnimations: false,
    isToolshown: true,
    storySort: (story, otherStory) => story[1].id.localeCompare(otherStory[1].id),
  },
})

load(require.context("../packages", true, /\.story\.js$/), module)
load(require.context("../packages", true, /\.story\.mdx$/), module)
