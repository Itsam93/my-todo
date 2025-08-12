import { useState } from "react";

export default function useTodos() {
  const [todos, setTodos] = useState([]);
  const [history, setHistory] = useState([]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    const newTodo = { id: Date.now(), text, status: "pending" };
    setTodos((prev) => [...prev, newTodo]);
  };

  const completeTodo = (id) => {
    setTodos((prevTodos) => {
      const taskToComplete = prevTodos.find((todo) => todo.id === id);
      if (!taskToComplete) return prevTodos;

      // Add to history outside setTodos updater
      setHistory((prevHistory) => {
        // Prevent duplication in history
        if (prevHistory.some((task) => task.id === id)) {
          return prevHistory;
        }
        return [...prevHistory, { ...taskToComplete, status: "completed" }];
      });

      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const deleteFromHistory = (id) => {
    setHistory((prev) => prev.filter((task) => task.id !== id));
  };

  return {
    todos,
    history,
    addTodo,
    completeTodo,
    deleteFromHistory,
  };
}
