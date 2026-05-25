const gameArea = document.querySelector(".gameArea");

gameArea.innerHTML =
  `<div class="gameContainer">

    <h1>Snake Game</h1>

    <div class="topBar">
      <div class="scoreBox">
        Score: <span id="score">0</span>
      </div>

      <button id="restBtn">Restart</button>
    </div>

    <div id="board"></div>

  </div>`;


const score = document.getElementById("score");
const restBtn = document.getElementById("restBtn");
const board = document.getElementById("board");

let foodX, snakeX, velocityX = 0;
let foodY, snakeY, velocityY = 0;
let gameOver = false;
let setIntervalValid;

snakeX = 10;
snakeY = 10;


const changePosition = (e) => {
  if (e.key === "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
  }
  else if (e.key === "ArrowDown" && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
  }
  else if (e.key === "ArrowLeft" && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
  }
  else if (e.key === "ArrowRight" && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
  }
}

const handelGameOver = ()=>{
  alert("Game over");
  clearInterval(setIntervalValid);
  location.reload();
}

restBtn.addEventListener("click", ()=>{
  clearInterval(setIntervalValid);
  location.reload();
})


const createFood = () => {
  foodX = Math.floor(Math.random() * 30 + 1);
  foodY = Math.floor(Math.random() * 30 + 1);
}

let scorechange = 0;
let snakeBody = [[snakeX, snakeY]];
const getFood = () => {
   if(gameOver){
    return handelGameOver();
   }

  if (snakeX === foodX && snakeY === foodY) {
    createFood();
    snakeBody.push([snakeX, snakeY]);
    scorechange++;
    score.innerText = scorechange;
  }

  for(let i = snakeBody.length - 1; i>0; i--){
    snakeBody[i] = snakeBody[i-1];
  }

  snakeBody[0] = [snakeX, snakeY]

  snakeX += velocityX;
  snakeY += velocityY;

  if(snakeX <=0 || snakeX > 30 || snakeY <= 0 || snakeY > 30){
    gameOver = true;
  }


  let htmlMarkup = `
  <div class="food" style=" grid-area: ${foodY} / ${foodX} ">
  </div>`;

  for (let i = 0; i < snakeBody.length; i++) {
    htmlMarkup += `<div class="snake" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`
    if(i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]){
      gameOver = true;
    }
  }
  board.innerHTML = htmlMarkup;
}



createFood();
setIntervalValid =  setInterval(getFood, 125);
document.addEventListener("keydown", changePosition);
