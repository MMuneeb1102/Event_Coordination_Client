import React from "react";
import "../../css/CustomButton.css";
import { useNavigate } from "react-router-dom";

const CustomButton = ({ btnText, handleClick }) => {
  const navigate = useNavigate()
  return <button className="custbtn e" onClick={handleClick}>{btnText}</button>;
};

export default CustomButton;
