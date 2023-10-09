import React, { useState, useEffect } from 'react';

const Posts = () => {
  const [posts, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Помилка при отриманні даних');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error('Помилка при отриманні користувачів:', error);
      });
  }, []);

  return (
    <div>
      <h1>Список Постів</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>

  );
};

export default Posts;
