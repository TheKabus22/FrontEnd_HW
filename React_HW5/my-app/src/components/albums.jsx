import React, { useState, useEffect } from 'react';

const Albums = () => {
  const [albums, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
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
      <h1>Список Альбомів</h1>
      <ul>
        {albums.map(albums => (
          <li key={albums.id}>{albums.title}</li>
        ))}
      </ul>
    </div>

  );
};

export default Albums;
