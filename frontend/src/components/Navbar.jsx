import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">NPA</h1>
      <div className="flex gap-6">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/signin" className="hover:underline">
          Sign Up
        </Link>
        <Link to="/login" className="hover:underline">
          Login
        </Link>
      </div>
    </nav>
  );
}
