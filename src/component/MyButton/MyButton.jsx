import React from "react";
import "./myButton.scss";

const MyButton = (props) => {
  return (
    <button {...props} className="my-button">
      {props.children}
    </button>
  );
};

export default MyButton;
