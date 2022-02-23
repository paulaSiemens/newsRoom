import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Db from "./Db";
import "./style.css";


 /* original newsroom db address */
 Db.connectToServer(
  "cUJSSsUpoHrC4kbYzOHqYfHdMc0Fzz1ZFAF26K6q",
  "jeSHzeg98jhIjMH9eWYsPZJ2ZwWFbd3AO7GE1n8z",
  "https://parseapi.back4app.com/"
);


// temporary Db
/* Db.connectToServer(
  "cuGoA0YsdhcQHumMCe1rCNJhqf4KFnqcDG2u89On",
  "4xGTncrYmUbLfYQPGd3hJPScLoLGB6iADeVDSE9T",
  "https://parseapi.back4app.com"
); */

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);
