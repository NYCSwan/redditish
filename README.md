# Paytient Frontend Assignment

At Paytient, we frequently work by implementing Figma design files along with
technical or business requirements. Your job is to take a design and turn it
into a functional user experience using TypeScript/React/Redux.

Here are some general guidelines:
- Spend a few hours of your time (max 4 hours ideally)
- Focus on the final outcome (we won't review your commit history)
- Be prepared to walk us through your code
- Perfection is not expected (trade-offs are normal!)

This is a time-boxed exercise, but try to organize the components and code
in a way that is mindful of scaling a typical frontend application.

When you've completed the project, commit the results and push them up to the
same branch that you cloned. Open the Tapioca invite link again, and click
the button at the bottom marked "Submit Work" to complete the exercise.

Good luck!

***

## Getting Started

This project was initialized using the [Create React App](https://github.com/facebook/create-react-app)
template for [TypeScript](https://typescriptlang.org/) + [Redux Toolkit](https://redux-toolkit.js.org/).
You will need to install yarn to run the app:

```sh
# Install yarn
npm install --global yarn

# Install dependencies
yarn

# Start the app
yarn start
```

We have also added [Jest](https://jestjs.io/) along with with [React Testing Library](https://testing-library.com)
for testing React components.

Note: The exercise can be completed without any additional libraries, but feel free to
add anything that helps you build faster. 

## Design Materials

The Figma design file is available here: https://tinyurl.com/paytient-figma. The
image asset exports are included in the `src/images` directory.

Tip: If you sign up with a free Figma account, you'll have access to the
Figma Inspect sidebar which provides specific color and measurement information
as well as CSS snippets when you select the design elements.

***

## Business Requirements

You have been tasked with building a simple Reddit-based web application that
allows users to browse a collection of subreddits. When a user clicks on a
link in the sidebar, the main feed should be updated to show the latest posts
for the given subreddit.

Use the Reddit's public subreddit API `/r/{subreddit}.json` to query posts. All
subreddits follow the same [Listing](https://www.reddit.com/dev/api/#listings) schema.
For example: https://www.reddit.com/r/todayilearned.json will list posts for the
`todayilearned` subreddit.

Your application should support any list of subreddits, but you can use these:
- `/r/todayilearned`
- `/r/nevertellmetheodds`
- `/r/cats`
- `/r/mademesmile`
- `/r/mildlyinteresting`

## Acceptance Criteria

- The UI matches the Figma design
- React, Redux, and TypeScript are all used
- Test area included for a React view and Redux action or reducer

**Bonus tasks**

- Add mobile responsiveness styles
- Add a "typecheck" script that checks for any TypeScript compilation errors
- Add an ESLint script that checks for lint errors and passes
