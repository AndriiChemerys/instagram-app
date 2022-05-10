import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <h3>Username</h3>

      {/* header -> avatar + username */}

      <img
        className="post__image"
        src="https://upload.wikimedia.org/wikipedia/commons/1/1a/24701-nature-natural-beauty.jpg"
        alt=""
      />
      {/* image */}
      <h4>Username: caption</h4>
      {/* username + caption */}
    </div>
  );
}

export default Post;
