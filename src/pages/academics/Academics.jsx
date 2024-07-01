import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Certificates from "../../components/certificates/Certificates";
import Footer from "../../components/footer/Footer";

const Academics = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "45px", height: "100vh" }}>
        <Certificates />
      </div>{" "}
      <Footer />
    </>
  );
};

export default Academics;
