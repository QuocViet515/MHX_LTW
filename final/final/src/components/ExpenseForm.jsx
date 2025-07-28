import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function ExpenseForm({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    date: new Date().toISOString().slice(0, 10),
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.amount) return;
    onAdd({
      ...form,
      amount: parseFloat(form.amount),
      id: Date.now(),
    });
    setForm({ title: "", amount: "", date: new Date().toISOString().slice(0, 10) });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex flex-col gap-2">
        <input
          className="border p-2 rounded"
          placeholder="Tên khoản chi (vd: Ăn sáng)"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          className="border p-2 rounded"
          placeholder="Số tiền (vd: 30000)"
          name="amount"
          type="number"
          value={form.amount}
          onChange={handleChange}
        />
        <input
          className="border p-2 rounded"
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded p-2 flex items-center justify-center"
        >
          <FaPlus className="mr-1" /> Thêm
        </button>
      </div>
    </form>
  );
}
