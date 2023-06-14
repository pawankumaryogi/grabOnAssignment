import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Post.css'

const UpdatePostForm = () => {
  const history = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    const response = await fetch(`http://localhost:3001/posts/${id}`);
    const data = await response.json();
    setPost(data);
    setTitle(data.title);
    setBody(data.body);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:3001/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        body,
      }),
    });

    history('/');
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="form-container">
    <h2>Update Post</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="form-control"
        ></textarea>
      </div>
      <button type="submit" className="btn-primary">Update Post</button>
    </form>
  </div>
  );
};

export default UpdatePostForm;