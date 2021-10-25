import { useState } from "react";
import Questao from "../components/Questao";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";

const questaoMock = new QuestaoModel(
  1,
  "Melhor cor?",
  [
    RespostaModel.errada("verde"),
    RespostaModel.errada("vermelho"),
    RespostaModel.errada("laranja"),
    RespostaModel.certa("amarelo"),
  ],
  false
);

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock);

  function tempoEsgotado() {
    setQuestao(questao.responderCom(-1));
  }

  function respostaFornecida(indice: number) {
    if (questao.naoRespondida) {
      setQuestao(questao.responderCom(indice));
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Questao
        valor={questao}
        respostaFornecida={respostaFornecida}
        tempoEsgotado={tempoEsgotado}
        // tempoPraResponder={10}
      />
    </div>
  );
}
