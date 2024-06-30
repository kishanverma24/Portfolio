import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="mainImagediv">
        <div className="submainImage">
          {/* <img style={{width:"300px", height:"300px"}} src="mySelf.jpg" alt="" /> */}
        </div>
      </div>
      <div className="heroInfo">
        <h1>Kishan Verma</h1>
        <p>
          I am a skilled Full Stack Developer proficient in front-end
          technologies like React.js, Redux, and back-end technologies such as
          Node.js, Express.js. With a solid foundation in Electronics
          Engineering and a recent certification in Fullstack Web Development
          from Udemy, I specialize in building dynamic web applications and
          RESTful APIs.
        </p>
      </div>
    </div>
  );
};

export default Hero;
