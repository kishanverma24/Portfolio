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
          <img src="/public/myImage.jpg" alt="" />
          <img src="/public/myImage.jpg" alt="" />
          <img src="/public/myImage.jpg" alt="" />
          <img src="/public/myImage.jpg" alt="" />
          <img src="/public/myImage.jpg" alt="" />
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
            <span style={{ fontWeight: "bolder", fontSize: "14px" }}>
              Multi-brand Footwear Marketplace:
            </span>
            Users can browse and purchase footwear from various brands in a
            single platform.
          </p>
          <p>
            <span style={{ fontWeight: "bolder", fontSize: "14px" }}>
              Shopping Cart System:
            </span>
            Users can add/remove items from their cart, update quantities, and
            view subtotal.
          </p>
          <p>
            <span style={{ fontWeight: "bolder", fontSize: "14px" }}>
              Checkout Functionality:
            </span>
            Secure checkout process with order summary and payment options.
          </p>
          <p>
            <span style={{ fontWeight: "bolder", fontSize: "14px" }}>
              Orders Page:
            </span>
            Users can view their order history and track their orders.
          </p>
          <p>
            <span style={{ fontWeight: "bolder", fontSize: "14px" }}>
              Local Storage Integration:
            </span>
            Cart data is persisted across page refreshes and navigation using
            local storage.
          </p>
          <h3>3. Technical Stack:</h3>
          <p>
            <span style={{ fontWeight: "bolder", fontSize: "14px" }}>
              Frontend Framework:{" "}
            </span>{" "}
            React JS
          </p>
          <p>
            <span style={{ fontWeight: "bolder", fontSize: "14px" }}>
              Build Tool:{" "}
            </span>{" "}
            Vite
          </p>
          <p>
            <span style={{ fontWeight: "bolder", fontSize: "14px" }}>
              Styling:{" "}
            </span>{" "}
            CSS
          </p>
          <p>
            <span style={{ fontWeight: "bolder", fontSize: "14px" }}>
              State Management:{" "}
            </span>{" "}
            useState and useContext for managing cart data and user
            interactions.
          </p>
          <h3>4. Key Components:</h3>
          <p>
            <span style={{ fontWeight: "bolder", fontSize: "14px" }}>
              CartOverlay:{" "}
            </span>{" "}
            Displays cart items, allows users to manage their cart, and provides
            functions to remove items and update quantities.
          </p>
          <p>
            <span style={{ fontWeight: "bolder", fontSize: "14px" }}>
              ShoppingCartProvider:{" "}
            </span>{" "}
            ShoppingCartProvider: Provides the context for the shopping cart
            functionality, wrapping components that need access to cart data.
          </p>
          <p>
            <span style={{ fontWeight: "bolder", fontSize: "14px" }}>
              Easy Cart Management:{" "}
            </span>{" "}
            Users can easily manage their cart items, update quantities, and
            view subtotal. Secure Checkout: Secure checkout process with order
            summary and payment options.
          </p>
          <h3>5. Benefits:</h3>
          <p>
            <span style={{ fontWeight: "bolder", fontSize: "14px" }}>
              {" "}
              Convenient Shopping Experience:{" "}
            </span>{" "}
            Users can browse and purchase footwear from multiple brands in one
            place.
          </p>{" "}
          <h3>6. Source code and Live Link</h3>
          <p>
            <span style={{ fontWeight: "bolder", fontSize: "14px" }}>
              {" "}
              Source code:{" "}
            </span>{" "}
            "https/www.google.com"
          </p>
          <p>
            <span style={{ fontWeight: "bolder", fontSize: "14px" }}>
              {" "}
              Live link:{" "}
            </span>{" "}
            "https/www.google.com"
          </p>
        </div>
      </div>{" "}
      <Footer />
    </>
  );
};

export default ProductDetails;
