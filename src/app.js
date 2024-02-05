import express from "express";
import { router } from "./routes.js";

export const app = express();

// Usando router

app.use(router);

// expecificar para o exepress ler json
app.use(express.json());
