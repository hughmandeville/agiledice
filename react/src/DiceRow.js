import React from "react";
import "./DiceRow.css";

function DiceRow({ id, row }) {
  return (
    <div key={"row-" + id + "-set"} className="set">
      <input type="text" className="set_text" />
      {row.map((n, i) => (
        <div key={i} className="die">
          {n}
        </div>
      ))}
      <div className="equals">=</div>
      <div className="set_total">
        {row.reduce((accumulator, currentValue, currentIndex, array) => {
          return accumulator + currentValue;
        })}
      </div>
    </div>
  );
}

export default DiceRow;
