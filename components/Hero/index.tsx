import React from "react";
import CustomButton from "../CustomButton";
import Image from "next/image";
import HeroImage from "@/public/illustration-working.svg";
import "./style.scss";

function Hero() {
  return (
    <div className="hero container">
      <div className="hero__content">
        <h1 className="hero__header">More than just shorten links</h1>
        <p className="hero__more-info">
          Build your brand's recognition and get detailed insights an how your
          links are performing
        </p>
        <div className="hero__button-wrapper">
          <CustomButton>Get Started</CustomButton>
        </div>
      </div>
      <div className="hero__image">
        <Image src={HeroImage} alt="hero image" />
      </div>
    </div>
  );
}

export default Hero;
