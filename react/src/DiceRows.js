import React, { useState } from "react";
import DiceRow from "./DiceRow";
import { RollDiceButton, GetDiceValues } from "./RollDiceButton";

function DiceRows() {
  const [diceRows, setDiceRows] = useState(GetDiceValues());

  return (
    <>
      {diceRows.map((n, i) => (
        <DiceRow id={i} row={n} key={"row-" + i} />
      ))}
      <RollDiceButton setDiceRows={setDiceRows} />
    </>
  );
}

export default DiceRows;
