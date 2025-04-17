import React, { useState } from "react";

const Research = () => {
  const [researchTitle, setResearchTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [showInputs, setShowInputs] = useState(true); // Toggle input section

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="h-screen flex">
      {/* Left Section - Collapsible Input Fields (1/4 Width) */}
      <div
        className={`transition-all duration-300 bg-gray-100 shadow-md ${
          showInputs ? "w-1/4 p-6" : "w-0 overflow-hidden"
        }`}
      >
        {showInputs && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Add Research</h2>

            {/* Research Title Input */}
            <div className="mb-4">
              <label className="block text-lg font-semibold">Title:</label>
              <input
                type="text"
                value={researchTitle}
                onChange={(e) => setResearchTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter title..."
              />
            </div>

            {/* Research Description Input */}
            <div className="mb-4">
              <label className="block text-lg font-semibold">Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1 h-28"
                placeholder="Enter description..."
              />
            </div>

            {/* Image Upload Section */}
            <div className="mb-4">
              <label className="block text-lg font-semibold">Upload Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="border p-2 rounded w-full mt-1"
              />
            </div>
          </div>
        )}
      </div>

      {/* Right Section - Research Display (Expands to Full Page when Inputs are Closed) */}
      <div
        className={`transition-all duration-300 p-10 ${
          showInputs ? "w-3/4" : "w-full"
        } flex flex-col items-center justify-center`}
      >
        <h1 className="text-4xl font-bold mb-6 text-center">Research</h1>

        {researchTitle && (
          <div className="text-center">
            <h2 className="text-2xl font-semibold">{researchTitle}</h2>
            <p className="text-gray-700 mt-2">{description}</p>
          </div>
        )}

        {image && (
          <div className="mt-6">
            <img src={image} alt="Research" className="w-full max-w-lg rounded shadow-lg" />
            <p className="mt-4 text-gray-700 italic">
              *Figure by the PHANGS collaboration showing NGC 1566 color composites using HST and JWST.*
            </p>
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setShowInputs(!showInputs)}
        className="absolute left-4 top-24 px-3 py-2 bg-blue-600 text-white rounded shadow-lg"
      >
        {showInputs ? "Close Inputs" : "Open Inputs"}
      </button>
    </div>
  );
};

export default Research;
