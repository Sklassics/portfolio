import React, { useState } from "react";

const InputForm = ({ navItems, setNavItems, content, setContent }) => {
  const [newNavItem, setNewNavItem] = useState("");
  const [selectedPage, setSelectedPage] = useState(navItems[0] || "");

  const handleNavChange = (e) => setNewNavItem(e.target.value);

  const addNavItem = () => {
    if (newNavItem.trim() && !navItems.includes(newNavItem)) {
      setNavItems([...navItems, newNavItem]);
      setContent({ ...content, [newNavItem]: "New section content." });
      setNewNavItem("");
    }
  };

  const deleteNavItem = (item) => {
    const updatedNav = navItems.filter((nav) => nav !== item);
    setNavItems(updatedNav);
    setSelectedPage(updatedNav[0] || "");
  };

  const updateContent = (e) => {
    setContent({ ...content, [selectedPage]: e.target.value });
  };

  return (
    <div className="w-1/4 p-4 bg-gray-100">
      <h2 className="text-lg font-bold">Customize Menu</h2>
      <div className="flex items-center mt-2 relative">
        <input
          type="text"
          placeholder="Add New Menu Item"
          value={newNavItem}
          onChange={handleNavChange}
          className="border p-2 w-full rounded"
        />
        {newNavItem && (
          <button
            onClick={() => setNewNavItem("")}
            className="absolute right-2 text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
        )}
      </div>
      <button onClick={addNavItem} className="bg-blue-500 text-white px-4 py-2 mt-2 w-full rounded">Add</button>
      <ul className="mt-4">
        {navItems.map((item) => (
          <li key={item} className="flex justify-between items-center mt-2 border-b pb-2">
            <span
              className={`cursor-pointer ${selectedPage === item ? "font-bold" : ""}`}
              onClick={() => setSelectedPage(item)}
            >
              {item}
            </span>
            <button onClick={() => deleteNavItem(item)} className="text-red-500 ml-2">X</button>
          </li>
        ))}
      </ul>
      <h2 className="text-lg font-bold mt-6">Edit Content</h2>
      <textarea
        value={content[selectedPage] || ""}
        onChange={updateContent}
        className="w-full h-40 border p-2 mt-2 rounded"
      ></textarea>
      <button className="bg-green-500 text-white px-4 py-2 mt-4 w-full rounded">Publish</button>
    </div>
  );
};
export default InputForm