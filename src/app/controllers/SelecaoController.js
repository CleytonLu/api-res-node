/* 
- Seguindo uma organização de código chamado padrão MVC, dividimos ele em três pastas, teremos a partir de agora CONTROLLERS(responsável pela lógica do controller a ser enviada para o app, para a execução), DATABASE(onde fica tudo em relação aao banco de dados) e REPOSITORY(onde fica toda a questão de regra de negócio).

- Nesse caso estamos trabalhando com o controller de selecoes, onde fica toda a chamada para selecoes, mas poderiamos ter muitos outros controller dentro dessa API.
*/

import SelecaoRepository from "../repositories/SelecaoRepository.js";

class SelecaoController {
  async read(req, res) {
    const row = await SelecaoRepository.findAll();
    res.json(row);
  }

  async readId(req, res) {
    const id = req.params.id;

    const row = await SelecaoRepository.findById(id);

    res.json(row);
  }

  create(req, res) {
    const bodySelecao = req.body;

    const row = SelecaoRepository(bodySelecao);

    res.json(row);
  }

  async delete(req, res) {
    const id = req.params.id;

    const row = SelecaoRepository.delete(id);

    res.json(row);
  }

  async update(req, res) {
    const id = req.params.id;
    const body = req.body;
    const row = await SelecaoRepository.update(body, id);

    res.json(row);
  }
}

export default new SelecaoController();
