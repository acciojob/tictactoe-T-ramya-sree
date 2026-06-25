//your JS code here. If required.
let player1 = "";
let player2 = "";
let currentPlayer = "X";
let gameOver = false;
const submitBtn = document.getElementById("submit");
const message = document.querySelector(".message");
const cells = document.querySelectorAll(".cell");
const winningCombinations = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
];
submitBtn.addEventListener("click", () => {
   player1 = document.getElementById("player-1").value;
   player2 = document.getElementById("player-2").value;
   if (player1 === "" || player2 === "") return;
   document.getElementById("start-screen").style.display = "none";
   document.getElementById("game-screen").style.display = "block";
   message.textContent = `${player1}, you're up`;
});
cells.forEach(cell => {
   cell.addEventListener("click", () => {
       if (gameOver || cell.textContent !== "") {
           return;
       }
       cell.textContent = currentPlayer;
       if (checkWinner()) {
           const winner =
               currentPlayer === "X" ? player1 : player2;
           message.textContent =
               `${winner}, congratulations you won!`;
           gameOver = true;
           return;
       }
       if (currentPlayer === "X") {
           currentPlayer = "O";
           message.textContent = `${player2}, you're up`;
       } else {
           currentPlayer = "X";
           message.textContent = `${player1}, you're up`;
       }
   });
});
function checkWinner() {
   const board = [];
   cells.forEach(cell => {
       board.push(cell.textContent);
   });
   for (let combo of winningCombinations) {
       const [a, b, c] = combo;
       if (
           board[a] &&
           board[a] === board[b] &&
           board[a] === board[c]
       ) {
           return true;
       }
   }
   return false;
}