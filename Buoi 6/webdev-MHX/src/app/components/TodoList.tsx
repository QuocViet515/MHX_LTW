"use client";

import { Task } from "../page";
import TodoItem from "./TodoItem";

interface Props {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  updateTask: (id: number, title: string) => void;
}

const TodoList = ({ tasks, toggleTask, deleteTask, updateTask }: Props) => {
  return (
    <ul className="space-y-3">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-400 italic">No tasks yet</p>
      ) : (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))
      )}
    </ul>
  );
};

export default TodoList;
