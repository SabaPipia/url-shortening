import React from "react";
import { CustomButtonProps } from "@/types";
import "./style.scss";

function CustomButton({ children }: CustomButtonProps) {
  return <button className="btn">{children}</button>;
}

export default CustomButton;
