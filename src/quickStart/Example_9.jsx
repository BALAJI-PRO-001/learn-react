/* Updating the screen */
import { useState } from 'react';

export default function Example_9() {
  const [ count, setCount ] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <span>Count: {count}</span>
      <button onClick={handleClick}> Click </button>
    </>
  );
}