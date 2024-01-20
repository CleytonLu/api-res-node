const express = require("express");
const app = express();
const port = 3000;

// criar rota padrão ou raiz

app.get("/", (req, res) => {
  res.send("Olá Mundo!");
});

// Escutar a execução da porta

app.listen(port, () => {
  console.log(`Servidor rodando na porta: http:localhost:${port}`);
});
