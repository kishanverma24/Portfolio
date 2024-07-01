import React, { useContext, useEffect, useState } from "react";
import "./academicsComponent.css";

const Academics = () => {
  return (
    <>
      <div className="academicsContainer">
        <h1 className="academicsTitle">Academics and Certifications</h1>
        <div className="academicsContentContainer">
          <h2>Certifications</h2>
          <h3>1. Fullstack Web Development Bootcamp, Udemy </h3>
          <p>
            <span>Institution Name:</span> Udemy
          </p>
          <p>
            <span>Year:</span> September 2023 - April 2024
          </p>
          <p>
            <span>Technical skills Gained:</span> Html5, Css3, Javascript, ES6,
            React Js, Context Api, Redux, Node Js, Express Js, Jwt, Bootstrap,
            jQuery, Git and Github, Restful Api Development, Api Testing, MySql,
            MongoDb, Authentication and Authorization, Postman.
          </p>
          <p>
            <span>Certificate Link:</span>
            <a
              style={{ textDecoration: "none", fontWeight: "bold" }}
              href="https://drive.google.com/file/d/14k1Qw46tQ-d8vrbKHVTDvb33ul4SFBF-/view"
            >
              {" "}
              View
            </a>
          </p>
          <h3>2. Summer Training on Embedded System and Robotics </h3>
          <p>
            <span>Institution Name:</span> SoftPro India Computer Technologies
            Pvt.Ltd.
          </p>
          <p>
            <span>Year:</span> July 2022 - August 2022
          </p>
          <p>
            <span>Technical skills Gained:</span> Embedded C, Arduino Uno and
            its coding, Microprocessor, Basic Sensors, Embedded Systems{" "}
          </p>
          <p>
            <span>Certificate Link:</span>
            <a
              style={{ textDecoration: "none", fontWeight: "bold" }}
              href="https://drive.google.com/file/d/14Va_bZradIJtuYSh1SnGvTzKvfVKGYvn/view"
            >
              {" "}
              View
            </a>
          </p>
          <h3>3. Diploma in Computer Application</h3>
          <p>
            <span>Institution Name:</span> Rama Technical Institute
          </p>
          <p>
            <span>Year:</span> Dec 2017 - May 2018
          </p>
          <p>
            <span>Technical skills Gained:</span> C programming, Ms. Office, Ms.
            Power Point, Ms. Excel, Ms. Word, Tally ERP9{" "}
          </p>
          <p>
            <span>Certificate Link:</span>
            <a
              style={{ textDecoration: "none", fontWeight: "bold" }}
              href="https://drive.google.com/file/d/14ZJ8L3K8IWAzSBR_L15JSHYy7kXsrOww/view"
            >
              {" "}
              View
            </a>
          </p>
          <h2>Academics</h2>
          <h3>1. Diploma in Electronics Engineering</h3>
          <p>
            <span>Institution Name:</span> Government Polytechnic Mau, Uttar
            Pradesh, India
          </p>
          <p>
            <span>Year:</span> August 2020 - September 2023
          </p>
          <p>
            <span>Grade:</span> 72%
          </p>
          <p>
            <span>Technical skills Gained:</span> Enginnering, Electronics, C
            language, Communication Skills, Project Management, Arduino,
            Electronic Sensors,  Microprocessor.
          </p>
          <p>
            <span>Link:</span>
            <a
              style={{ textDecoration: "none", fontWeight: "bold" }}
              href="https://drive.google.com/file/d/14luEzqlqNy0D3F9QT_DEptpvvF1K6pIt/view"
            >
              {" "}
              Show Result
            </a>
          </p>
          <h3>2. Intermediate</h3>
          <p>
            <span>Institution Name:</span> Baba Raghav Das Intermediate College
            (" BRD K Inter Coollege ") ,Deoria UP India
          </p>
          <p>
            <span>Passout Year:</span> 2020
          </p>
          <p>
            <span>Grade:</span> 63%
          </p>
        </div>
      </div>
    </>
  );
};

export default Academics;
