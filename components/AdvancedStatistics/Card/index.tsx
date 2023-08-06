import React from "react";
import Image from "next/image";
import rec from "@/public/icon-brand-recognition.svg";
import { CardProps } from "@/types";
import "./style.scss";

function Card({ className }: CardProps) {
  return (
    <div className={`card ${className}`}>
      <div className="card-wrapper">
        <div className="card__image-wrapper">
          <Image src={rec} alt="rec" />
        </div>
        <div className="card__content">
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognitio with each click generic links font mean
            a thing branded links help instil confidence in your content
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
