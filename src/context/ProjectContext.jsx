// import React, { createContext, useContext } from 'react';
// import quizImg from '../assets/quiz.jpg';
// import umiyatravels from "../assets/umiyatravels.png";
// import hospital from  "../assets/hospital.png";


// const ProjectContext = createContext();

// export const ProjectProvider = ({ children }) => {
//   const projects = [
//     { 
//       id: 1, 
//       title: "Quiz Application", 
//       image: quizImg, 
//       desc: "Quiz app.", 
//       github: "https://github.com/fenil313/Quiz-app", 
//       demo: "https://quiz-app-one-mu-17.vercel.app/" 
//     },
//     { 
//       id: 2, 
//       title: "Umiya travels", 
//       image: umiyatravels, 
//       desc: "Tour realated website.", 
//       github: "https://github.com/fenil313/tourandtravel", 
//       demo: "https://tourandtravel-7wtx.vercel.app/" 
//     },

//      { 
//       id: 3, 
//       title: "Hospital", 
//       image: "hospital", 
//       desc: "Hospital website.", 
//       github: "https://github.com/fenil313/hospital", 
//       demo: "https://hospital-one-inky.vercel.app/" 
//     },
//     // ... add your other projects here
//   ];

//   return (
//     <ProjectContext.Provider value={projects}>
//       {children}
//     </ProjectContext.Provider>
//   );
// };

// export const useProjects = () => useContext(ProjectContext);


import React, { createContext, useContext } from 'react';
import quizImg from '../assets/quiz.jpg';
import umiyatravels from "../assets/umiyatravels.png";
import hospitalImg from "../assets/hospital.png"; // Rename import to avoid conflict
import racipefinder from "../assets/racipefinder.png"; // Rename import to avoid conflict


const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const projects = [
    { 
      id: 1, 
      title: "Quiz Application", 
      image: quizImg, 
      desc: "Quiz app.", 
      github: "https://github.com/fenil313/Quiz-app", 
      demo: "https://quiz-app-one-mu-17.vercel.app/" 
    },
    { 
      id: 2, 
      title: "Umiya travels", 
      image: umiyatravels, 
      desc: "Tour related website.", 
      github: "https://github.com/fenil313/tourandtravel", 
      demo: "https://tourandtravel-7wtx.vercel.app/" 
    },
    { 
      id: 3, 
      title: "Hospital", 
      image: hospitalImg, // Use the imported variable, not the string "hospital"
      desc: "Hospital website.", 
      github: "https://github.com/fenil313/hospital", 
      demo: "https://hospital-one-inky.vercel.app/" 
    },
    { 
      id: 4, 
      title: "racipefinder", 
      image: racipefinder, // Use the imported variable, not the string "hospital"
      desc: "Racipe finder website.", 
      github: "https://github.com/fenil313/food-api", 
      demo: "https://food-api-phi.vercel.app/" 
    }
  ];

  return (
    <ProjectContext.Provider value={projects}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectContext);