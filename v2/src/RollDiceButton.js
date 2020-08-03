import React from "react";

const rolledDice = [
  [3, 1],
  [5, 1],
  [3, 5],
  [2, 4],
];

function RollDiceButton() {
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
  setDiceRows(rolledDice);
}

export default RollDice;
