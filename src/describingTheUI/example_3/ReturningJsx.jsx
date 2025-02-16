function Item({ name, isPacked }) {
  if (isPacked) {
    return <li>{name} &#x2714;</li>
  }
  return <li>{name} &#x2718;</li>
}



export default function ReturningJsx() {
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