import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Skills from './pages/Skills';


import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      {loading ? (  
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;