import React, { useState } from "react";
import { AddUserForm } from "./components/AddUserForm";
import { EditUserForm } from "./components/EditUserForm";
import { UserTable } from "./components/UserTable";

function App() {
  // Agrega una usuario
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  // Borra usuaro
  const deleteUser = (id) => {
    localStorage.removeItem(id);
    setUsers(users.filter((user) => user.id !== id)); //Regresa un array donde el id sea distinto al user.id
  };

  // cambio de estado del usuario al escribir datos
  const [users, setUsers] = useState("");

  //Editar
  const [editing, setEditing] = useState(false);

  // Inicialización de los datos que se van a editar
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    lastname: "",
    username: "",
  });

  // se establecen los datos del item que se va editar
  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      username: user.username,
    });
  };

  // Actualizacion: datos editados
  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm currentUser={currentUser} updateUser={updateUser} />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
