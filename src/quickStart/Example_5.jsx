/* Condition Rendering */

function SayHI() {
  return (
    <h1>HI</h1>
  );
}

function SayBye() {
  return (
    <h1>Bye</h1>
  );
}


export default function Example_5() {
  let content;
  const boolean = true;

  if (boolean) {
    /* content = SayHI(); */
    content = <SayHI />;
  } else {
    content = <SayBye />
  }

  return (
    <>
      {content}
      <hr />

      {boolean 
        ? <SayHI />
        : <SayBye />
      }

      <hr />
      {boolean && <SayHI />}
    </>
  );
}