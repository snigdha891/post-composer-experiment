import { useState } from "react";

function PostComposer() {
  const limits = {
    Twitter: 280,
    Facebook: 63206,
    Instagram: 2200,
    LinkedIn: 3000,
  };

  const [platform, setPlatform] = useState("Twitter");
  const [post, setPost] = useState("");

  const limit = limits[platform];
  const remaining = limit - post.length;

  return (
    <div className="container">
      <h1>Post Composer</h1>

      <label>Select Platform:</label>
      <br />

      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
      >
        <option value="Twitter">Twitter</option>
        <option value="Facebook">Facebook</option>
        <option value="Instagram">Instagram</option>
        <option value="LinkedIn">LinkedIn</option>
      </select>

      <br />
      <br />

      <textarea
        rows="8"
        cols="50"
        placeholder="Write your post here..."
        value={post}
        onChange={(e) => setPost(e.target.value)}
      ></textarea>

      <p>
        Characters: {post.length}/{limit}
      </p>

      {remaining >= 0 ? (
        <p style={{ color: "green" }}>
          ✔ Valid Post ({remaining} characters remaining)
        </p>
      ) : (
        <p style={{ color: "red" }}>
          ✘ Character limit exceeded by {-remaining} characters
        </p>
      )}
    </div>
  );
}

export default PostComposer;