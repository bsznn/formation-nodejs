const createError = require("http-errors");
const fs = require("fs");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

/* --------------------------------- Accueil -------------------------------- */
app.get("/", (req, res) => {
  fs.readFile(`${__dirname}/public/kittens.json`, "utf-8", (err, data) => {
    const cats = JSON.parse(data);

    res.render("home", { cats });
  });
});

/* ------------------------------- Page detail ------------------------------ */
app.get("/:id", (req, res) => {
  const params = req.params;
  console.log(params);

  fs.readFile(`${__dirname}/public/kittens.json`, "utf-8", (err, data) => {
    const cats = JSON.parse(data);

    const item = cats.find((element) => element.id === parseInt(params.id));

    if (!item) res.render("error");

    res.render("detail", { cat: item });
  });
});

module.exports = app;
