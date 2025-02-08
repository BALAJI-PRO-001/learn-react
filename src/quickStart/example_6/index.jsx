import backgroundImage from './img.jpg';


export default function Example_6() {
  return (
    <> 
      <img src={backgroundImage} alt="no-img" />
      <hr />
      <img src="/images/img.jpg" alt="no-img" />
    </>
  );
}