import React, { useEffect, useState } from "react";
import { setupTodo } from "../utils/apiPaths";
import axios from "axios";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todosList, setTodosList] = useState([]);

  const getTodos = async () => {
    try {
      const response = await axios.get(setupTodo);
      if (response.status === 200) {
        setTodosList(response.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDeleteTodo = async (todoId) => {
    try {
      const response = await axios.delete(`${setupTodo}/${todoId}`);
      if (response.status === 200) {
        setTodosList(todosList.filter((todo) => todo.todo_id !== todoId));
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
          {todosList.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;
