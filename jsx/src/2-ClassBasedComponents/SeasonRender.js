import React from "react";
import "./SeasonDisplay.css";
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) return lat > 0 ? "summer" : "winter";
  return lat > 0 ? "winter" : "summer";
};
/*
const seasonHelper = (season, summerResultWillBe, winterResultWillBe) =>
season === "summer" ? summerResultWillBe : winterResultWillBe;
*/
// NOTE // * seasonHelper instructor solution
const seasonHelper = {
  summer: { text: "Lets hit the beach👀", seasonIcon: "sun" },
  winter: { text: "Burr, it is chilly🥶", seasonIcon: "snowflake" },
};
const SeasonRender = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text: seasonExpiration, seasonIcon } = seasonHelper[season];
  // * 70. Extracting Options to Config Objects

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon ${seasonIcon} massive icon--left`} />
      <h4 className="time">{props.children}</h4>
      <h1>{seasonExpiration}</h1>
      <i className={`icon ${seasonIcon} massive icon--right`} />
    </div>
  );
};
export default SeasonRender;
