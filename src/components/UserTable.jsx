import React, { Fragment, useState } from "react";

const UserTable = (props) => {
  return (
    <Fragment>
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
                    data-bs-toggle="modal"
                    data-bs-target="#cancelarModal"
                  >
                    Delete
                  </button>
                  {/* Ventana Modal */}
                  <div
                    className="modal fade"
                    id="cancelarModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Confirm
                          </h5>
                        </div>
                        <div className="modal-body">
                          Are you sure you want delete user?
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary mx-auto"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary mx-auto"
                            data-bs-dismiss="modal"
                            onClick={() => props.deleteUser(user.id)}
                          >
                            OK
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
    </Fragment>
  );
};
export { UserTable };
