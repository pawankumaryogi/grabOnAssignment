import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const PostsTable = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await fetch("http://localhost:3001/posts");
    const data = await response.json();
    setPosts(data);
  };

  const deletePost = async (id) => {
    await fetch(`http://localhost:3001/posts/${id}`, {
      method: "DELETE",
    });
    fetchPosts();
  };

  return (
    <div>
      <div className="header">
        <h1>Posts Table</h1>
        <Link to="/create">
          <button className="createButton">Create</button>
        </Link>
      </div>
      <table>
        <thead className="theadSticky">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
                <Link to={`/update/${post.id}`}>
                  <button>Update</button>
                </Link>
                <button id="deleteButton" onClick={() => deletePost(post.id)}>
                  Delete

                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsTable;
