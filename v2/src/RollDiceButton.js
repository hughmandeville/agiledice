import React from "react";
import "./RollDiceButton.css";

const sides = 6; // number of sides to the dice

function RollDiceButton({ setDiceRows }) {
  return (
    <input
      type="button"
      id="button_roll"
      value="roll the dice"
      onClick={() => RollDice(setDiceRows)}
    />
  );
}
function RollDice(setDiceRows) {
  let rolledDice = [];
  for (let i = 0; i < 4; i++) {
    let row = [];
    for (let j = 0; j < 2; j++) {
      row[j] = Math.floor(Math.random() * sides) + 1;
    }
    rolledDice[i] = row;
  }
  setDiceRows(rolledDice);
}

export default RollDiceButton;
