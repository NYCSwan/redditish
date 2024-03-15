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

function App() {
  const dispatch = useAppDispatch();
  const { topic, visited, posts } = useAppSelector((state) => state.subreddit);
  const [newTopic, setNewTopic] = useState<null | string>(null);

  useEffect(() => {
    if (!posts.length) {
      dispatch(fetchSubredditsByTopic(topic));
    }
  }, [dispatch, posts, topic]);

  const handleTopicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTopic(event.target.value);
  };

  const handleSubredditChange = (topic: string) => {
    dispatch(setTopic(topic));
    dispatch(addTopicToVisited());
    dispatch(fetchSubredditsByTopic(topic));
    setNewTopic(null);
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
                try {
                  event.preventDefault();
                  dispatch(setTopic(newTopic!));
                  dispatch(addTopicToVisited());
                  dispatch(fetchSubredditsByTopic(newTopic!));
                } catch (error) {
                  throw error;
                } finally {
                  setNewTopic(null);
                }
              }}
            >
              <input
                name="new-topic"
                type="text"
                className="App-search"
                placeholder="r/placeholder"
                onChange={(event) => handleTopicChange(event)}
                // onKeyDown={(event) => {
                //   event.preventDefault();

                // }}
              />
              <input type="submit" hidden />
            </form>
          </NavListItem>
        </ul>
      </nav>
      <main className="Posts">
        {posts.length && (
          <ul>
            {posts.map((post) => (
              <SubredditPost key={post.id} post={post} />
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default App;
