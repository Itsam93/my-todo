import React, { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

const TodoInput = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim() !== "") {
      onAdd(task);
      setTask("");
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <Input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task..."
      />
      <Button onClick={handleAdd}>Add</Button>
    </div>
  );
};

export default TodoInput;
