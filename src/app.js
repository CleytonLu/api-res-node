import express from "express";

export const app = express();

// expecificar para o exepress ler json
app.use(express.json())

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
    res.status(404).send("Oh, deu ruim!");
  }
});

app.post("/selecoes", (req, res) => {
  try {
    selecoes.push(req.body);
    res.status(201).send(req.body);
  } catch (error) {
    res.status(400).send({ message: error.message, data: "" });
  }
});
