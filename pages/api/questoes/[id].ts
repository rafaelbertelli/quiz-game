import questoes from "../bancoDeQuestoes";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const idSelecionado = +req.query.id;

  const questaoSelecionada = questoes.find((q) => q.id === idSelecionado);

  if (questaoSelecionada) {
    res.status(200).json(questaoSelecionada.embaralharRespostas().paraObjeto());
  } else {
    res.status(204).send();
  }
}
