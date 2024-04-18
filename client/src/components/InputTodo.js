import React, { Fragment, useState } from "react";
import axios from "axios";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/todos", {
        description,
      });

      if (response.status === 200) {
        setDescription("");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
