function Item({ name, isPacked }) {
  let content;

  if (isPacked) {
    content = <span> &#x2714;</span>;
  } else {
    content = <span> &#x2718;</span>;
  }

  return (
    <li>
      {name} {content}
    </li>
  );
}


export default function AssigningJsx() {
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