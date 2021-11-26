import React from "react";
import "./whatGPT3.css";
import Feature from "../../components/feature/Feature";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque impedit quasi sit unde iure dolore perferendis, minus nemo velit in eveniet quaerat necessitatibus earum, exercitationem dolorum. Voluptates, accusantium iste."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyound your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque impedit quasi sit unde iure dolore perferendis"
        />
        <Feature
          title="Knowledgebase"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque impedit quasi sit unde iure dolore perferendis"
        />
        <Feature
          title="Education"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque impedit quasi sit unde iure dolore perferendis"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
