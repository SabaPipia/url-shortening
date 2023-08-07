import React from "react";
import Image from "next/image";
import rec from "@/public/icon-brand-recognition.svg";
import { CardProps } from "@/types";
import "./style.scss";
import { StatisticsCardsContent } from "@/constants";

function Card({ className, title, content, img }: CardProps) {
  return (
    <div className={`card ${className}`}>
      <div className="card-wrapper">
        <div className="card__image-wrapper">
          <Image src={img} alt="rec" />
        </div>
        <div className="card__content">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
