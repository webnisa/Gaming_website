const gamemodule = require("../module/gamesModule");

let jsFile = "";
let cssFile = "";
let pageTitle = "";

exports.games = (req, res, next)=>{
  
  const gameId = req.params.gameId;

  if(gameId === "1"){
    cssFile = "/css/games/game1.css";
    jsFile = "/games/game1.js";
    pageTitle = "Rock paper seiccor".toUpperCase();
  }
  else if(gameId === "2"){
    cssFile = "/css/games/game2.css";
    jsFile = "/games/game2.js";
    pageTitle = "TICK TOCK TOE".toUpperCase();
  }
  else if(gameId === "3"){
    cssFile = "/css/games/game3.css";
    jsFile = "/games/game3.js";
    pageTitle = "Play music".toUpperCase();
  }
  else if(gameId === "4"){
    cssFile = "/css/games/game4.css";
    jsFile = "/games/game4.js";
    pageTitle = "Whole-a-Mole".toUpperCase();
  }
  else if(gameId === "5"){
    cssFile = "/css/games/game5.css";
    jsFile = "/games/game5.js";
    pageTitle = "collect the food".toUpperCase();
  }
  else if(gameId === "6"){
    cssFile = "/css/games/game6.css";
    jsFile = "/games/game6.js";
    pageTitle = "Flip the card".toUpperCase();
  }
   else {
        return res.send("Game not found");
    }

    res.render("games",{cssFile, jsFile, pageTitle});
}

exports.home = (req, res)=>{

  res.render("home", {

    isLoggedIn : req.session.isLoggedIn,

    user : req.session.user

  });

};