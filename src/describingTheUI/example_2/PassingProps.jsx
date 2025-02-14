
/*
  function User({ user }) {
    const name = user.name;
    const email = user.email;
    const password = user.password;
    
   return (
      <>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </>
    ); 
  }
*/


function User({ user }) {
  return (
    <>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
    </>
  );
}


export default function PassingProps() {
  const user = {
    name: 'Ram',
    email: 'ram@gmail.com',
    password: 'ram@#$'
  };

  return (
    <>
      <User user={user}/>
      <User 
        user={{
          name: 'Sam',
          email: 'sam@gmail.com',
          password: 'sam@#$2'
        }}
      />
    </>
  );
}