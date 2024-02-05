// importando a conexão que vem do arquivo cconexao que fica na pasta infra

/* 
- Seguindo uma organização de código chamado padrão MVC, dividimos ele em três pastas, teremos a partir de agora CONTROLLERS(responsável pela lógica do controller a ser enviada para o app, para a execução), DATABASE(onde fica tudo em relação aao banco de dados) e REPOSITORY(onde fica toda a questão de regra de negócio).

- Nesse caso estamos trabalhando com o controller de selecoes, onde fica toda a chamada para selecoes, mas poderiamos ter muitos outros controller dentro dessa API.
*/


import conexao from "../database/conexao.js";

class SelecaoController {
  read(req, res) {
    const sql = "SELECT * FROM SELECOES;";
    conexao.query(sql, (error, result) => {
      if (error) {
        res.status(404).json({
          message: "Não foi encontrado",
          error: error,
          statusCode: res.statusCode,
        });
      } else {
        res.status(200).json(result);
      }
    });
  }

  readId(req, res) {
    const id = req.params.id;

    const sql = "SELECT * FROM SELECOES WHERE id=?;";

    conexao.query(sql, id, (error, result) => {
      const row = result[0];
      if (error) {
        res.status(404).json({
          message: "Não foi encontrado",
          error: error,
          statusCode: res.statusCode,
        });
      } else {
        res.status(200).json(row);
      }
    });
  }

  create(req, res) {
    const bodySelecao = req.body;

    const sql = "INSERT INTO SELECOES SET ?;";

    conexao.query(sql, bodySelecao, (error, result) => {
      if (error) {
        res.status(404).json({
          message: "Não foi encontrado",
          error: error,
          statusCode: res.statusCode,
        });
      } else {
        res.status(201).json(result[0]);
      }
    });
  }

  delete(req, res) {
    const id = req.params.id;
    const sql = "DELETE FROM SELECOES WHERE id=?;";
    conexao.query(sql, id, (error, result) => {
      if (error) {
        res.status(404).json({
          message: "Não foi encontrado",
          error: error,
          statusCode: res.statusCode,
        });
      } else {
        res.status(200).json(result);
      }
    });
  }

  update(req, res) {
    const id = req.params.id;
    const body = req.body;
    const sql = "UPDATE SELECOES SET ? WHERE id =?;";

    conexao.query(sql, [body, id], (error, result) => {
      const linha = result[0];
      if (error) {
        res.status(404).json({
          message: `O id: ${id}, não foi encontrado`,
          statusCode: res.statusCode(),
        });
      } else {
        res.status(200).json(linha);
      }
    });
  }
}

export default new SelecaoController();
