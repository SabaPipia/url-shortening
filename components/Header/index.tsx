"use client";

import React, { useState } from "react";
import Image from "next/image";
import LogoImage from "@/public/logo.svg";
import CustomButton from "../CustomButton";
import "./style.scss";
import BurgerMenu from "@/public/icons8-hamburger-menu.svg";

function Header() {
  const [burgerVisible, setBurgerVisible] = useState(false);
  const openBurgerMenu = () => {
    setBurgerVisible(!burgerVisible);
  };
  return (
    <header className="header-main container">
      <Image src={LogoImage} alt="logo" />
      <div
        className={`header-main__link-wrapper ${
          burgerVisible ? "burger-menu-visible" : ""
        }`}
      >
        <div className="header-main__left-side">
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
      </div>
      <div className="burger-menu" onClick={openBurgerMenu}>
        <Image src={BurgerMenu} alt="burger menu" />
      </div>
    </header>
  );
}

export default Header;
