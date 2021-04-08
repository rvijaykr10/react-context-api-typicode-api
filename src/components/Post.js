import React, { useState, useContext, useEffect } from "react";
import PostContext from "../context/post/postContext";

const Post = () => {
  const postContext = useContext(PostContext);
  const { loading, posts, getPosts } = postContext;

  const [post, setPost] = useState([]);

  useEffect(() => {
    getPosts();
    setPost(posts);
  });
  return (
    <div
      className="p-4"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
      }}
    >
      {loading ? (
        <img
          src="https://www.rrmotorct.com/1/images/loading-gear.gif"
          alt="pic.jpg"
        ></img>
      ) : (
        <div className="p-3">
          {post.map((p) => {
            return (
              <div key={p.id} className="card " style={{ width: "40rem" }}>
                <div className="card-body">
                  <p>{p.id}</p>
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text">{p.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Post;
