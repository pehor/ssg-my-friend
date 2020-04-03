# Test setup

Unittests are run by Jest. Coverage is also available.
`npm run test`
`npm run coverage`

Because we use React, we need a few extra configs to test rendering of pages.

`.babelrc` is required to transpile jsx files using babel, so that the tests can use them.
`tests/setupTests.js` is a common setup file. In our case it loads `@testing-library/jest-dom/extend-expect`, which contains extensions to help with matching things in the dom.
`jest.config.js` sets up coverage checking, defines the route to setupTests.js, and defines transpiling options. 

`"jest": true` is added to `.eslintre.json` so that we don't get undefined errors for test() and expect() in our tests.
