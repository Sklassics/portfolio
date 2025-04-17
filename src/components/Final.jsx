import React from 'react'
import Navbar from './Navbar'
import HomePage from './HomePage'
import PortfolioTemplate from './PortfolioTemplate'


export const Final = () => {
  return (
   <>
<Navbar/>
<HomePage/>
   </>
  )
}

export default Final






























// import React, { useState } from "react";
// import { Edit, X } from "lucide-react";
// import ContactSection from "./ContactSection";
// import MediaSection from "./MediaSection";
// import ProjectsSection from "./ProjectsSection";
// import ResumeSection from "./ResumeSection";
// import ResourcesSection from "./ResourcesSection";
// import InternshipsSection from "./InternshipsSection";
// import InputFormTwo from "./InputFormtwo";

// export default function PortfolioTwo() {
//   const [selectedSection, setSelectedSection] = useState("Home");
//   const [showInputForm, setShowInputForm] = useState(false);
//   const [sections, setSections] = useState([
//     "Home",
//     "Contact",
//     "Media",
//     "Projects",
//     "Resume",
//     "Resources",
//   ]);

//   return (
//     <div className="flex flex-col h-screen bg-blue-700 text-white p-8 relative">
//       {/* Navbar */}
//       <nav className="w-full flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Kayla Padilla</h1>
//         <div className="flex space-x-4">
//           {sections.map((section) => (
//             <button
//               key={section}
//               className="text-white hover:underline"
//               onClick={() => setSelectedSection(section)}
//             >
//               {section}
//             </button>
//           ))}
//         </div>
//       </nav>
      
//       {/* Portfolio Display */}
//       <div className="flex items-center mt-8">
//         <div className="w-1/4">
//           <img src="/profile.jpg" alt="Profile" className="rounded-lg" />
//         </div>
//         <div className="w-3/4 pl-8">
//           {selectedSection === "Home" && (
//             <p className="text-2xl font-semibold">
//               Graduate of USC’s Master of Science in Entrepreneurship and Innovation program and UPenn alum, passionate about a career in tech, sports, and music.
//             </p>
//           )}
//           {selectedSection === "Contact" && <ContactSection />}
//           {selectedSection === "Media" && <MediaSection />}
//           {selectedSection === "Projects" && <ProjectsSection />}
//           {selectedSection === "Resume" && <ResumeSection />}
//           {selectedSection === "Resources" && <ResourcesSection />}
//           {selectedSection === "Internships" && <InternshipsSection />}
//         </div>
//       </div>
      
//       {/* Edit Button */}
//       <button 
//         className="absolute bottom-4 right-4 bg-gray-900 text-white p-3 rounded-full shadow-lg" 
//         onClick={() => setShowInputForm(true)}
//       >
//         <Edit size={24} />
//       </button>
      
//       {showInputForm && (
//         <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white text-black p-6 rounded-lg relative w-1/3">
//             <button className="absolute top-2 right-2" onClick={() => setShowInputForm(false)}>
//               <X size={20} />
//             </button>
//             <InputFormTwo section={selectedSection} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
