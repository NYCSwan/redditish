# Frontend Assignment

Reddit Feed

## Getting Started

This project was initialized using the [Create React App](https://github.com/facebook/create-react-app)
template for [TypeScript](https://typescriptlang.org/) + [Redux Toolkit](https://redux-toolkit.js.org/).
You will first need to install [Yarn](https://yarnpkg.com/):

```sh
corepack enable
```

Then install the app dependencies:

```sh
yarn install
```

And finally, run the app:

```sh
yarn start
```

If you look at the `package.json`, you will notice we have already installed some
libraries that may be helpful. The exercise can be completed without any additional
packages, but feel free to add anything that helps you build faster.

This project already includes [Redux Toolkit](https://redux-toolkit.js.org/)
for state management. You can find the Redux store in `src/app/store.ts`.

Lastly, we have also added [Jest](https://jestjs.io/) along with with
[React Testing Library](https://testing-library.com) for testing React components.
You can run the tests with:

```sh
yarn test
```

## Business Requirements

You have been tasked with building a simple Reddit-based web application that
allows users to browse a collection of subreddits. When a user clicks on a
link in the sidebar, the main feed should be updated to show the latest posts
for the given subreddit. The upvotes button should link back to the post on
Reddit and format large upvote counts.

Use the Reddit's public subreddit API `/r/{subreddit}.json` to query posts. All
subreddits follow the same [Listing](https://www.reddit.com/dev/api/#listings) schema.
For example: <https://www.reddit.com/r/todayilearned.json> will list posts for the
`todayilearned` subreddit.

Your application should support any list of subreddits, but here are some you can use:

- `/r/todayilearned`
- `/r/nevertellmetheodds`
- `/r/images`
- `/r/cats`
- `/r/mademesmile`
- `/r/mildlyinteresting`

## Acceptance Criteria

- The app meets the business requirements above
- The UI matches the Figma design
- React, Redux, and TypeScript are all used
- Tests are included for a React view and Redux action or reducer

### _Bonus tasks_

None of these are required, but are nice to include if you have time:

- Error handling
- Mobile responsiveness styles
- A "typecheck" script that checks for any TypeScript compilation errors
- An ESLint script that checks for lint errors and passes
