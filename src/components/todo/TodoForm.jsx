// TodoForm.jsx
import React, { useState } from "react";

const TodoForm = ({ todos, onAdd }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    const duplicate = todos.some(
      (todo) => todo.text.toLowerCase() === task.trim().toLowerCase()
    );

    if (duplicate) {
      alert("Task already in the list");
    } else {
      onAdd(task.trim());
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-2">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task..."
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
