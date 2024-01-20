import express from "express";

export const app = express();

// mock

const selecoes = [
  { id: 1, selecao: "Brasil", grupo: "G" },
  { id: 2, selecao: "Suíça", grupo: "G" },
  { id: 3, selecao: "Sérvia", grupo: "G" },
  { id: 4, selecao: "Camarões", grupo: "G" },
];

// criar rota padrão ou raiz

app.get("/", (req, res) => {
  res.send("Olá Mundo!!!!");
});

app.get("/selecoes", (req, res) => {
  try {
    res.status(200).send(selecoes);
  } catch (error) {
    res.status(404).send("Oh, deu ruim!")
  }
});
