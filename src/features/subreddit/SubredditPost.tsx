import { BASE_URL } from "./subredditSlice";
import "./Subreddit.scss";
import { ChildData } from "./subredditApiResponseTypes";

export function SubredditPost({ post }: { post: ChildData }) {
  console.log(post);
  return (
    <div className="Post-card">
      <img src={post.thumbnail} alt="" className="Post-image" />
      <div className="flex">
        <p className="Post-text">{post.title}</p>
        <button className="Post-button" type="button">
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
