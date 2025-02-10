
/* Updating the screen */

import { useState } from "react";

function CounterWithOwnState() {
  let [ count, setCount ] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <span>Count: {count}</span> 
      <button 
        style={{marginLeft: '10px'}}
        onClick={handleClick}
      >
        Add
      </button>
    </>
  );
}


export default function Example_9() {

  return (
    <>
      <CounterWithOwnState />
      <br/> <br/>
      <CounterWithOwnState />
    </>
  );
}