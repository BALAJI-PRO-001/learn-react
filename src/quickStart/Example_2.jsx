/* Nested component. */

function Component1() {
  return (
    <h1>Component 1</h1>
  );
}

function Component2() {
  return (
    <h1>Component 2</h1>
  );
}

export default function Example_2() {
  return (
    <>
      <Component1 />
      <Component2 />
    </>
  );
}
