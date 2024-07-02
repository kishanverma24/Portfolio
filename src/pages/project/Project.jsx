import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import "./project.css";

const ProductDetails = () => {
  return (
    <>
      <Navbar />
      <div className="singleProjectContainer">
        <h1 className="projectTitle">Footwear Store</h1>
        <div className="projectImgContainer">
          <img src="/public/projects/project1/Screenshot (136).png" alt="" />
          <img src="/public/projects/project1/Screenshot (139).png" alt="" />
          <img src="/public/projects/project1/Screenshot (143).png" alt="" />
          <img src="/public/projects/project1/Screenshot (142).png" alt="" />
          <img src="/public/projects/project1/Screenshot (144).png" alt="" />
        </div>
        <div className="projectContentContainer">
          <h3>1. Overview:</h3>
          <p>
            {" "}
            A React JS-based frontend project that allows users to buy and sell
            footwear of all brands in one place. The platform features a
            shopping cart system, checkout functionality, and an orders page.
          </p>
          <h3>2. Key Features:</h3>
          <p>
            <span
              style={{ fontWeight: "bolder", fontSize: "14px", color: "brown" }}
            >
              Multi-brand Footwear Marketplace:
            </span>
            Users can browse and purchase footwear from various brands in a
            single platform.
          </p>
          <p>
            <span
              style={{ fontWeight: "bolder", fontSize: "14px", color: "brown" }}
            >
              Shopping Cart System:
            </span>
            Users can add/remove items from their cart, update quantities, and
            view subtotal.
          </p>
          <p>
            <span
              style={{ fontWeight: "bolder", fontSize: "14px", color: "brown" }}
            >
              Checkout Functionality:
            </span>
            Secure checkout process with order summary and payment options.
          </p>
          <p>
            <span
              style={{ fontWeight: "bolder", fontSize: "14px", color: "brown" }}
            >
              Orders Page:
            </span>
            Users can view their order history and track their orders.
          </p>
          <p>
            <span
              style={{ fontWeight: "bolder", fontSize: "14px", color: "brown" }}
            >
              Local Storage Integration:
            </span>
            Cart data is persisted across page refreshes and navigation using
            local storage.
          </p>
          <h3>3. Technical Stack:</h3>
          <p>
            <span
              style={{ fontWeight: "bolder", fontSize: "14px", color: "brown" }}
            >
              Frontend Framework:{" "}
            </span>{" "}
            React JS
          </p>
          <p>
            <span
              style={{ fontWeight: "bolder", fontSize: "14px", color: "brown" }}
            >
              Build Tool:{" "}
            </span>{" "}
            Vite
          </p>
          <p>
            <span
              style={{ fontWeight: "bolder", fontSize: "14px", color: "brown" }}
            >
              Styling:{" "}
            </span>{" "}
            CSS
          </p>
          <p>
            <span
              style={{ fontWeight: "bolder", fontSize: "14px", color: "brown" }}
            >
              State Management:{" "}
            </span>{" "}
            useState and useContext for managing cart data and user
            interactions.
          </p>
          <h3>4. Key Components:</h3>
          <p>
            <span
              style={{ fontWeight: "bolder", fontSize: "14px", color: "brown" }}
            >
              CartOverlay:{" "}
            </span>{" "}
            Displays cart items, allows users to manage their cart, and provides
            functions to remove items and update quantities.
          </p>
          <p>
            <span
              style={{ fontWeight: "bolder", fontSize: "14px", color: "brown" }}
            >
              ShoppingCartProvider:{" "}
            </span>{" "}
            ShoppingCartProvider: Provides the context for the shopping cart
            functionality, wrapping components that need access to cart data.
          </p>
          <p>
            <span
              style={{ fontWeight: "bolder", fontSize: "14px", color: "brown" }}
            >
              Easy Cart Management:{" "}
            </span>{" "}
            Users can easily manage their cart items, update quantities, and
            view subtotal. Secure Checkout: Secure checkout process with order
            summary and payment options.
          </p>
          <h3>5. Benefits:</h3>
          <p>
            <span
              style={{ fontWeight: "bolder", fontSize: "14px", color: "brown" }}
            >
              {" "}
              Convenient Shopping Experience:{" "}
            </span>{" "}
            Users can browse and purchase footwear from multiple brands in one
            place.
          </p>{" "}
          <h3>6. Source code and Live Link</h3>
          <p>
            <span
              style={{ fontWeight: "bolder", fontSize: "14px", color: "brown" }}
            >
              {" "}
              Live Link:{" "}
            </span>
            {"  "}
            <a
              style={{ textDecoration: "none", fontWeight: "bold" }}
              href="https://footwearstore.netlify.app/"
            >
              Live Website Link
            </a>
          </p>
          <p>
            <span
              style={{ fontWeight: "bolder", fontSize: "14px", color: "brown" }}
            >
              {" "}
              Source Code:{" "}
            </span>{" "}
            <a
              style={{ textDecoration: "none", fontWeight: "bold" }}
              href="https://github.com/kishanverma24/footwear_store"
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
              href="https://drive.google.com/file/d/1CWihkHtiJ7pzoQFAYuEmLF7RYL69hQeN/view?usp=drive_link"
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
