function User({ name, email, password }) {
  return (
    <>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </>
  );
}


function Profile(user) {
  return (
    <>
      {/* 
        <User
          name={user.name}
          email={user.email}
          password={user.password}
        /> 
      */}

      <User {...user} />
    </>
  );
}


export default function ForwardingProps() {
  return (
    <>
      <Profile 
        name={"Ram"}
        email={"ram@gmail.com"}
        password={"ram@@#$"}
      />
    </>
  );
}