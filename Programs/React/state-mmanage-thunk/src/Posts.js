import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postsSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  // Fetch data on component mount
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2 style={{ color: "red" }}>Error: {error}</h2>;

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
