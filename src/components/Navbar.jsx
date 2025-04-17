import { useNavigate } from "react-router-dom";
import React from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-purple-700 p-5 flex justify-between items-center text-white shadow-lg">
      <h1 className="text-3xl font-extrabold tracking-wide">Portfolio</h1>
      <div className="space-x-6 text-lg">
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <button onClick={() => navigate('/login')} className="bg-white text-indigo-600 px-5 py-2 rounded-full shadow-md hover:bg-gray-200">Login / Register</button>
      </div>
    </nav>
  );
};
export default Navbar