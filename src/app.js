import express from "express";
import SelecaoController from "./app/controllers/SelecaoController.js";
// importando a conexão que vem do arquivo cconexao que fica na pasta infra
// import conexao from "./app/database/conexao.js";

export const app = express();

// expecificar para o exepress ler json
app.use(express.json());

// Rotas

app.get("/selecoes", SelecaoController.read);

app.get("/selecoes/:id", SelecaoController.readId);

app.post("/selecoes", SelecaoController.create);

app.delete("/selecoes/:id", SelecaoController.delete);

app.put("/selecoes/:id", SelecaoController.update);
