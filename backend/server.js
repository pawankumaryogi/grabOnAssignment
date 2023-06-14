const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


const cors = require('cors');

const app = express();
const port = 3001;
const dataFilePath = path.join(__dirname, 'data.json');

app.use(cors());

app.use(express.json());

// Read JSON data
app.get('/posts', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      res.sendStatus(500);
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Create a new post
app.post('/posts', (req, res) => {
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading data file:', err);
        res.status(500).json({ error: 'Failed to read data file' });
        return;
      }
  
      const posts = JSON.parse(data);
  
      const newPost = {
        id: generateId(posts), // Generate a new ID
        title: req.body.title,
        body: req.body.body,
      };
  
      posts.push(newPost);
  
      fs.writeFile(dataFilePath, JSON.stringify(posts, null, 2), (err) => {
        if (err) {
          console.error('Error writing data file:', err);
          res.status(500).json({ error: 'Failed to write data file' });
          return;
        }
  
        res.status(201).json(newPost);
      });
    });
  });
  function generateId(posts) {
    // Generate a new ID
    const lastPost = posts[posts.length - 1];
    if (lastPost) {
      if (typeof lastPost.id === 'number') {
        // If the last post has a number ID, generate the next ID as a number
        return lastPost.id + 1;
      } else if (typeof lastPost.id === 'string') {
        // If the last post has a UUID, generate a new UUID
        return uuidv4();
      }
    }
  
    // Default case: Generate a new UUID
    return uuidv4();
  }
// app.post('/posts', (req, res) => {
//     fs.readFile(dataFilePath, 'utf8', (err, data) => {
//       if (err) {
//         console.error('Error reading data file:', err);
//         res.status(500).json({ error: 'Failed to read data file' });
//         return;
//       }
  
//       const posts = JSON.parse(data);
  
//       const newPost = {
//         id: uuidv4(), // Generate a new ID using UUID
//         title: req.body.title,
//         body: req.body.body,
//       };
  
//       posts.push(newPost);
  
//       fs.writeFile(dataFilePath, JSON.stringify(posts, null, 2), (err) => {
//         if (err) {
//           console.error('Error writing data file:', err);
//           res.status(500).json({ error: 'Failed to write data file' });
//           return;
//         }
  
//         res.status(201).json(newPost);
//       });
//     });
//   });

// Get a post by ID
app.get('/posts/:id', (req, res) => {
    const postId = req.params.id;
    
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading data file:', err);
        res.status(500).json({ error: 'Failed to read data file' });
        return;
      }
  
      const posts = JSON.parse(data);
      const post = findPostById(posts, postId);
    
      if (!post) {
        res.status(404).json({ error: 'Post not found' });
        return;
      }
    
      res.json(post);
    });
  });
  
  function findPostById(posts, postId) {
    // Find the post with the matching ID
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      if (post.id === postId || post.id.toString() === postId) {
        return post;
      }
    }
    
    return null;
  }
  
// Update a post
app.put('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      res.sendStatus(500);
    } else {
      const posts = JSON.parse(data);
      const postIndex = posts.findIndex(post => post.id === postId);
      if (postIndex === -1) {
        res.sendStatus(404);
      } else {
        const updatedPost = { ...posts[postIndex], ...req.body };
        posts[postIndex] = updatedPost;
        fs.writeFile('data.json', JSON.stringify(posts), err => {
          if (err) {
            console.error('Error writing JSON file:', err);
            res.sendStatus(500);
          } else {
            res.sendStatus(200);
          }
        });
      }
    }
  });
});

// Delete a post

 
  
 
  app.delete('/posts/:id', (req, res) => {
    const postId = req.params.id;
  
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading data file:', err);
        res.status(500).json({ error: 'Failed to read data file' });
        return;
      }
  
      const posts = JSON.parse(data);
      const index = findPostIndex(posts, postId);
  
      if (index === -1) {
        res.status(404).json({ error: 'Post not found' });
        return;
      }
  
      posts.splice(index, 1);
  
      fs.writeFile(dataFilePath, JSON.stringify(posts, null, 2), (err) => {
        if (err) {
          console.error('Error writing data file:', err);
          res.status(500).json({ error: 'Failed to write data file' });
          return;
        }
  
        res.status(200).json({ message: 'Post deleted successfully' });
      });
    });
  });
  
  function findPostIndex(posts, postId) {
    // Find the index of the post with the matching ID
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      if (post.id === postId || post.id.toString() === postId) {
        return i;
      }
    }
  
    return -1;
  }
  

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
