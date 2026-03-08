import React, { createContext, useContext } from 'react';
import { projects } from './Projects'; // Import your static data here

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  return (
    <ProjectContext.Provider value={projects}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectContext);