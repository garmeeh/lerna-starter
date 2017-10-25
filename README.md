# Lerna Starter Kit
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

This starter kit leverages [Lerna](https://lernajs.io/) and [Storybook](https://storybook.js.org/) to set you up with a simple UI Development environment to develop, test and publish your npm packages.

The main focus of the starter kit is to enable you to have multiple React components published as separate packages under a single repo (we get this ability from [Lerna](https://lernajs.io/) and the ability to run them all in one place which we get from [Storybook](https://storybook.js.org/). By running them all in one place we can rapidly develop new React components, test them and deploy all from the same cmd line!

It could probably be adapted for Vue & React Native components also.

All commands in this project use `yarn` but feel free to use `npm` if you would prefer.

## Getting Started
1. Clone the project: `git clone git@github.com:kicktail/lerna-starter.git`
2. Update the `package.json` with your details
3. Setup project: `yarn install`
4. Run `yarn start`

### Demo / Example Package
Running `yarn start` will spin up Storybook and navigating to http://localhost:9001/ you will be able to see the example package showcased in Storybook. This is only a simple example package included to get you up and running with a demo. If you want to skip this part just delete this package and skip to [Creating a Package](#creating-a-package) or have a look at the [scripts available](#scripts).

## Publishing

**Versioning**
By default this project mimics lerna and operates on [Fixed/Locked](https://github.com/lerna/lerna#fixedlocked-mode-default) mode.

If you want to increment package versions independently of each other, open `lerna.json` and update the versions to be `"independent"`, this will run Lerna in [independent mode](https://github.com/lerna/lerna#independent-mode---independent).

## Scripts
A look at the scripts that are available:

- To [bootstrap](https://github.com/lerna/lerna#bootstrap) your packages and start your UI development environment run:
```
yarn start
```

- To easily install all the dependencies in your individual packages at once run:
```
yarn bootstrap
```

- Run all your packages tests and generate coverage report:
```
yarn test
```

- To export your storybook as a static app:
```
yarn export-static-storybook
```

- It will be placed in `.out/` To test locally after export:
```
cd .out
python -m SimpleHTTPServer
```

- Create a new release of the packages that have been updated. Prompts for a new version and updates all the packages on git and npm:
```
yarn publish
```


This project is powered by Lerna so all [Lerna commands](https://lernajs.io/) are also available. If you do wish to use these.

## Creating A Package

To get started with your first package:

1. Create a new directory for your package:

A basic package structure will look like:

```
package-name/
 ├──src/
 |   ├──index.js                    * Entry point for you package
 |   ├──index.spec.js               * Test file for entry point
 |   └──styles/                     * Styled components directory
 |       └──styledComponent.js
 │
 ├──index.story.js                  * Storybook story for entry point
 ├──.gitignore                      * .gitignore specific to this package
 ├──README.md                       * README specific to this package
 └──package.json                    * Info for this independent package
```

2. Run `yarn start` which will bootstrap your package and run Storybook.

3. Start building out your Component/Package and use the Story to view it as you develop.

4. Write Tests and Publish!

****

## Change Log

**v0.0.1**

Initial Commit


