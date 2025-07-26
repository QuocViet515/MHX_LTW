"use client";

import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks((prev) => [
        ...prev,
        { id: Date.now(), title: newTask.trim(), completed: false },
      ]);
      setNewTask("");
    }
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const updateTask = (id: number, newTitle: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, title: newTitle } : task))
    );
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("tasks");
      if (stored) {
        setTasks(JSON.parse(stored));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
      <div className="max-w-xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-indigo-700">
          📝 Todo App
        </h1>

        <div className="flex gap-2 shadow-md rounded overflow-hidden">
          <input
            type="text"
            placeholder="Add a new task..."
            className="flex-grow px-4 py-2 outline-none border border-gray-300 text-gray-700"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />

          <button
            className="bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700"
            onClick={addTask}
          >
            Add
          </button>
        </div>

        <TodoList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      </div>
    </div>
  );
}
