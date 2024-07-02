import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <Navbar />
      <Navbar />
      <div className="mainContactContainer">
        <div className="contactContainer">
          <h1>Contact Me</h1>

          <h2>
            <img src="/contact/linkedin.jpg" alt="linkedin logo" />{" "}
            Linked In: "www.linkedin.com/in/kishan-verma-00478a310"{" "}
            <a href="www.linkedin.com/in/kishan-verma-00478a310">Connect</a>{" "}
          </h2>
          <h2>
            <img src="/contact/github.png" alt="github logo" /> Github
            Account: "https://github.com/kishanverma24"{" "}
            <a href="https://github.com/kishanverma24">View</a>{" "}
          </h2>
          <h2>
            <img
              style={{ marginRight: "-2px" }}
              src="/contact/gmail2.webp"
              alt="gmail logo"
            />{" "}
            Email Id: "kishanverma9151@gmail.com"{" "}
          </h2>
          <h2>
            <img src="/contact/contact.jpg" alt="contact logo" /> Contact
            & WhatsApp no: 9151634126{" "}
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
};
<div className="contactContainer">
  <h1>Contact Me</h1>
</div>;
export default Contact;
