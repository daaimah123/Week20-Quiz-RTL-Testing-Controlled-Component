# Testing a Controlled Component

### To get started
```
git clone <repo>
npm i; npm run start
```
Before setting up your test suites, you should use `afterEach(cleanup)` (after imports) in order to unmount any React trees that were mounted with render.

Create two test assertions for the Button component. Then set up a default props object containing the button's text and an onClick even with a mock function value.

The first test should handle rendering the button with the proper text. The first assertion should identify that the button renders with the current text. The second assertion should handle changing the button text property upon rerendering, then it should verify the changed text is as expected.

The second test should test that the button calls the correct function upon clicking. Set a variable called `onClick` to the onClick from the default props object. Set a rendered `Button` component with all of its available properties to a deconstructed `getByText`. Simulate a click event on the button's text. Evaluate that the `onClick` event occured.
# Add GIF of expected behavior here!!!
