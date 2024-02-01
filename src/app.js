import express from "express";

export const app = express();

// expecificar para o exepress ler json
app.use(express.json());

// mock

const buscarSelecaoPorId = (id) => {
  return selecoes.filter((selecao) => selecao.id == id);
};

const buscarIndexSelecao = (id) => {
  return selecoes.findIndex((selecao) => selecao.id == id);
};

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

// get por id
app.get("/selecoes/:id", (req, res) => {
  const index = req.params.id;

  const verifyId = buscarSelecaoPorId(index);

  try {
    if (verifyId != null) res.json(verifyId);
    return res.status(404).send({ message: error.message, data: "" });
  } catch (error) {
    res.status(400).send({ message: error.message, data: "" });
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

app.delete("/selecoes/:id", (req, res) => {
  const id = req.params.id;
  const index = buscarIndexSelecao(id);
  selecoes.splice(index, 1);
  res.status(200).send(`Seleção com o id: ${id}, excluída com sucesso!`);
});
