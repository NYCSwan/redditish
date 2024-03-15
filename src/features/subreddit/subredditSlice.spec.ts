import subredditReducer, { setTopic, SubredditState } from "./subredditSlice";

describe("subreddit reducer", () => {
  const initialState: SubredditState = {
    topic: "todayilearned",
    posts: [],
    dist: 0,
    visited: ["todayilearned"],
    status: "idle",
  };
  it("should handle initial state", () => {
    expect(subredditReducer(undefined, { type: "unknown" })).toEqual({
      topic: "todayilearned",
      posts: [],
      visited: ["todayilearned"],
      dist: 0,
      status: "idle",
    });
  });

  it("should handle set new subreddit topic", () => {
    const actual = subredditReducer(
      initialState,
      setTopic("nevertellmetheodds")
    );
    expect(actual.topic).toEqual("nevertellmetheodds");
  });
  it("should add new topic to visited list", () => {
    const actual = subredditReducer(
      initialState,
      setTopic("nevertellmetheodds")
    );
    expect(actual.topic).toEqual("nevertellmetheodds");
  });
});
