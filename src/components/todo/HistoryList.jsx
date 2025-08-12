import React from "react";
import TodoItem from "../todo/TodoItem";

const HistoryList = ({ history, onDelete }) => {
  return (
    <div className="mt-6">
      {history.length === 0 ? (
        <p className="text-white-400 text-center">No completed tasks yet.</p>
      ) : (
        history.map((task) => (
          <TodoItem
            key={task.id}
            todo={task}
            actionLabel="Delete"
            onAction={() => onDelete(task.id)}
          />
        ))
      )}
    </div>
  );
};

export default HistoryList;
