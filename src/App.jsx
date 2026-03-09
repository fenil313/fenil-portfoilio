// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Navbar } from './components/Navbar';
// import Home from './pages/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Education from './pages/Education';
// import Contact from './pages/Contact';
// import Skills from './pages/Skills';


// import Loader from './components/Loader';

// function App() {
//   const [loading, setLoading] = useState(true);

//   return (
//     <div className="bg-slate-950 min-h-screen text-white">
//       {loading ? (  
//         <Loader onComplete={() => setLoading(false)} />
//       ) : (
//         <BrowserRouter>
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/Projects" element={<Projects />} />
//             <Route path="/Skills" element={<Skills />} />
//             <Route path="/Education" element={<Education />} />
//             <Route path="/Contact" element={<Contact />} />
//           </Routes>
//         </BrowserRouter>
//       )}
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import ResumePage from './pages/ResumePage';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Loader from './components/Loader';
import { ProjectProvider } from './context/ProjectContext'; // Import the provider

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      {loading ? (  
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <ProjectProvider> {/* Wrap everything that needs project data */}
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} /> {/* Standardized to lowercase */}
              <Route path="/skills" element={<Skills />} />
              <Route path="/education" element={<Education />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/contact" element={<Contact />} />

            </Routes>
            <Footer />
          </BrowserRouter>
        </ProjectProvider>
      )}
    </div>
  );
}

export default App;