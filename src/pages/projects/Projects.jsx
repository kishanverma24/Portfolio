import React from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import ProjectComponent from "../../components/projectsComponent/ProjectComponent.jsx";
import Footer from "../../components/footer/Footer.jsx";
const Projects = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "45px", height: "100vh" }}>
        <ProjectComponent />
      </div>
      <Footer />
    </>
  );
};

export default Projects;
