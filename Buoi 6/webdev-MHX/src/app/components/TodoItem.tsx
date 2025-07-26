"use client";

import { useState } from "react";
import { Task } from "../page";

interface Props {
  task: Task;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  updateTask: (id: number, title: string) => void;
}

const TodoItem = ({ task, toggleTask, deleteTask, updateTask }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => {
    if (editedTitle.trim()) {
      updateTask(task.id, editedTitle.trim());
      setIsEditing(false);
    }
  };

  return (
    <li className="bg-white p-4 rounded shadow flex justify-between items-center">
      <div className="flex items-center gap-4 w-full">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
            className="flex-grow border-b border-gray-300 px-2 py-1 outline-none text-gray-800 placeholder-gray-500"
          />
        ) : (
          <span
  className={`flex-grow ${
    task.completed
      ? "line-through text-gray-400 font-medium"
      : "text-gray-800 font-medium"
  }`}
>
  {task.title}
</span>

        )}
      </div>

      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="text-green-600 hover:text-green-800"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="text-blue-600 hover:text-blue-800"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
