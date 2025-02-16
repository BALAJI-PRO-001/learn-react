function Item({ name, isPacked }) {
  if (isPacked) {
    return <li>{name} &#x2714;</li>
  } 
  return null;
}


export default function ReturningNull() {
  return (
    <>
      <h1>Packing List</h1>
      <ul>
        <Item 
          name={"Item 1"}
          isPacked={true}
        />
        <Item 
          name={"Item 2"}
          isPacked={true}
        />
        <Item 
          name={"Item3"} 
          isPacked={false}
        />
      </ul>
    </>
  );
}