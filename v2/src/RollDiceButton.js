import React from "react";
import "./RollDiceButton.css";

const numRows = 4; // number of rows
const numDice = 2; // number of dice per row
const numSides = 6; // number of sides on the dice

export function RollDiceButton({ setDiceRows }) {
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
  setDiceRows(GetDiceValues);
}

export function GetDiceValues() {
  let rolledDice = [];
  for (let i = 0; i < numRows; i++) {
    let row = [];
    for (let j = 0; j < numDice; j++) {
      row[j] = Math.floor(Math.random() * numSides) + 1;
    }
    rolledDice[i] = row;
  }
  return rolledDice;
}
