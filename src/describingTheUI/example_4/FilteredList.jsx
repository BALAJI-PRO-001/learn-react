import users from './data.js';

export default function FilteredList() {
  // const filteredUsers = users.filter((user) => {
  //   return user.name.toLowerCase().includes('am');
  // });

  // const filteredUsersList = filteredUsers.map((user) => {
  //   return <li key={user.id}>{user.name}</li>
  // });

  return (
    <>
      <h3>Users</h3>
      {/* 
        <ul>
          {filteredUsersList}
        </ul> 
      */}
      <ul>
        {
          users.filter((user) => {
            return user.name.toLowerCase().includes('am');
          })
          .map((user) => {
            return <li key={user.id}>{user.name}</li>
          })
        }
      </ul>
    </>
  );
}
