import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import AcademicsComponent from "../../components/academicsComponent/AcademicsComponent.jsx";
const Academics = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "45px" }}>
        <AcademicsComponent />
      </div>{" "}
      <Footer />
    </>
  );
};

export default Academics;
