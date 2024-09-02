import React from "react";
import "./styles.css";

const Banner = ({ onOpenModal }) => {
  return (
    <div onClick={onOpenModal} className="banner">
      <p>CLICKEEEA MI NETO</p>
    </div>
  );
};

export default Banner;
