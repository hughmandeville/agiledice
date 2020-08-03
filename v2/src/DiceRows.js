import React, { useState } from "react";
import DiceRow from "./DiceRow";

// dice values
const initDiceRows = [
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
];

function DiceRows() {
  const [diceRows, setDiceRows] = useState(initDiceRows);

  return (
    <>
      {diceRows.map((n, i) => (
        <DiceRow id={i} row={n} key={"row-" + i} />
      ))}
      <input
        type="button"
        id="button_roll"
        value="roll the dice"
        onClick={() => RollDice(setDiceRows)}
      />
    </>
  );
}

const rolledDice = [
  [3, 1],
  [5, 1],
  [3, 5],
  [2, 4],
];

function RollDice(setDiceRows) {
  console.log("IN: RollDice");
  setDiceRows(rolledDice);
}

export default DiceRows;
