import React from "react";
import TodoItem from "../todo/TodoItem";

const TodoList = ({ todos, onComplete }) => {
  return (
    <>
      {todos.length === 0 ? (
        <p className="text-white font-bold text-center">
          No pending tasks. Add one above.
        </p>
      ) : (
        <ol className="list-decimal pl-5">
          {todos.map((todo, index) => (
            <li key={todo.id}>
              <TodoItem
                todo={todo}
                actionLabel="Complete"
                onAction={() => onComplete(todo.id)}
              />
            </li>
          ))}
        </ol>
      )}
    </>
  );
};

export default TodoList;
