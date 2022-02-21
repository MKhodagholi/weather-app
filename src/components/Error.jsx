import React from "react";

import "./Error.css";

const Error = ({ errorText }) => {
  return <div className="error">{errorText}</div>;
};

export default Error;
