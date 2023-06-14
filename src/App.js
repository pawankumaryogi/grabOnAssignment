 import React from 'react';
 import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
 import './App.css'
 import PostsTable from './components/PostsTable';
import CreatePostForm from './components/CreatePostForm';
import UpdatePostForm from './components/UpdatePostForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsTable />} />
        <Route path="/create" element={<CreatePostForm />} />
        <Route path="/update/:id" element={<UpdatePostForm />} />
      </Routes>
    </Router>
  );
};

export default App;

// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import './App.css'
// function App() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     const response = await fetch('http://localhost:3001/posts');
//     const data = await response.json();
//     setPosts(data);
//   };

//   const createPost = async () => {
//     // Prompt the user to enter values for title and body
//     const title = prompt('Enter post title');
//     const body = prompt('Enter post body');
  
//     // Proceed with creating the post if the user entered valid values
//     if (title && body) {
//       const response = await fetch('http://localhost:3001/posts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           title,
//           body,
//         }),
//       });
  
//       if (response.ok) {
//         fetchPosts();
//       }
//     }
//   };
  

//   // const updatePost = async (id) => {
//   //   const response = await fetch(`http://localhost:3001/posts/${id}`, {
//   //     method: 'PUT',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     },
//   //     body: JSON.stringify({
//   //       title: 'Updated Post',
//   //       body: 'New content',
//   //     }),
//   //   });

//   //   if (response.ok) {
//   //     fetchPosts();
//   //   }
//   // };
//   const updatePost = async (id) => {
//     // Get the post object to update
//     const postToUpdate = posts.find(post => post.id === id);
  
//     // Prompt the user to enter new values for title and body
//     const newTitle = prompt('Enter new title', postToUpdate.title);
//     const newBody = prompt('Enter new body', postToUpdate.body);
  
//     // Proceed with the update if the user entered valid values
//     if (newTitle && newBody) {
//       const response = await fetch(`http://localhost:3001/posts/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           title: newTitle,
//           body: newBody,
//         }),
//       });
  
//       if (response.ok) {
//         fetchPosts();
//       }
//     }
//   };
  

//   const deletePost = async (id) => {
//     const response = await fetch(`http://localhost:3001/posts/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       fetchPosts();
//     }
//   };

//   return (
//     <div className='app'>
//       <button onClick={createPost}>Create Post</button>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Body</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {posts.map(post => (
//             <tr key={post.id}>
//               <td>{post.id}</td>
//               <td>{post.title}</td>
//               <td>{post.body}</td>
//               <td>
//                 <button id='updateButton' onClick={() => updatePost(post.id)}>Update</button>
//                 <button id='deleteButton' onClick={() => deletePost(post.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;
