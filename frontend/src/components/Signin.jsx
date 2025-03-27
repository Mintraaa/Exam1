import { useState } from "react";
import axios from "axios";

export default function Signin() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/signup", form);
      alert("Sign up successful!");
    } catch (err) {
      alert("Error signing up");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-600">Sign Up</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6 w-80">
        <input
          className="border p-2 rounded"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          className="border p-2 rounded"
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          className="border p-2 rounded"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
