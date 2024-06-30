import React from "react";
import "./project.css";
function Project() {
  return (
    <div className="main_div">
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
          }}
        >
          <h4 style={{ color: "black" }}>Name: Project</h4>
          <h4 style={{ color: "black" }}>Price: Project</h4>
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
          }}
        >
          <h4 style={{ color: "black" }}>Name: Project</h4>
          <h4 style={{ color: "black" }}>Price: Project</h4>
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
          }}
        >
          <h4 style={{ color: "black" }}>Name: Project</h4>
          <h4 style={{ color: "black" }}>Price: Project</h4>
        </div>
      </div>{" "}
    </div>
  );
}

export default Project;

// import React from "react";
// import "./project.css";

// const Project = () => {
//   return (
//     <div className="projectContainer">
//       {/* <h2>
//         Projects{" "}
//         <span
//           style={{
//             fontSize: "10px",
//             color: "skyblue",
//             fontWeight: "bold",
//             cursor: "pointer",
//           }}
//         >
//           Show more
//         </span>
//       </h2> */}
//       {/* <div className="projectsComponent"> */}
//       <div className="projectsComponentSm"></div>
//       <div className="projectsComponentSm"></div>
//       <div className="projectsComponentSm"></div>
//       <div>{/* </div> */}</div>
//     </div>
//   );
// };

// export default Project;
