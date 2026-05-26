const gameArea = document.querySelector(".gameArea");

gameArea.innerHTML =
  `<h1 id="title">Whack-a-mole</h1>
<div id="scoreBox">
<p id="score">
SCORE:<span id="scoreChange">0</span>
</p>
</div>
<button id="start">Start</button>

<div id="mbox">
  <div class="sbox">
  <div class="moleBox"></div>
  </div>
  <div class="sbox">
    <div class="moleBox"></div>
  </div>
  <div class="sbox">
  <div class="moleBox"></div></div>
  <div class="sbox"><div class="moleBox">
  </div></div>
  <div class="sbox"><div class="moleBox"></div></div>
  <div class="sbox"><div class="moleBox"></div></div>
  <div class="sbox"><div class="moleBox"></div></div>
  <div class="sbox"><div class="moleBox"></div></div>
  <div class="sbox"><div class="moleBox"></div></div>
</div>
<button id="restBtn">RESET GAME</button>
`;

const sbox = document.querySelectorAll(".sbox");
const scoreChange = document.getElementById("scoreChange");
const moleBox = document.querySelectorAll(".moleBox");
const rsetBtn = document.getElementById("restBtn");
const startBtn = document.getElementById("start");

const randomHole = () => {
  const index = Math.floor(Math.random() * 9)
  return index;
}

let score = 0;
const getMole = () => {
  moleBox.forEach(hole => {
    hole.classList.remove("mole");
  });
  moleBox[randomHole()].classList.add("mole");
}


moleBox.forEach(hole => {
  hole.addEventListener("click", () => {
    if (hole.classList.contains("mole")) {
      score++;
      scoreChange.innerText = score;
      hole.classList.remove("mole");
    }
  })

})


let gameInterval;

startBtn.addEventListener("click",()=>{
  startBtn.style.backgroundColor="darkgreen";
  rsetBtn.style.backgroundColor="rgb(242, 25, 25)";
  clearInterval(gameInterval);
  getMole()
  gameInterval = setInterval(getMole, 2000);
})

rsetBtn.addEventListener("click", ()=>{
  rsetBtn.style.backgroundColor="darkred";
  startBtn.style.backgroundColor="rgb(72, 242, 25)"
  score = 0;
  scoreChange.innerText = score;
  moleBox.forEach((hole)=>{
    hole.classList.remove("mole");
  });
  clearInterval(gameInterval);
});