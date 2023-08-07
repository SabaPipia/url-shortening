import React from "react";
import Card from "./Card";
import "./style.scss";
import { StatisticsCardsContent } from "@/constants";

function AdvancedStatistics() {
  return (
    <div className="statistics container">
      <div className="statistics__content">
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <div className="statistics__cards">
        <div className="statistics__background-line"></div>
        {StatisticsCardsContent.map((item) => (
          <Card
            className={item.className}
            title={item.title}
            content={item.content}
            img={item.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default AdvancedStatistics;
