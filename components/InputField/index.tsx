import React from "react";
import "./style.scss";
import CustomButton from "../CustomButton";

function InputField() {
  return (
    <div className="container">
      <div className="input-field ">
        <div className="wrapper">
          <input placeholder="shorten a link here..." type="text" />
          <CustomButton>Shorten it!</CustomButton>
        </div>
      </div>
    </div>
  );
}

export default InputField;
