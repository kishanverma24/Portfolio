import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../../components/navbar/Navbar.jsx";
import Footer from "../../../components/footer/Footer.jsx";
import "./project2.css";

const ProductDetails = () => {
  return (
    <>
      <Navbar />
      <div className="singleProjectContainer">
        <h1 className="projectTitle">Amazon's Landing Page</h1>
        <div className="projectImgContainer">
          <img src="/projects/project2/project2a.jpg" alt="" />
          <img src="/projects/project2/project2 cover.jpg" alt="" />
          <img src="/projects/project2/project2b.jpg" alt="" />
          <img src="/projects/project2/project2c.jpg" alt="" />
        </div>
        <div className="projectContentContainer">
          <h3>1. Overview:</h3>
          <p>
            {" "}
            I created a landing page for an Amazon-inspired website using React,
            focusing on creating a dynamic and engaging user interface. React is
            a JavaScript library for building user interfaces, known for its
            efficiency and component-based architecture. The goal was to
            replicate the look and feel of a typical Amazon landing page,
            showcasing products and features in a visually appealing manner.{" "}
          </p>
          <h3>2. Key Features:</h3>
          <p>
            <span
              style={{ fontWeight: "bolder", fontSize: "14px", color: "brown" }}
            >
              React Components:
            </span>{" "}
            Each section of the landing page is built as a React component,
            allowing for modularity and reusability of code.
          </p>
          <p>
            <span
              style={{ fontWeight: "bolder", fontSize: "14px", color: "brown" }}
            >
              CSS Styling:
            </span>{" "}
            Custom styling using CSS or CSS-in-JS libraries like Styled
            Components to achieve a polished and responsive design.
          </p>
          <p>
            <span
              style={{ fontWeight: "bolder", fontSize: "14px", color: "brown" }}
            >
              Static Data Rendering:
            </span>{" "}
            Products and content are statically rendered for demonstration
            purposes, though in a real-world scenario, this data would be
            fetched dynamically from a backend API.
          </p>
          <p>
            <span
              style={{ fontWeight: "bolder", fontSize: "14px", color: "brown" }}
            >
              Responsive Design:
            </span>{" "}
            The landing page is designed to be responsive, ensuring it looks and
            functions well across various devices and screen sizes.
          </p>
          <p>
            <span
              style={{ fontWeight: "bolder", fontSize: "14px", color: "brown" }}
            >
              Navigation and Interaction:
            </span>{" "}
            Implementing interactive elements such as hover effects, clickable
            links, and possibly carousel sliders to showcase multiple products.
          </p>
          <h3>3. Future Enhancements:</h3>

          <p>
            <span
              style={{ fontWeight: "bolder", fontSize: "14px", color: "brown" }}
            >
              Integration with Backend:
            </span>{" "}
            Implementing backend services to fetch real product data, handle
            user authentication, and manage transactions.
          </p>
          <p>
            <span
              style={{ fontWeight: "bolder", fontSize: "14px", color: "brown" }}
            >
              Dynamic Content:
            </span>{" "}
            Making the page truly dynamic by integrating features like product
            filtering, sorting, and user reviews.
          </p>
          <p>
            <span
              style={{ fontWeight: "bolder", fontSize: "14px", color: "brown" }}
            >
              Performance Optimization:
            </span>{" "}
            Improving load times and overall performance by optimizing code and
            assets.
          </p>
          <h3>4. Source code and Live Link</h3>
          <p>
            <span
              style={{ fontWeight: "bolder", fontSize: "14px", color: "brown" }}
            >
              {" "}
              Source Code:{" "}
            </span>{" "}
            <a
              style={{ textDecoration: "none", fontWeight: "bold" }}
              href="https://github.com/kishanverma24/Amazon_Landing_Page"
            >
              Github Repo Link
            </a>
          </p>
          <p>
            <span
              style={{ fontWeight: "bolder", fontSize: "14px", color: "brown" }}
            >
              {" "}
              Demo Video:{" "}
            </span>{" "}
            <a
              style={{ textDecoration: "none", fontWeight: "bold" }}
              href="https://drive.google.com/file/d/1GJ_WhQr3Q4tShyvRRRVfiVqxQtHavNiJ/view?usp=drive_link"
            >
              View
            </a>
          </p>
        </div>
      </div>{" "}
      <Footer />
    </>
  );
};

export default ProductDetails;
