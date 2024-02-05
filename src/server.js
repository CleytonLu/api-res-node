import { app } from "./app.js";

const port = 3000;

// Escuta a execução da porta (isso inicia o back)
app.listen(port, () => {
  console.log(`Servidor rodando na porta: http://localhost:${port}`);
});
