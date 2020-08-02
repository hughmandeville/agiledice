import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import DiceRow from "./DiceRow";
import * as serviceWorker from "./serviceWorker";

// die values
const diceRows = [
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
];

ReactDOM.render(
  <React.StrictMode>
    {diceRows.map((n, i) => (
      <DiceRow id={i} row={n} key={"row-" + i} />
    ))}
  </React.StrictMode>,
  document.getElementById("board")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
