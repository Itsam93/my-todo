import Container from "./components/layouts/Container";
import Header from "./components/layouts/Header";
import TodoInput from "./components/todo/TodoInput";
import TodoList from "./components/todo/TodoList";
import HistoryList from "./components/todo/HistoryList";
import useTodos from "./hooks/useTodos";

export default function App() {
  const { todos, history, addTodo, completeTodo, deleteFromHistory } =
    useTodos();

  const handleAddTodo = (newTask) => {
    const exists = todos.some(
      (todo) => todo.text.toLowerCase() === newTask.toLowerCase()
    );
    if (exists) {
      alert("Task already in the list");
      return;
    }
    addTodo(newTask);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <Container>
        <Header />
        <div className="mt-8 flex flex-col md:flex-row gap-6">
          {/* Left side */}
          <main className="flex-grow md:w-3/4">
            <TodoInput onAdd={addTodo} />
            <TodoList todos={todos} onComplete={completeTodo} />
          </main>

          {/* Right side */}
          <aside className="md:w-2/4 p-4 bg-white/40 backdrop-blur-md rounded-md shadow-md overflow-y-auto max-h-[80vh]">
            <h2 className="text-xl font-semibold mb-4">Completed Tasks</h2>
            <HistoryList history={history} onDelete={deleteFromHistory} />
          </aside>
        </div>
      </Container>
    </div>
  );
}
