const express = require("express");
const app = express();
const main = require("./main/main");
const port = 3000;
const path = require("path");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname+"/static/css")));

app.use(express.static(path.join(__dirname+"/static/js")));

app.use("/", main);

//app.use("/contacts", contacts);

app.listen(port, () => console.log("Online"));