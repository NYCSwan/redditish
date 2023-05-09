# Paytient Frontend Assignment

We're excited you're interested in joining our team! This exercise is designed
to help us assess your ability to handle a typical task given to members of the
Frontend development team.

At Paytient, we frequently work by implementing Figma design files along with 
technical or business requirements. Your job is to take a design and turn it
into a functional user experience using TypeScript/React/Redux.

## Expectations

- Spend a few hours of your time (max 4 hours)
- Focus on outcomes, not output
- Be prepared to walk us through your code
- Perfection is not expected (trade-offs are normal)

## Getting Started

This project was initialized using the [Create React App](https://github.com/facebook/create-react-app) template for [TypeScript](https://typescriptlang.org/) + [Redux Toolkit](https://redux-toolkit.js.org/). A couple of things were already added including Yarn v3 which we currently use at Paytient. Feel free to add any additional modules if that helps you build faster. Just be sure the solution uses React, Redux, and TypeScript.

```sh
# Install yarn
npm install --global yarn

# Install dependencies
yarn

# Start the app
yarn start
```

## Design Materials

The Figma design file is available here: https://tinyurl.com/paytient-figma. The image asset exports are included in the `src/images` directory.

**NOTE**: If you sign up with a free Figma account, you’ll have access to the Figma Inspect sidebar which provides specific color and measurement information as well as CSS snippets when you select the design elements.


## Business Requirements

Build a simple Reddit feed navigator application that allows a user to browse
the latest posts for a given sub-reddit. 

1) Populate the list of articles to display using by querying Reddit's public subreddit API endpoint: `/r/{subreddit}.json` (see below). Store the data in Redux and query the global state from inside the component.

2) Add a menu in the sidebar to navigate between the following subreddits:
- `/r/todayilearned`
- `/r/mademesmile`
- `/r/mildlyinteresting`
- `/r/nevertellmetheodds`

3) Populate the Comments button with a link to the comments on Reddit.

**NOTE**: All subreddits follow the [Listing](https://www.reddit.com/dev/api/#listings) schema. For example: https://www.reddit.com/r/todayilearned.json

## Acceptance Criteria

- Integrate the Figma design file
- Use React, Redux, and TypeScript
- Use any strategy for styling (CSS/SASS modules, `styled-components`, Tailwind, etc.)
- Add Jest tests for a React view, a Redux action creator, and a Redux reducer

This is a time-boxed exercise, but try to organize the components and code in a
way that is mindful of scaling a typical frontend application. When you’ve completed the project, commit the results using git and `git push` up to the same branch that you cloned. Then open the Tapioca invite link again, and click the button at the bottom to "Submit Work."

**Bonus tasks**

- Add mobile responsiveness
- Add a “typecheck” script that checks for any TypeScript compilation errors (and passes)
- Add an ESLint script that checks for lint errors and passes
