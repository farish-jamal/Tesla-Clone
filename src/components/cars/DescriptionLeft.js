import React from "react";
import "./descInfo.css";
import Fade from "react-reveal/Fade";

function DescriptionLeft({ title, desc, img }) {
  return (
    <div className="desc__items">
      <Fade bottom>
        <div className="desc__info">
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
        <img src={img} alt="" />
      </Fade>
    </div>
  );
}

export default DescriptionLeft;
