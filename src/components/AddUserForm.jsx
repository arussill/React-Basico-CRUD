import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    props.addUser(data);
    localStorage.setItem(data.id, JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">Name</label>
      <input
        type="text"
        name="name"
        {...register("name", {
          required: { value: true, message: "Campo Requerido" },
        })}
      />
      <div>{errors?.name?.message}</div>
      <label htmlFor="">Username</label>
      <input
        type="text"
        name="username"
        {...register("username", {
          required: { value: true, message: "Campo Requerido" },
        })}
      />
      <div>{errors?.username?.message}</div>
      <button>Add new user</button>
    </form>
  );
};

export { AddUserForm };
