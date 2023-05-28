'use client';
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  console.log('client-components');
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}> + </button>
      <button onClick={() => setCount((prev) => prev - 1)}> - </button>
    </>
  );
};

export default Counter;
