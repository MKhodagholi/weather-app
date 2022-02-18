import React from "react";
import dateFormat from "dateformat";

import classes from "./AppResult.module.css";

const AppResult = ({ information }) => {
  const { time, nameCity, weather_name, state_abbr, temp, minTemp, maxTemp } =
    information;

  const cityName = nameCity[0].toUpperCase() + nameCity.slice(1);

  const timeConverted = dateFormat(time, "dddd, mmmm dS, yyyy");
  const tempInt = temp;
  const minTempInt = minTemp;
  const maxTempInt = maxTemp;
  const img = `https://www.metaweather.com/static/img/weather/${state_abbr}.svg`;
  return (
    <div className={classes["app-result"]}>
      <div className={classes.icon}>
        <img src={img} />
      </div>
      <div className={classes["name-date"]}>
        <h3 className="name">{cityName}</h3>
        <h3 className={classes.date}>{timeConverted}</h3>
      </div>
      <hr />
      <div className={classes["temp-part"]}>
        <h3>
          Temp:{" "}
          <span className={`${minTempInt > 15 ? classes.hot : classes.cold}`}>
            {tempInt}˚C
          </span>
        </h3>
        <h3>
          Weather: <span className={classes.weather}> Clouds</span>
        </h3>
        <h3>
          Temp Range:{" "}
          <span className={`${minTempInt > 15 ? classes.hot : classes.cold}`}>
            {minTempInt}˚C
          </span>{" "}
          to{" "}
          <span className={`${minTempInt > 15 ? classes.hot : classes.cold}`}>
            {maxTempInt}˚C
          </span>
        </h3>
      </div>
    </div>
  );
};

export default AppResult;
