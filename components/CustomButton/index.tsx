import React from "react";
import { CustomButtonProps } from "@/types";
import "./style.scss";

function CustomButton({ children, handleClick }: CustomButtonProps) {
  return (
    <button className="btn" onClick={handleClick}>
      {children}
    </button>
  );
}

export default CustomButton;
