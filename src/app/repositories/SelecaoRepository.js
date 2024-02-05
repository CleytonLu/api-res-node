/*
- Seguindo o padrão MVC temos a divisão de responsabilidades em 3 patas diferentes, Controllers(que é onde é feito controle do que é retornado na rota), Database(onde fica tudo da conexão do banco de dados) ee repository(onde fica tudo em relação ao regra com o banco)

- Nesse caso, estivemos em repository, onde fizemos toda lógica em relaçao ao banco de dados, tornando tudo masi limpo no controller.

*/

// importando a conexão que vem do arquivo cconexao que fica na pasta infra
import { consult } from "../database/conexao.js";

class SelecaoRepository {
  // CRUD

  create(selecao) {
    const sql = "INSERT INTO SELECOES SET ?;";

    return consult(sql, selecao, "Não foi possível criar!");
  }

  findAll() {
    const sql = "SELECT * FROM SELECOES;";

    return consult(sql, "Não foi possível encontrar!");
  }

  findById(id) {
    const sql = "SELECT * FROM SELECOES WHERE id=?;";

    return consult(sql, id, "Não foi possível encontrar!");
  }

  update(body, id) {
    const sql = "UPDATE SELECOES SET ? WHERE id =?;";

    return consult(
      sql,
      [body, id],
      "Não foi possível encontrar para poder realizar a atualização!"
    );
  }

  delete(id) {
    const sql = "DELETE FROM SELECOES WHERE id=?;";

    return consult(sql, id, "Não foi possível encontrar para deletar!");
  }
}

export default new SelecaoRepository();
