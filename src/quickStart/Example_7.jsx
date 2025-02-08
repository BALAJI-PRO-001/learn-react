/* Rendering lists */

const users = [
  { id: 1, name: 'Ram' },
  { id: 2, name: 'Sam' },
  { id: 3, name: 'Kumar' }
];


export default function Example_7() {
  return (
    <>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          })}
        </tbody>
      </table>
    </>
  );
}