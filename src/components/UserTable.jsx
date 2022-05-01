import React from "react";

const UserTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>User</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.lastname}</td>
              <td>{user.username}</td>
              <td>
                <button
                  className="btn btn-warning mx-3"
                  onClick={() => props.editRow(user)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger mx-auto"
                  onClick={() => props.deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
export { UserTable };
