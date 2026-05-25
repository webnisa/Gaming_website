const gameArea = document.querySelector(".gameArea");

gameArea.innerHTML = `
<h1>Flip the card</h1>
<div class="wrapper">
  <ul class="cards">

    <li class="card">
      <div class="view front-view">?</div>
      <div class="view back-view">
        <img src="/image/img-1.png">
      </div>
    </li>

    <li class="card">
      <div class="view front-view">?</div>
      <div class="view back-view">
        <img src="/image/img-2.png">
      </div>
    </li>

    <li class="card">
      <div class="view front-view">?</div>
      <div class="view back-view">
        <img src="/image/img-3.png">
      </div>
    </li>

    <li class="card">
      <div class="view front-view">?</div>
      <div class="view back-view">
        <img src="/image/img-4.png">
      </div>
    </li>

    <li class="card">
      <div class="view front-view">?</div>
      <div class="view back-view">
        <img src="/image/img-5.png">
      </div>
    </li>

    <li class="card">
      <div class="view front-view">?</div>
      <div class="view back-view">
        <img src="/image/img-6.png">
      </div>
    </li>

    <li class="card">
      <div class="view front-view">?</div>
      <div class="view back-view">
        <img src="/image/img-7.png">
      </div>
    </li>

    <li class="card">
      <div class="view front-view">?</div>
      <div class="view back-view">
        <img src="/image/img-8.png">
      </div>
    </li>

    <li class="card">
      <div class="view front-view">?</div>
      <div class="view back-view">
        <img src="/image/img-1.png">
      </div>
    </li>

    <li class="card">
      <div class="view front-view">?</div>
      <div class="view back-view">
        <img src="/image/img-2.png">
      </div>
    </li>

    <li class="card">
      <div class="view front-view">?</div>
      <div class="view back-view">
        <img src="/image/img-3.png">
      </div>
    </li>

    <li class="card">
      <div class="view front-view">?</div>
      <div class="view back-view">
        <img src="/image/img-4.png">
      </div>
    </li>

    <li class="card">
      <div class="view front-view">?</div>
      <div class="view back-view">
        <img src="/image/img-5.png">
      </div>
    </li>

    <li class="card">
      <div class="view front-view">?</div>
      <div class="view back-view">
        <img src="/image/img-6.png">
      </div>
    </li>

    <li class="card">
      <div class="view front-view">?</div>
      <div class="view back-view">
        <img src="/image/img-7.png">
      </div>
    </li>

    <li class="card">
      <div class="view front-view">?</div>
      <div class="view back-view">
        <img src="/image/img-8.png">
      </div>
    </li>

  </ul>
</div>
`;

const cards = document.querySelectorAll(".card");

let clickedCard;
let cardOne;
let cardTwo;

let disableCard = false;
let matched = 0;


const finish = () => {

  if (matched == 8) {

    disableCard = true;

    setTimeout(() => {

      cards.forEach((card) => {
        card.classList.remove("flip");
      });

      getFlipAgain();

    }, 2000);
  }
};


const getFlipAgain = () => {

  matched = 0;

  cardOne = "";
  cardTwo = "";

  disableCard = false;

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

  arr.sort(() => Math.random() > 0.5 ? 1 : -1);

  cards.forEach((card, i) => {

    card.classList.remove("flip");

    card.querySelector(".back-view").innerHTML =
      `<img src="/image/img-${arr[i]}.png">`;
  });
};


const mathchingCard = (img1, img2) => {

  if (img1 === img2) {

    matched++;

    cardOne = "";
    cardTwo = "";

    disableCard = false;

    finish();

    return;
  }

  setTimeout(() => {

    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");

  }, 400);


  setTimeout(() => {

    cardOne.classList.remove("flip", "shake");
    cardTwo.classList.remove("flip", "shake");

    cardOne = "";
    cardTwo = "";

    disableCard = false;

  }, 1200);
};


const flipCard = (e) => {

  clickedCard = e.currentTarget;

  if (disableCard) {
    return;
  }

  if (clickedCard !== cardOne) {

    clickedCard.classList.add("flip");

    if (!cardOne) {

      cardOne = clickedCard;

      return;
    }

    cardTwo = clickedCard;

    disableCard = true;

    let card1 = cardOne.querySelector("img").src;
    let card2 = cardTwo.querySelector("img").src;

    mathchingCard(card1, card2);
  }
};


cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});

getFlipAgain();