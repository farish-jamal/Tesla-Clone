import React from "react";
import "./descInfo.css";
import Fade from "react-reveal/Fade";

function DescriptionInfo({ title, desc, img }) {
  return (
    <div className="desc__items">
      <Fade bottom>
        <img src={img} alt="" />
        <div className="desc__info">
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </Fade>
    </div>
  );
}

export default DescriptionInfo;
