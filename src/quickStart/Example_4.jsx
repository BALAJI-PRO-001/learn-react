/* Displaying data */

const user = {
  name: 'Ram',
  email: 'ram@gmail.com',
  password: 'ram@#$'
};

const data = 100;

export default function Example_4() {
  return (
    <>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
    </>
  );
}