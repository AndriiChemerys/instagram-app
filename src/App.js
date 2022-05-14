import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Sara",
      imageAvatar: "img\fit_girl_1_b.jpg",
      caption: "Chilling.. <3",
      imageUrl: "img\fit_girl_1_a.jpg",
    },
    {
      username: "Andrii",
      imageAvatar: "imgchemerys_andrii_1.png",
      caption: "Stand with UA",
      imageUrl: "imgchemerys_andrii_2.jpg",
    },
    {
      username: "Sensual",
      imageAvatar: "img\fit_girl_2.png",
      caption: "New home :)",
      imageUrl: "imginterior_1.jpg",
    },
  ]);

  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app=headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      {posts.map((post) => (
        <Post
          username={post.username}
          imageAvatar={post.imageAvatar}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}

      {/* <Post
        username="Sara"
        imageAvatar="\img\fit_girl_1_b.jpg"
        caption="Chilling.. <3"
        imageUrl="\img\fit_girl_1_a.jpg"
      />
      <Post
        username="Andrii"
        imageAvatar="\img\chemerys_andrii_1.png"
        caption="Stand with UA"
        imageUrl="\img\chemerys_andrii_2.jpg"
      />
      <Post
        username="Sensual"
        imageAvatar="\img\fit_girl_2.png"
        caption="New home :)"
        imageUrl="\img\interior_1.jpg"
      /> */}
    </div>
  );
}

export default App;
