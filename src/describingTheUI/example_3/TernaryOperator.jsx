function Item({ name, isPacked }) {
  return (
    <li>
      {isPacked 
        ? <span>{name} &#x2714;</span>
        : <span>{name} &#x2718;</span>
      }
    </li>
  );
}


export default function TernaryOperator() {
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