# React Component Library Publishing Starter

## Getting Started

1. Clone the project: `git clone git@github.com:garmeeh/lerna-starter.git`
2. Setup project: `npm install`
3. Run `npm run start`

Running `npm run start` will:

1.) Spin up Storybook. You can then navigate to [http://localhost:9001/](http://localhost:9001/) and you will be able to see the example packages showcased in Storybook.

2.) Will run the build script in watch mode. This means any changes made in the packages folder will be built and updated in Storybook.

## Publishing

To build and publish your packages you just need to run:

```
npm run publish-packages
```

(You will need to be logged into npm)

This will run the build script and then publish your packages. It is currently set to publish each package individually so that their versions are independent.

You can find the full options for publishing [here](https://github.com/lerna/lerna/tree/master/commands/publish#readme) so that you can tailor to your exact needs. But for most cases the current set up will be enough.

## Tests

This project comes with [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/kentcdodds/react-testing-library) set up for you.

To run all tests and generate a coverage report simply run:

```
npm run test
```

While developing you can also run tests in watch mode by running:

```
npm run test:watch
```

## Export Static Storybook

Storybook gives a great developer experience with its dev time features, like instance change updates via Webpack’s HMR.

But Storybook is also a tool you can use to showcase your components to others.

For that, Storybook comes with a tool to export your storybook into a static web app. Then you can deploy it to GitHub pages or any static hosting service.

Simply run:

```
npm run export-static-storybook
```

This will build the storybook configured in the Storybook directory into a static web app and place it inside the .out directory. Now you can deploy the content in the .out directory wherever you want.

To test it locally, simply run the following commands with Python HTTP Server:

```
cd .out
python -m SimpleHTTPServer
```

or Node HTTP Server:

```
npm install http-server -g
cd .out
http-server
```
