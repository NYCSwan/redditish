# Paytient Frontend Assignment

We’re excited you’re interested in joining our team!

## About this Exercise

You should expect to:

- Spend a few hours of your time. We focus on outcomes, not output; but we want to set your expectations.

At Paytient, we frequently work by implementing a design from Figma. This assignment will help us assess your ability to take a design and turn it into a TypeScript/React/Redux user experience.

## Design

The design to implement can be found in this Figma project: https://www.figma.com/file/ZwwVBsm1IJsfFDzQZnuavc/Paytient-Homework-Assignment-Today-I-Learned-Reddit?node-id=0%3A1

NOTE: If you sign up with a free Figma account, you’ll have access to the Figma Inspect sidebar which provides specific color and measurement information as well as CSS snippets when you select the design elements.

The image asset exports are included in the `src/images` directory.

## Getting Started

```sh
# Install yarn
npm install --global yarn

# Install dependencies
yarn

# Start the app
yarn start
```

## Acceptance Criteria

- Use React, Redux, and TypeScript. This project was initialized using the Create React App template for TypeScript + Redux Toolkit. A couple of things were already added including Yarn v3 which we currently use at Paytient. Feel free to add any additional modules if that helps you build faster. Just be sure the solution uses React, Redux, and TypeScript.
- Implement the Figma design using React. Though this is a small assignment, try to organize the components and code in a way that is mindful of scaling a typical frontend application. Feel free to use your favorite strategy for styles (CSS/SASS modules, `styled-components`, Tailwind, etc. ...whatever you prefer!)
- For the list of articles to display, query https://www.reddit.com/r/todayilearned.json, and store the data in Redux.
- Add Jest tests for a React view, a Redux action creator, and a Redux reducer.
- When you’ve completed the project, commit the results using git and `git push` up to the same branch that you cloned. Then open the Tapioca invite link again, and click the button at the bottom to "Submit Work."

Bonus

- Add a “typecheck” script that checks for any TypeScript compilation errors (and passes).
- Add an ESLint script that checks for lint errors and passes.
- Add mobile responsiveness.

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
