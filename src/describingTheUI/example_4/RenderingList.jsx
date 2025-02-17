import users from './data.js';

export default function RenderingList() {
  // const usersList = users.map((user) => {
  //   return <li>{user.name}</li>
  // });

  return (
    <>
      <h3>Users</h3>
      {/* <ul>{usersList}</ul> */}
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>
    </>
  );
} 