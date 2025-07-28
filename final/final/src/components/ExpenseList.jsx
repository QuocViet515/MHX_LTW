import React, { useState } from "react";
import { FaTrash, FaEdit, FaSave } from "react-icons/fa";

export default function ExpenseList({ expenses, onDelete, onUpdate }) {
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", amount: "", date: "" });

  const startEdit = (expense) => {
    setEditId(expense.id);
    setEditForm({
      title: expense.title,
      amount: expense.amount,
      date: expense.date,
    });
  };

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onUpdate({ ...editForm, id: editId, amount: parseFloat(editForm.amount) });
    setEditId(null);
  };

  return (
    <div className="space-y-4">
      {expenses.map((e) => (
        <div key={e.id} className="p-4 border rounded flex justify-between items-center">
          {editId === e.id ? (
            <div className="flex-1 space-y-1">
              <input className="border p-1 w-full" name="title" value={editForm.title} onChange={handleChange} />
              <input className="border p-1 w-full" name="amount" type="number" value={editForm.amount} onChange={handleChange} />
              <input className="border p-1 w-full" name="date" type="date" value={editForm.date} onChange={handleChange} />
            </div>
          ) : (
            <div className="flex-1">
              <p className="font-semibold">{e.title}</p>
              <p>{e.amount.toLocaleString()} VND - {e.date}</p>
            </div>
          )}
          <div className="ml-4 flex gap-2">
            {editId === e.id ? (
              <button onClick={handleSave} className="text-green-500 hover:text-green-700"><FaSave /></button>
            ) : (
              <button onClick={() => startEdit(e)} className="text-yellow-500 hover:text-yellow-700"><FaEdit /></button>
            )}
            <button onClick={() => onDelete(e.id)} className="text-red-500 hover:text-red-700"><FaTrash /></button>
          </div>
        </div>
      ))}
    </div>
  );
}
