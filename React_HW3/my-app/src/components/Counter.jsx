import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h1>Лічильник: {count}</h1>
      <button onClick={increment}>Збільшити</button>
      <button onClick={decrement}>Зменшити</button>
      <button onClick={reset}>Скинути</button>
    </div>
  );
}

export default Counter;
