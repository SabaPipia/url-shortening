import React from "react";
import Image from "next/image";
import LogoImage from "@/public/logo.svg";
import CustomButton from "../CustomButton";
import "./style.scss";

function Header() {
  return (
    <header className="header-main container">
      <div className="header-main__left-side">
        <Image src={LogoImage} alt="logo" />
        <ul className="header-main__item-list">
          <li className="header-main__list-item">
            <span>Features</span>
          </li>
          <li className="header-main__list-item">
            <span>Pricing</span>
          </li>
          <li className="header-main__list-item">
            <span>Resources</span>
          </li>
        </ul>
      </div>
      <div className="header-main__right-side">
        <span>Login</span>
        <div>
          <CustomButton>Sign Up</CustomButton>
        </div>
      </div>
    </header>
  );
}

export default Header;
