import { BASE_URL, Post } from "./subredditSlice";
import "./Subreddit.scss";

export function SubredditPost({ post }: { post: Post }) {
  return (
    <div className="Post-card">
      <img src={post.thumbnail} alt="" className="Post-image" />
      <div className="flex">
        <p className="Post-text">{post.title}</p>
        <button className="Post-button">
          <a
            href={`${BASE_URL}${post.permalink}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            {post.ups} upvotes
          </a>
        </button>
      </div>
    </div>
  );
}
