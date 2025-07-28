import React from "react";

export default function TotalExpense({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  return (
    <div className="text-lg font-medium mb-4">
      Tổng chi tiêu: <span className="text-red-600">{total.toLocaleString()} VND</span>
    </div>
  );
}
