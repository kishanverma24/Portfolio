import React from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import ProjectComponent from "../../components/projectsComponent/ProjectComponent.jsx";
import Footer from "../../components/footer/Footer.jsx";
import "./projects.css";
const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="projectsContainer" >
        <ProjectComponent />
      </div>
      <Footer />
    </>
  );
};

export default Projects;
