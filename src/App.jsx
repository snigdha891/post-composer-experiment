import { useState } from "react";
import "./App.css";

function App() {
  const [post, setPost] = useState("");
  const [platform, setPlatform] = useState("Twitter");

  const limit = platform === "Twitter" ? 280 : 3000;

  const isExceeded = post.length > limit;

  return (
    <div className="container">
      <div className="composer">
        <h1>Post Composer</h1>

        <label>Select Platform</label>

        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option value="Twitter">Twitter</option>
          <option value="LinkedIn">LinkedIn</option>
        </select>

        <label>Write your post</label>

        <textarea
          rows="8"
          placeholder="Write your post here..."
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />

        <p className={isExceeded ? "error-count" : "count"}>
          Characters: {post.length} / {limit}
        </p>

        {isExceeded && (
          <p className="error">
            Error: Character limit exceeded!
          </p>
        )}

        <button disabled={isExceeded || post.length === 0}>
          Post
        </button>
      </div>
    </div>
  );
}

export default App;