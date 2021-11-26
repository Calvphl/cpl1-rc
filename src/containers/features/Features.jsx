import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Improving and distrusts instanly",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, dignissimos, placeat recusandae beatae, corrupti dolorum et quisqu",
  },
  {
    title: "Become the tended active",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, dignissimos, placeat recusandae beatae, corrupti dolorum et quisqu",
  },
  {
    title: "Message or am nothing",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, dignissimos, placeat recusandae beatae, corrupti dolorum et quisqu",
  },
  {
    title: "Really boy law county",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, dignissimos, placeat recusandae beatae, corrupti dolorum et quisqu",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now an You Just Need To Relize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to GetStarted</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
