import React from "react";
import { Link } from "react-router-dom";
import "./projectComponent.css";
function ProjectComponent() {
  return (
    <div className="main_div">
      <div>
        <Link to={"/project/1234"}>
          <div
            style={{ backgroundImage: `url("myImage.jpg")` }}
            className="sm_div"
          ></div>
        </Link>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "5px",
            width: "100%",
          }}
        >
          <h4 className="smdivh4" style={{ color: "white" }}>
            Name: Lorem ipsum dolor applejh
          </h4>
        </div>
      </div>{" "}
      <div>
        <div
          style={{ backgroundImage: `url("myImage.jpg")` }}
          className="sm_div"
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "5px",
            width: "100%",
          }}
        >
          <h4 className="smdivh4" style={{ color: "white" }}>
            Name: Lorem ipsum dolor applejh
          </h4>
        </div>
      </div>{" "}
      <div>
        <div
          style={{ backgroundImage: `url("myImage.jpg")` }}
          className="sm_div"
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "5px",
            width: "100%",
          }}
        >
          <h4 className="smdivh4" style={{ color: "white" }}>
            Name: Lorem ipsum dolor applejh
          </h4>
        </div>
      </div>{" "}
      <div>
        <div
          style={{ backgroundImage: `url("myImage.jpg")` }}
          className="sm_div"
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "5px",
            width: "100%",
          }}
        >
          <h4 className="smdivh4" style={{ color: "white" }}>
            Name: Lorem ipsum dolor applejh
          </h4>
        </div>
      </div>{" "}
    </div>
  );
}

export default ProjectComponent;
