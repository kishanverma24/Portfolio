import React from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import Hero from "../../components/hero/Hero.jsx";
import Project from "../../components/projectsComponent/ProjectComponent.jsx";
import Certificates from "../../components/certificates/Certificates.jsx";
import Skills from "../../components/skills/Skills.jsx";
import "./home.css";
import Footer from "../../components/footer/Footer.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <h3 className="mainheadings">Projects</h3>
      <Project />
      <h3 className="mainheadings">Certificates</h3>
      <Certificates />
      <h3 className="mainheadings">Skills</h3>
      <Skills/>
      <Footer/>
    </>
  );
};

export default Home;
