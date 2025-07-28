import React, { useState, useEffect } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import TotalExpense from "../components/TotalExpense";

function Home() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("expenses");
    if (stored) setExpenses(JSON.parse(stored));
  }, []);

  useEffect(() => {
    if (expenses.length === 0) {
      localStorage.removeItem("expenses");
    } else {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const updateExpense = (updated) => {
    setExpenses(expenses.map((e) => (e.id === updated.id ? updated : e)));
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">📋 Quản lý chi tiêu</h1>
        <ExpenseForm onAdd={addExpense} />
        <TotalExpense expenses={expenses} />
        <ExpenseList
          expenses={expenses}
          onDelete={deleteExpense}
          onUpdate={updateExpense}
        />
      </div>
    </div>
  );
}

export default Home;
