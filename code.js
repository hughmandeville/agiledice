var dicePerSet = 2;
var sets = 4;
var sides = 6;

$(function () {
  setupBoard();
  rollDice();
  $("#button_roll").on("click", rollDice);
});

function setupBoard() {
  console.log("in setupBoard");
  $("#board").empty();
  let html = "";
  for (i = 0; i < sets; i++) {
    html += `<div class="set">`;
    html += `<input type="text" class="set_text"/>`;
    for (j = 0; j < dicePerSet; j++) {
      html += `<div class="die">1</div>`;
    }
    html += `= <div class="set_total">2</div>`;
    html += `</div>`;
  }
  $("#board").html(html);
}

function rollDice() {
  $(".die").each(function (i) {
    $(this).text(Math.floor(Math.random() * Math.floor(sides)) + 1);
  });
}
