import mongoose from "mongoose";
const jogoSchema = new mongoose.Schema({
  id: { type: String },
  jogo: { type: String },
  descricao: { type: String },
  imagem: { type: String },
  preco: { type: String },
  plataformas: { type: String },
  lojas: { type: String },
});

const jogos = mongoose.model("jogos", jogoSchema);

export default jogos;
