import React from "react";
import "./inside.css";

function Inside({ backdropImg }) {
  return (
    <div
      className="inside"
      style={{ background: `url(${backdropImg}) no-repeat center / cover` }}
    ></div>
  );
}

export default Inside;
