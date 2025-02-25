/* Purity: Components as formulas */

function Message({ msg }) {
  return <h3>Message: {msg}</h3>
}

export default function ComponentsAsFormula() {
  return (
    <>
      <Message msg={'HI'}/> 
      <Message msg={'HI'}/>
    </>
  );
}