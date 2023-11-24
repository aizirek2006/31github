import React, { useReducer, useState, useEffect } from "react";

const initialState = {
  tasks: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.taskId),
      };
    default:
      return state;
  }
};

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [deleteTaskId, setDeleteTaskId] = useState(null);

  useEffect(() => {
    const storedDeleteTaskId = localStorage.getItem("deleteTaskId");
    setDeleteTaskId(storedDeleteTaskId ? JSON.parse(storedDeleteTaskId) : null);
  }, []);

  useEffect(() => {
    if (deleteTaskId) {
      localStorage.setItem("deleteTaskId", JSON.stringify(deleteTaskId));
    } else {
      localStorage.removeItem("deleteTaskId");
    }
  }, [deleteTaskId]);

  const addTask = (e) => {
    e.preventDefault();
    const task = {
      id: new Date().getTime(),
      text: e.target.task.value,
    };
    dispatch({ type: "ADD_TASK", task });
    e.target.task.value = "";
  };

  const deleteTask = (taskId) => {
    setDeleteTaskId(taskId);
  };

  const confirmDelete = () => {
    dispatch({ type: "DELETE_TASK", taskId: deleteTaskId });
    setDeleteTaskId(null);
  };

  const cancelDelete = () => {
    setDeleteTaskId(null);
  };

  return (
    <div>
      <form onSubmit={addTask}>
        <input type="text" name="task" placeholder="Введите задачу" required />
        <button type="submit">Добавить</button>
      </form>
      <ul>
        {state.tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => deleteTask(task.id)}>Удалить</button>
          </li>
        ))}
      </ul>
      {deleteTaskId && (
        <div className="modal">
          <div className="modal-content">
            <p>Вы действительно хотите удалить задачу?</p>
            <button onClick={confirmDelete}>Да</button>
            <button onClick={cancelDelete}>Нет</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
