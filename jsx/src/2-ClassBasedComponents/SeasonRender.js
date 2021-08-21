import React from "react";
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) return lat > 0 ? "summer" : "winter";
  return lat > 0 ? "winter" : "summer";
};
const seasonHelper = (season, summerResultWillBe, winterResultWillBe) =>
  season === "summer" ? summerResultWillBe : winterResultWillBe;
const SeasonRender = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const seasonExpiration = seasonHelper(
    season,
    "Lets hit the beach👀",
    "Burr, it is chilly🥶"
  );
  const seasonIcon = seasonHelper(season, "sun", "snowflake");
  // * 70. Extracting Options to Config Objects
  return (
    <div>
      <i className={`icon ${seasonIcon}`} />
      <h1>{seasonExpiration}</h1>
      <i className={`icon ${seasonIcon}`} />
    </div>
  );
};
export default SeasonRender;
