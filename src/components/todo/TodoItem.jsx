import React from "react";

const TodoItem = ({ todo, actionLabel, onAction }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <span
        className={`${
          todo.status === "completed" ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={onAction}
        className={`px-3 py-1 rounded ${
          actionLabel === "Complete"
            ? "bg-green-500 text-white hover:bg-green-600"
            : "bg-red-500 text-white hover:bg-red-600"
        }`}
      >
        {actionLabel}
      </button>
    </div>
  );
};

export default TodoItem;
