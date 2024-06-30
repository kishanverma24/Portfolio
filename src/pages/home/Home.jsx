import React from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import Hero from "../../components/hero/Hero.jsx";
import Project from "../../components/projects/Project.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <h3>Projects</h3>
      <Project />
    </>
  );
};

export default Home;
