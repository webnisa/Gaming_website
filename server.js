const express = require("express");
const app = express();
const path = require("path");

require("dotenv").config();


const userRouter = require("./routers/userRouter");
const gamesRouter = require("./routers/gameRouter");

const userController = require("./controller/userConntoller");
const gamesController = require("./controller/gamesController");

const session = require("express-session");


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({extended: false}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized : false

}));
// app.use(userRouter);
// // app.use(gamesRouter);
app.get("/", (req, res) => {
  res.redirect("/home");
});
app.use("/home",gamesController.home);
app.use("/user", userRouter);
app.use("/games", gamesRouter);

const port = 3000;
app.listen(port, ()=>{
  console.log(`server is running on http://localhost:${port}`);
}); 