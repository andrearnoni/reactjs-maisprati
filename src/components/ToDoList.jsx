import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all"); // Estado para o filtro

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />
      <button onClick={addTask}>Adicionar</button>
      <div>
        <label>
          <input
            type="radio"
            value="all"
            checked={filter === "all"}
            onChange={() => setFilter("all")}
          />
          Todas
        </label>
        <label>
          <input
            type="radio"
            value="completed"
            checked={filter === "completed"}
            onChange={() => setFilter("completed")}
          />
          Concluídas
        </label>
        <label>
          <input
            type="radio"
            value="pending"
            checked={filter === "pending"}
            onChange={() => setFilter("pending")}
          />
          Pendentes
        </label>
      </div>
      <ul>
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
            <button onClick={() => toggleTaskCompletion(index)}>
              {task.completed ? "Desmarcar" : "Concluir"}
            </button>
            <button onClick={() => removeTask(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
