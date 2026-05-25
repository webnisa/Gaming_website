const gameArea = document.querySelector(".gameArea");
gameArea.innerHTML = `<h1 id="title">ROCK PAPER SCISSOR GAME</h1>
<span id="msg">WELCOME !</span>
    <div class="choices">
        <div class="choice" id="rock">
            <img src="/image/rock.png">
        </div>
        <div class="choice" id="paper">
            <img src="/image/paper.png">
        </div>
        <div class="choice" id="scissors">
            <img src="/image/scissors.png">
        </div>
    </div>

    <div class="score-name">
        <div id="user-score-box">
            <p id="user-score">0</p>
            <p id="user">User</p>
        </div>

        <div id="comp-score-box">
            <p id="comp-score">0</p>
            <p id="comp">comp</p>
        </div>

    </div>

    <button class="reset-btn">Reset Game</button>`;
   
    
let userscore = 0;
let compscore = 0;
let userwin = true;

const choices = document.querySelectorAll(".choice");
const restBtn = document.querySelector(".reset-btn");
const msg = document.getElementById("msg");

const printwin = (userwin , userchoice , compchoice) =>{
    if(userwin == true){
        userscore++;
        document.querySelector("#user-score").innerText = userscore;
        msg.innerText = `You Won! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "chartreuse";
        msg.style.color = "darkBlue";
    }
    else{
        console.log("computer won");
        compscore++;
        document.querySelector("#comp-score").innerText = compscore;
        msg.innerText = `You Lose. ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "wheat"
    }   
}


const getcompchoice = () =>{
    let option = ["rock", "paper" ,"scissors"];
    let randomidx = Math.floor(Math.random()*3);
    return option[randomidx];
}

const drawgame = () =>{
    msg.innerText = "It is a Draw. Play Again";
    msg.style.backgroundColor = "#56E39F"
    msg.style.color = "black"
}

const playgame = (userchoice) =>{
    let compchoice = getcompchoice();

    if(userchoice === compchoice){
        drawgame();
    }

    else if(userchoice === "rock"){
        userwin = compchoice === "paper" ? false : true;
        printwin(userwin , userchoice , compchoice);
    }

    else if(userchoice === "paper"){
        userwin = compchoice === "scissors" ? false : true;
        printwin(userwin , userchoice , compchoice);
    }

    else{
        userwin = compchoice === "rock" && userchoice === "scissor" ? false : true;
        printwin(userwin , userchoice , compchoice);
    }

    
}

choices.forEach((choice) => {
    let userchoice = choice.getAttribute("id");
    choice.addEventListener("click", () =>{
        playgame(userchoice);
    })
});

restBtn.addEventListener("click",()=>{
    compscore = 0;
    userscore = 0;
    document.querySelector("#comp-score").innerText = compscore;
    document.querySelector("#user-score").innerText = userscore;
    msg.style.backgroundColor = "skyblue"
    msg.innerText = `Start Again`;
    msg.style.color = "brown";
    playgame(userchoice);
    
})

