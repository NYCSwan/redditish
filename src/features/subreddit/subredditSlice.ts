import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";
import { Reddit } from "./subredditApiResponseTypes";

export const BASE_URL = "https://www.reddit.com";

export interface Post {
  title: string;
  link: string;
  ups: number;
  [x: string]: any; //TODO make ts happier
}
export interface SubredditState {
  topic: string;
  posts: Post[];
  dist: number;
  visited: string[];
  status: "idle" | "loading" | "failed";
}

const initialState: SubredditState = {
  topic: "todayilearned",
  posts: [],
  dist: 0,
  visited: ["todayilearned"],
  status: "idle",
};
type GetSubredditResponse = Reddit;

export const fetchSubredditsByTopic = createAsyncThunk(
  "subreddit/fetchSubreddit",
  async (topic: string, thunkAPI) => {
    try {
      const response = await axios.get<GetSubredditResponse>(
        `${BASE_URL}/r/${topic}.json`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      const data = response.data;
      return data as Reddit;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("error", error.response.data);
        throw error;
      }
      return thunkAPI.rejectWithValue({ error });
    }
  }
);

export const subredditSlice = createSlice({
  name: "subreddit",
  initialState,
  reducers: {
    setTopic: (state, action: PayloadAction<string>) => {
      state.topic = action.payload;
      state.posts = [];
      state.dist = 0;
    },
    addTopicToVisited: (state) => {
      state.visited.push(state.topic);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubredditsByTopic.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSubredditsByTopic.fulfilled, (state, action) => {
        state.status = "idle";
        state.dist = action.payload.data.dist;
        state.posts = action.payload.data.children.map(
          (child: any) => child.data
        );
      });
  },
});

export const { setTopic, addTopicToVisited } = subredditSlice.actions;

export const selectSubredditPosts = (state: RootState) => state.subreddit.posts;

export default subredditSlice.reducer;
