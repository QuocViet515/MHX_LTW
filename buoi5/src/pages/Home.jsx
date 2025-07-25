// pages/Home.jsx
import { useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [contacts, setContacts] = useState([
    { name: "Alice Johnson", city: "New York" },
    { name: "Bob Smith", city: "Los Angeles" },
    { name: "Charlie Brown", city: "Chicago" },
    { name: "David Williams", city: "Houston" },
    { name: "Emma Davis", city: "Phoenix" },
  ]);

  const [form, setForm] = useState({ name: "", city: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddContact = () => {
    if (form.name.trim() && form.city.trim()) {
      setContacts([...contacts, { name: form.name, city: form.city }]);
      setForm({ name: "", city: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-1">Contact Book</h1>
        <p className="text-gray-600 mb-6">
          Keep track of where your friends live
        </p>

        <div className="flex justify-start mb-8">
          <div className="bg-white p-4 rounded shadow flex flex-col sm:flex-row gap-2 sm:gap-4 max-w-fit">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full sm:w-auto"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full sm:w-auto"
            />
            <button
              onClick={handleAddContact}
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded px-4 py-2 whitespace-nowrap"
            >
              Add contact
            </button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {contacts.map((c, idx) => (
            <Card
              key={idx}
              name={c.name}
              city={c.city}
              onEdit={() => alert(`Editing ${c.name}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
