# Learna Start Example

Small example package. Nothing ground breaking here but gives you an idea of a simple
package. This README is also what will get published with package.

The package has it's own `package.json` that defines the package and it's dependencies. In this
case their is a dependency on React & Styled Components and the package name is `lerna-starter-example`.

Taking a look at the rest of the files:

`index.story.js`

This writes the story for the base Storybook. This is where you can test and try out your package. Storybook can be fired up from the root project.

`theme.js`

This just defines a simple them for the purpose of testing the `<ThemeProvider>` out on the styled button.

Then on to the actual package files found inside the `src` directory:

`styles/defaultStyledButton.js`

Defines a styled button using styled components. It is not strictly needed in it's own file but for
more complex components it will keep things cleaner.

`index.js`

Where we export our component. In this case it is also defined here as it is a simple button.

`index.spec.js`

All tests for this component. Tests are run from the parent project.

