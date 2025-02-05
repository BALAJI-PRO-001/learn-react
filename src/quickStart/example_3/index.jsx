import './style.css';

export default function Example_3() {
  return (
    <>
      <h1 className="heading">HI</h1>
      <p className="para">HI</p>
      <hr />
      <h1 style={{
        fontSize: '40px', 
        color: 'red'
      }}
      >Inline Style</h1>
    </>
  );
}