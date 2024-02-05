import { app } from "./app.js";

const port = process.env.PORT || 3000;

// Escuta a execução da porta (isso inicia o back)
app.listen(port, () => {
  try {
    console.log(`Servidor rodando na porta: http://localhost:${port}`);
  } catch (error) {
    console.log(`Deu erro na conexão do servidor, erro: ${error}`);
  }
});
