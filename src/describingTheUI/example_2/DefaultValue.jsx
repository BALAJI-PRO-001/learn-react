function Calculator({ num1, num2 = 100 }) {
  return (
    <>
      <h3>Calculator</h3>
      <p>Add: {num1 + num2}</p>
      <p>Sub: {num1 - num2}</p>
      <p>Mul: {num1 * num2}</p>
    </>
  );
}



export default function DefaultValue() {
  return (
    <>
      <Calculator num1={100} num2={200}/>
      <Calculator num1={100} />
    </>
  );
}