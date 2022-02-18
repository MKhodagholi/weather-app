import React, { useState } from "react";
import dateFormat from "dateformat";

import classes from "./App.module.css";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const changeThemeHandler = () => {
    setIsDark((prevStateTheme) => !prevStateTheme);
  };

  const getLocation = async () => {
    const res = await fetch(
      "https://www.metaweather.com/api/location/search/?query=san",
      { mode: "cors" }
    );
    const data = res.consolidated_weather[0];
    const information = {
      nameCity: data.title,
      weather_state_name: data.weather_state_name,
      weather_state_abbr: data.weather_state_abbr,
      temp: data.the_temp,
      minTemp: data.min_temp,
      maxTemp: data.max_temp,
    };
  };

  const date = dateFormat("2022-02-18T12:59:07.948570Z", "dddd, mmmm dS, yyyy");

  return (
    <div className={`${isDark ? classes.dark : classes.light} ${classes.app}`}>
      <h1 className={classes.title}>Weather App</h1>
      <div className={classes["app-search"]}>
        <input
          className={classes["search-input"]}
          placeholder="Search By City Name"
        />
        <button onClick={getLocation} className={classes["search-button"]}>
          Search
        </button>
      </div>
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
      <button
        className={classes["theme-switcher"]}
        onClick={changeThemeHandler}
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default App;
