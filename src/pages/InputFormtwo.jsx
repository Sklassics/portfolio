import React from "react";

export default function InputFormTwo({ setName, setTitle, setBio, setImage }) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Edit Portfolio</h2>
      <label className="block mb-2">Name:</label>
      <input
        type="text"
        className="w-full p-2 mb-4 text-black rounded"
        onChange={(e) => setName(e.target.value)}
      />
      <label className="block mb-2">Title:</label>
      <input
        type="text"
        className="w-full p-2 mb-4 text-black rounded"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className="block mb-2">Bio:</label>
      <textarea
        className="w-full p-2 mb-4 text-black rounded"
        onChange={(e) => setBio(e.target.value)}
      ></textarea>
      <label className="block mb-2">Profile Image:</label>
      <input
        type="file"
        accept="image/*"
        className="w-full p-2 mb-4"
        onChange={handleImageChange}
      />
    </div>
  );
}
