import React, { useState, useEffect } from 'react';

const ComponentA = () => {
  const [count, setCount] = useState(0);

  // The useEffect hook with 'count' as a dependency will run whenever 'count' changes
  useEffect(() => {
    // Display an alert when 'count' changes
    alert(`Count changed to: ${count}`);
  }, [count]); // 'count' is specified as the dependency

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Effect With Variable</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default ComponentA;