import { useEffect, useState } from "react";
import "./App.scss";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import NavListItem from "./components/NavListItem";
import { SubredditPost } from "./features/subreddit/SubredditPost";
import {
  addTopicToVisited,
  fetchSubredditsByTopic,
  setTopic,
} from "./features/subreddit/subredditSlice";
import redditLogo from "./images/reddit-icon-name.svg";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const dispatch = useAppDispatch();
  const { topic, visited, posts } = useAppSelector((state) => state.subreddit);
  const [newTopic, setNewTopic] = useState<undefined | string>(undefined);

  useEffect(() => {
    if (!posts.length) {
      dispatch(fetchSubredditsByTopic(topic));
    }
  }, [dispatch, posts, topic]);

  const clearNewTopic = () => {
    setNewTopic(undefined);
  };
  const handleSubredditChange = async (topic: string) => {
    try {
      dispatch(setTopic(topic));
      await dispatch(fetchSubredditsByTopic(topic));
    } catch (error) {
      throw error;
    } finally {
      clearNewTopic();
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>{topic}</h1>
      </header>
      <nav className="App-side-navigation">
        <img alt="reddit logo. smiling snoo head" src={redditLogo} />

        <ul className="App-nav-list">
          {visited.map((subreddit) => (
            <NavListItem
              active={topic === subreddit}
              key={subreddit}
              handleClick={() => handleSubredditChange(subreddit)}
            >
              <span>r/{subreddit}</span>
            </NavListItem>
          ))}
          <NavListItem active={!!newTopic?.length}>
            <form
              name="search-by-subreddit"
              onSubmit={(event) => {
                event.preventDefault();
                if (newTopic) {
                  handleSubredditChange(newTopic);
                  dispatch(addTopicToVisited());
                }
              }}
            >
              <input
                name="new-topic"
                type="text"
                className="App-search"
                placeholder="r/placeholder"
                onChange={(event) => setNewTopic(event.target.value)}
              />
              <input type="submit" hidden />
            </form>
          </NavListItem>
        </ul>
      </nav>

      <main className="Posts">
        <ErrorBoundary>
          {!!posts.length && (
            <ul>
              {posts.map((post) => (
                <SubredditPost key={post.id} post={post} />
              ))}
            </ul>
          )}
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;
