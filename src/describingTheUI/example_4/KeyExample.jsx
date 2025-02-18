import { useState } from 'react';
import data from './data.js';

export default function KeyExample() {
  const [ users, setUsers ] = useState(data);
  const [ name, setName ] = useState('');

  function handleInputChange(e) {
    setName(e.target.value);
  }

  function handleAddUser() {
    setUsers([
      {
        id: users[users.length -1].id + 1,
        name: name
      },
      ...users
    ]);
  }

  return (
    <>
      <label>Search Username: </label> 
      <input type="text" onChange={handleInputChange}/>
      <button onClick={handleAddUser}>Add</button>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>
    </>
  );
}