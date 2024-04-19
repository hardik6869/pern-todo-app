import axios from "axios";
import React, { useState } from "react";
import { setupTodo } from "../utils/apiPaths";

const EditTodo = ({ todo }) => {
  const [editTodo, setEditTodo] = useState(todo.description);

  const handleUpdateTodo = async (e) => {
    // e.preventDefault();
    try {
      const response = await axios.put(`${setupTodo}/${todo.todo_id}`, {
        description: editTodo,
      });

      if (response.status === 200) {
        window.location = "/";
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div
        className="modal"
        id={`id${todo.todo_id}`}
        onClick={() => setEditTodo(todo.description)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={() => setEditTodo(todo.description)}
              ></button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={(e) => handleUpdateTodo(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => setEditTodo(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTodo;
