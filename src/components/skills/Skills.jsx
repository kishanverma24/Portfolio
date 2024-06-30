import React from "react";
import "./skills.css";
function Skills() {
  return (
    <div className="sk_main_div">
      <div>
        <div
          style={{ backgroundImage: `url("skills/express-js.png")` }}
          className="sk_sm_div"
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "5px",
            width: "100%",
          }}
        >
          <h4 className="sk_smdivh4" style={{ color: "black" }}>
            Nameess Skill
          </h4>
        </div>
      </div>{" "}
      <div>
        <div
          style={{ backgroundImage: `url("skills/mongodb.gif")` }}
          className="sk_sm_div"
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "5px",
            width: "100%",
          }}
        >
          <h4 className="sk_smdivh4" style={{ color: "black" }}>
            Nameess Skill
          </h4>
        </div>
      </div>{" "}
      <div>
        <div
          style={{ backgroundImage: `url("myImage.jpg")` }}
          className="sk_sm_div"
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "5px",
            width: "100%",
          }}
        >
          <h4 className="sk_smdivh4" style={{ color: "black" }}>
            Nameess Skill
          </h4>
        </div>
      </div>{" "}
    </div>
  );
}

export default Skills;
