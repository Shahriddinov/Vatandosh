import React from "react";
import { useDispatch } from "react-redux";
import { removeToken } from "../../../reduxToolkit/authSlice/authSlice";

const Cabinet = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeToken());
  };

  return (
    <div>
      <button
        style={{ marginTop: "200px", display: "inline-block" }}
        onClick={handleClick}
      >
        Log out
      </button>
    </div>
  );
};

export default Cabinet;
