import React, { useState } from "react";

import classes from "./App.module.css";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`${isDark ? classes.dark : classes.light} ${classes.app}`}>
      <h1 className={classes.title}>Weather App</h1>
      <div className={classes["app-search"]}>
        <input
          className={classes["search-input"]}
          placeholder="Search By City Name"
        />
        <button className={classes["search-button"]}>Search</button>
      </div>
    </div>
  );
};

export default App;
