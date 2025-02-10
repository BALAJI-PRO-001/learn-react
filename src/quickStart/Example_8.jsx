
/* Responding to events */

export default function Example_8() {
  function handleClick() {
    alert('HI');
  }

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}