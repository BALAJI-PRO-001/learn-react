
/* 
  Updating the screen
  ===================
  Shared State Example  
*/

import { useState } from "react";


function Button({ label, count, onButtonClick }) {
  return (
    <button
      style={{margin: '5px'}}
      onClick={onButtonClick}
    >
      {label}: {count}
    </button>
  );
}


export default function Example_10() {
  const [ count, setCount ] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <Button 
        label={'Button 1'}
        count={count}
        onButtonClick={handleClick}
      />

      <Button 
        label={'Button 2'}
        count={count}
        onButtonClick={handleClick}
      />
    </>
  );
}