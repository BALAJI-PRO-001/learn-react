function Button({ children }) {
  return (
    <button>{children}</button>
  );
}


export default function Children() {
  return (
    <>
      <Button> + Add </Button>  
      <Button> - Sub </Button> 
      <Button>
        <span>Click me</span>  
      </Button> 
    </>
  );
}