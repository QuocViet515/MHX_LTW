// components/Card.jsx
import React from "react";

const Card = ({ name, city, onEdit }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-full sm:w-64">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600 mb-4">{city}</p>
      <div className="flex justify-end">
        <button
          onClick={onEdit}
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-3 rounded"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Card;
