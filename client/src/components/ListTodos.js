import React, { useEffect, useState } from "react";
import { setupTodo } from "../utils/apiPaths";
import axios from "axios";

const ListTodos = () => {
  const [todoList, setTodoList] = useState([]);

  const getTodos = async () => {
    try {
      const response = await axios.get(setupTodo);
      if (response.status === 200) {
        setTodoList(response.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((item) => (
            <tr key={item.todo_id}>
              <td>{item.description}</td>
              <td>
                <button className="btn btn-success">Edit</button>
              </td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;
