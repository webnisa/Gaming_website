const gameArea = document.querySelector(".gameArea");
gameArea.innerHTML = `<h1 id="title">TIC TAC TOE</h1>

    <div id="mbox">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>

    <button id="reset-btn">RESET GAME</button>`;

let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

let winner = document.querySelector("#title");
let turno = true;
let drawcase = 0;
let userWin = false;

const winpattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const resetgame = () => {
    turno = true;
    userWin = false;
    drawcase = 0;
    boxes.forEach((oxbox) => {

        oxbox.style.pointerEvents = "auto";
        oxbox.innerText = "";
        winner.innerText = "TIC TAC TOE";

    });
}

resetbtn.addEventListener("click", resetgame);

const disablebox = () => {
    boxes.forEach((oxbox) => {
        oxbox.style.pointerEvents = "none";
    })
}

const drawcond = () => {
    if (drawcase === 9 && userWin == false) {
        winner.innerText = "it is a draw. play again".toUpperCase();
    }
}

const checkwin = () => {
    for (let pattern of winpattern) {
        let pat1 = boxes[pattern[0]].innerText;
        let pat2 = boxes[pattern[1]].innerText;
        let pat3 = boxes[pattern[2]].innerText;

        if (pat1 != "" && pat2 != "" && pat3 != "") {
            if (pat1 === pat2 && pat2 === pat3) {
                winner.innerText = `Congratulation ,Winnner Is ${pat1}`.toUpperCase();
                userWin = true;
                drawcase = 0;
                disablebox();
                return;
            };
        };
    };
};

boxes.forEach((oxbox) => {
    oxbox.addEventListener("click", () => {
        drawcase++;

        if (turno === true) {
            oxbox.innerText = "O";
            oxbox.style.color = "#2B1700"
            turno = false;
        }
        else {
            oxbox.innerText = "X";
            turno = true;
        }
        oxbox.style.pointerEvents = "none";

        checkwin();
        drawcond(drawcase);
    });

});

