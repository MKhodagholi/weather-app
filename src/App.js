import React, { useState } from "react";
import dateFormat from "dateformat";

import classes from "./App.module.css";
import AppSearch from "./components/AppSearch";
import AppResult from "./components/AppResult";
import Loading from "./components/Loading";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [city, setCity] = useState("");
  const [information, setInformation] = useState(null);
  const [isLoaing, setIsLoading] = useState(false);

  const changeCityHandler = (e) => {
    setCity(e.target.value);
  };

  const changeThemeHandler = () => {
    setIsDark((prevStateTheme) => !prevStateTheme);
  };

  const getInformation = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://www.metaweather.com/api/location/search/?query=${city}`,
        { mode: "no-cors" }
      );
      const woeidJson = await res.json();
      const woeid = await woeidJson[0].woeid;
      const resCity = await fetch(
        `https://www.metaweather.com/api/location/${woeid}/`
      ).json();
      const resCityJson = await resCity.json();
      const data = await resCityJson.consolidated_weather[0];
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
      setIsLoading(false);
      setTimeout(() => {
        setInformation(null);
      }, 15000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`${isDark ? classes.dark : classes.light} ${classes.app}`}>
      <h1 className={classes.title}>Weather App</h1>
      {isLoaing ? (
        <Loading />
      ) : (
        <>
          <AppSearch
            changeCityHandler={changeCityHandler}
            getInformation={getInformation}
            city={city}
          />
          {information && <AppResult information={information} />}
        </>
      )}
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
