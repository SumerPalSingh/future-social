import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { auth } from './firebase';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/post/feed')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  const likePost = (id) => {
    axios.post(`/api/post/like/${id}`)
      .then(res => setPosts(posts.map(p => p._id === id ? res.data : p)));
  };

  return (
    <div>
      <h1>Global Feed</h1>
      {posts.map(post => (
        <div key={post._id}>
          <p>{post.content}</p>
          {post.imageUrl && <img src={post.imageUrl} alt="post" style={{ width: 200 }} />}
          <button onClick={() => likePost(post._id)}>👏 {post.likes}</button>
        </div>
      ))}
    </div>
  );
}
export default App;
