import React from "react";

import classes from "./AppSearch.module.css";

const AppSearch = ({ changeCityHandler, getInformation, city }) => {
  return (
    <div className={classes["app-search"]}>
      <input
        onChange={changeCityHandler}
        value={city}
        className={classes["search-input"]}
        placeholder="Search By City Name"
      />
      <button
        onClick={getInformation}
        className={classes["search-button"]}
        disabled={city === ""}
      >
        Search
      </button>
    </div>
  );
};

export default AppSearch;
