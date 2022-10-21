import express from "express";
import db from "./config/dbConnect.js";
import jogos from "./models/Jogo.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

const apps = express();

apps.get("/", (req, res) => {
  res.status(200).send("SmartGameskkk");
});

apps.get("/jogos", (req, res) => {
  jogos.find((err, jogos) => {
    res.status(200).json(jogos);
  });
});

export default apps;
