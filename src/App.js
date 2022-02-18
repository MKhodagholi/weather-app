import React, { useState } from "react";

import classes from "./App.module.css";

const App = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={"app"`${isDark ? "dark" : "light"}`}>
      <h1 className="title"></h1>
    </div>
  );
};

export default App;
