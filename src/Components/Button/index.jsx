import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./style.css";
const Button = ({ title, arrow, bg }) => {
  return (
    <button  className={`button ${bg}`} >
      {title}
      {arrow && <AiOutlineArrowRight />}
    </button>
  );
};

export default Button;
