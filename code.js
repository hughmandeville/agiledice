var board = [];
const numRows = 56;
const numCols = 80;

$(function() {
  initBoard();
  drawBoard();
  setInterval(applyRulesAndRedraw, 200);
  $("#refresh").on("click", function() {
    initBoard();
    drawBoard();
  });
});

function initBoard() {
  for (y = 0; y < numRows; y++) {
    let row = [];
    for (x = 0; x < numCols; x++) {
      //row[x] = Math.floor(Math.random() * 2);
      let num = Math.floor(Math.random() * 10);
      if (num == 0) {
        num = 1;
      } else {
        num = 0;
      }
      row[x] = num;
    }
    board[y] = row;
  }
}

function applyRulesAndRedraw() {
  let newBoard = [];
  for (y = 0; y < numRows; y++) {
    let row = [];
    for (x = 0; x < numCols; x++) {
      const num = numNeighborsWrap(x, y);
      if (num == 3) {
        row[x] = 1;
        continue;
      }
      if (num == 2) {
        row[x] = board[y][x];
        continue;
      }
      row[x] = 0;
    }
    newBoard[y] = row;
  }
  board = newBoard;
  drawBoard();
}

function numNeighbors(x, y) {
  let numNeighbors = 0;
  // count the number of square's 8 neighbors that are alive.
  let neighbors = [
    [x - 1, y - 1],
    [x, y - 1],
    [x + 1, y - 1],
    [x - 1, y],
    [x + 1, y],
    [x - 1, y + 1],
    [x, y + 1],
    [x + 1, y + 1]
  ];
  for (n of neighbors) {
    const x = n[0];
    const y = n[1];
    if (x < 0 || x >= numCols) {
      continue;
    }
    if (y < 0 || y >= numRows) {
      continue;
    }
    numNeighbors += board[y][x];
  }
  return numNeighbors;
}

function numNeighborsWrap(x, y) {
  let numNeighbors = 0;
  // count the number of square's 8 neighbors that are alive.
  let neighbors = [
    [x - 1, y - 1],
    [x, y - 1],
    [x + 1, y - 1],
    [x - 1, y],
    [x + 1, y],
    [x - 1, y + 1],
    [x, y + 1],
    [x + 1, y + 1]
  ];
  for (n of neighbors) {
    let x = n[0];
    let y = n[1];
    if (x < 0) {
      x = numCols - 1;
    }
    if (x >= numCols) {
      x = 0;
    }
    if (y < 0) {
      y = numRows - 1;
    }
    if (y >= numRows) {
      y = 0;
    }
    numNeighbors += board[y][x];
  }
  return numNeighbors;
}

function drawBoard() {
  let html = "";
  for (y = 0; y < board.length; y++) {
    html += '<div class="row">';
    for (x = 0; x < board[y].length; x++) {
      let status = "";
      if (board[y][x] == 1) {
        status = "alive";
      }
      html += '<div class="square ' + status + '"></div>';
    }
    html += "</div>";
  }
  $("#board").html(html);

  const h = $(window).height();
  const w = $(window).width();
  $(".square").css("width", w / numCols);
  $(".square").css("height", h / numRows);
}
