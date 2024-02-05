/*
- O arquivo routes, serve para acoplar todas as rotas e mandar para o app, apenas aquilo o chamado dela, e assim de forma mais limpa poder acessar as rotas e utilizar os métodos
*/

import { Router } from "express";
import SelecaoController from "./app/controllers/SelecaoController.js";

export const router = Router();

// Rotas

router.get("/selecoes", SelecaoController.read);
router.get("/selecoes/:id", SelecaoController.readId);
router.post("/selecoes", SelecaoController.create);
router.delete("/selecoes/:id", SelecaoController.delete);
router.put("/selecoes/:id", SelecaoController.update);
