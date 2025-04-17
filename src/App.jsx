import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';
import Final from './components/Final';
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import TemplateSelection from './components/TemplateSelection';
import PortfolioTemplate from './components/PortfolioTemplate';
import Research from './components/Research';
// import PortfolioTemplatetwo from './pages/Portfoliotwo';
import InputFormtwo from './pages/InputFormtwo';
import ContactSection from './pages/ContactSection';
import InternshipsSection from './pages/InternshipsSection';
import MediaSection from './pages/MediaSection';
import ProjectsSection from './pages/ProjectsSection';
import ResourcesSection from './pages/ResourcesSection';
import ResumeSection from './pages/ResumeSection';
import Portfoliofinal from './components/Portfoliofinal';

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Final />} />
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Route for /temp */}
        <Route path="/temp" element={isAuthenticated ? <TemplateSelection /> : <Navigate to="/login" />} />
        <Route path="/portfolio" element={<PortfolioTemplate />} />

        <Route path="/res" element={<Research />} />
        <Route path="/published" element={<Portfoliofinal />} />





{/* portfoliotwo */}
{/* <Route path="/portfoliotwo" element={<PortfolioTemplatetwo />} /> */}

<Route path="/input" element={<InputFormtwo />} />

<Route path="/contact" element={<ContactSection />} />
<Route path="/internship" element={<InternshipsSection />} />
<Route path="/media" element={<MediaSection />} />
<Route path="/projects" element={<ProjectsSection />} />
<Route path="/resources" element={<ResourcesSection />} />
<Route path="/resume" element={<ResumeSection />} />
      </Routes>
    </Router>
  );
};

export default App;
