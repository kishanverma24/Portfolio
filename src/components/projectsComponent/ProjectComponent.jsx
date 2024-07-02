import React from "react";
import { Link } from "react-router-dom";
import "./projectComponent.css";
function ProjectComponent() {
  return (
    <div className="main_div">
      <div>
        <Link to={"/projects/project1"}>
          <div
            style={{
              backgroundImage: `url("/projects/project1/coverpageProject1.png")`,
            }}
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
            Footwear Store
          </h4>
        </div>
      </div>{" "}
      <div>
        <Link to={"/projects/project2"}>
          <div
            style={{
              backgroundImage: `url("/projects/project2/project2 cover.png")`,
            }}
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
            Amazon's Landin Page
          </h4>
        </div>
      </div>{" "}
    </div>
  );
}

export default ProjectComponent;
