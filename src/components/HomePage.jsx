import React from "react";

export const HomePage = () => {
    return (
      <div className="min-h-screen bg-gray-50 text-center">
        <header className="flex flex-col items-center justify-center h-screen bg-cover bg-center  text-black px-6 text-shadow-lg">
          <h2 className="text-6xl font-extrabold drop-shadow-xl">Build Your Dream Portfolio</h2>
          <p className="mt-6 text-xl max-w-2xl">Showcase your skills, projects, and experience in a beautiful and interactive way.</p>
          <button className="mt-8 bg-indigo-600 px-8 py-3 rounded-full text-xl shadow-lg hover:bg-indigo-700 transition">Get Started</button>
        </header>
      </div>
    );
  };
  
  export default HomePage;