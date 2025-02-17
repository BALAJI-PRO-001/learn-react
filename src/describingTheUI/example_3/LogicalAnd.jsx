function Item({ name, isPacked }) {
  return (
    <li>
      {name} 
      {isPacked && <span> &#x2714;</span>}
      {!isPacked && <span> &#x2718;</span>}
    </li>
  );
}


export default function LogicalAnd() {
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