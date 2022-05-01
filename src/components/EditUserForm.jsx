import React from "react";
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ defaultValues: props.currentUser });

  setValue("name", props.currentUser.name);
  setValue("lastname", props.currentUser.lastname);
  setValue("username", props.currentUser.username);

  const onSubmit = (data, e) => {
    e.target.reset();
    props.updateUser(props.currentUser.id, data);
    localStorage.removeItem(data.id);
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
      <label htmlFor="">Last Name</label>
      <input
        type="text"
        name="lastname"
        {...register("lastname", {
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
      <button>Edit user</button>
    </form>
  );
};
export { EditUserForm };
