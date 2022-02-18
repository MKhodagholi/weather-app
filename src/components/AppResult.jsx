import React from "react";
import dateFormat from "dateformat";

import classes from "./AppResult.module.css";

const AppResult = ({ information }) => {
  const date = dateFormat("2022-02-18T12:59:07.948570Z", "dddd, mmmm dS, yyyy");

  return (
    <div className={classes["app-result"]}>
      <div className={classes.icon}>
        <img src="https://www.metaweather.com/static/img/weather/c.svg" />
      </div>
      <div className={classes["name-date"]}>
        <h3 className="name">Lagos</h3>
        <h3 className={classes.date}>{date}</h3>
      </div>
      <hr />
      <div className={classes["temp-part"]}>
        <h3>
          Temp: <span className={classes.cold}>25˚C</span>
        </h3>
        <h3>
          Weather: <span className={classes.weather}>Clouds</span>
        </h3>
        <h3>
          Temp Range: <span className={classes.cold}>24.6˚C</span> to
          <span className={classes.hot}> 25.3˚C</span>
        </h3>
      </div>
    </div>
  );
};

export default AppResult;
