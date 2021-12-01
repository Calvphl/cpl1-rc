import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyound your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          unde, eum dolor saepe quas beatae nihil cumque animi? Perspiciatis
          sapiente ipsa ad modi dolores dolore saepe vero.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
