import React, { useState } from "react";
import dateFormat from "dateformat";

import classes from "./App.module.css";
import AppSearch from "./components/AppSearch";
import AppResult from "./components/AppResult";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [city, setCity] = useState("");
  const [information, setInformation] = useState(null);

  const changeCityHandler = (e) => {
    setCity(e.target.value);
  };

  const changeThemeHandler = () => {
    setIsDark((prevStateTheme) => !prevStateTheme);
  };

  const getInformation = async () => {
    const res = await fetch(
      `https://www.metaweather.com/api/location/search/?query=${city}`
    ).json();
    const woeid = await res[0].woeid;
    const resCity = await fetch(
      `https://www.metaweather.com/api/location/${woeid}/`
    ).json();
    const data = await resCity.consolidated_weather[0];
    const information = {
      nameCity: data.title,
      time: data.created,
      weather_name: data.weather_state_name,
      state_abbr: data.weather_state_abbr,
      temp: data.the_temp,
      minTemp: data.min_temp,
      maxTemp: data.max_temp,
    };
    setInformation(information);
    setCity("");
  };

  return (
    <div className={`${isDark ? classes.dark : classes.light} ${classes.app}`}>
      <h1 className={classes.title}>Weather App</h1>
      <AppSearch
        changeCityHandler={changeCityHandler}
        getInformation={getInformation}
        city={city}
      />
      {information && <AppResult information={information} />}
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
