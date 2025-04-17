import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const templates = [
  { 
    id: 1, 
    name: "Minimalist", 
    price: "₹499", 
    gst: "₹89.82",
    total: "₹588.82",
    image: "https://www.unsell.design/wp-content/uploads/2020/10/a98d94b0-blue-minimal-portfolio-template-preview_01.jpg"
  }
];

const TemplateSelection = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const navigate = useNavigate();

  const handleProceed = () => {
    if (selectedTemplate) {
      navigate("/portfolio", { state: { template: selectedTemplate } });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Select Your Portfolio Template</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all shadow-lg hover:shadow-xl ${
              selectedTemplate?.id === template.id ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => setSelectedTemplate(template)}
          >
            <img 
              src={template.image} 
              alt={template.name} 
              className="w-full h-40 object-cover rounded-md" 
            />
            <h2 className="text-xl font-semibold mt-4">{template.name}</h2>
            <p className="text-lg text-gray-700">{template.price}</p>
          </div>
        ))}
      </div>
      
      {selectedTemplate && (
        <div className="mt-8 p-6 bg-gray-100 rounded-lg text-center shadow-md">
          <h2 className="text-2xl font-bold">Selected: {selectedTemplate.name}</h2>
          <p className="text-lg">Price: {selectedTemplate.price}</p>
          <p className="text-gray-600">GST: {selectedTemplate.gst}</p>
          <p className="text-gray-900 font-semibold">Total: {selectedTemplate.total}</p>
          <button 
            onClick={handleProceed}
            className="mt-4 bg-blue-500 px-6 py-2 rounded-lg text-white hover:bg-blue-600 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default TemplateSelection;
