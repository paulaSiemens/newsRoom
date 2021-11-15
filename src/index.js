import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";

import Parse from "parse";

Parse.initialize(
  "cUJSSsUpoHrC4kbYzOHqYfHdMc0Fzz1ZFAF26K6q",
  "jeSHzeg98jhIjMH9eWYsPZJ2ZwWFbd3AO7GE1n8z"
);

Parse.serverURL = "https://parseapi.back4app.com/";

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);
