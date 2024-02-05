/*
- Seguindo o padrão MVC temos a divisão de responsabilidades em 3 patas diferentes, Controllers(que é onde é feito controle do que é retornado na rota), Database(onde fica tudo da conexão do banco de dados) ee repository(onde fica tudo em relação ao regra com o banco)

- Nesse caso, estivemos em repository, onde fizemos toda lógica em relaçao ao banco de dados, tornando tudo masi limpo no controller.

*/

// importando a conexão que vem do arquivo cconexao que fica na pasta infra
import conexao from "../database/conexao.js";

class SelecaoRepository {
  // CRUD

  create(selecao) {
    const sql = "INSERT INTO SELECOES SET ?;";

    return new Promise((resolve, reject) => {
      conexao.query(sql, selecao, (error, result) => {
        if (error) return reject({ message: "Não encontrado" });

        const row = JSON.parse(JSON.stringify(result));

        return resolve(row);
      });
    });
  }

  findAll() {
    const sql = "SELECT * FROM SELECOES;";

    return new Promise((resolve, reject) => {
      conexao.query(sql, (error, result) => {
        if (error) return reject({ message: "Não encontrado" });
        const rows = JSON.parse(JSON.stringify(result));

        return resolve(rows);
      });
    });
  }

  findById(id) {
    const sql = "SELECT * FROM SELECOES WHERE id=?;";

    return new Promise((resolve, reject) => {
      conexao.query(sql, id, (error, result) => {
        if (error) return reject({ message: "Não foi encontrado" });

        const row = JSON.parse(JSON.stringify(result));

        return resolve(row);
      });
    });
  }

  update(body, id) {
    const sql = "UPDATE SELECOES SET ? WHERE id =?;";

    return new Promise((resolve, reject) => {
      conexao.query(sql, [body, id], (error, result) => {
        if (error) return reject({ message: "Não foi encontrado" });

        const row = JSON.parse(JSON.parse(result));

        return resolve(row);
      });
    });
  }

  delete(id) {
    const sql = "DELETE FROM SELECOES WHERE id=?;";

    return new Promise((resolve, reject) => {
      conexao.query(sql, id, (error, result) => {
        if (error) return reject({ message: "Não foi encontrado" });

        const row = JSON.parse(JSON.stringify(result));

        return resolve(row);
      });
    });
  }
}

export default new SelecaoRepository();
