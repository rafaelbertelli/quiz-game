import React, { useEffect, useState } from "react";
import Questionario from "../components/Questionario";
import QuestaoModel from "../model/questao";
import { useRouter } from "next/router";

const BASE_URL = "http://localhost:3000/api";

export default function Home() {
  const router = useRouter();

  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([]);
  const [questao, setQuestao] = useState<QuestaoModel>();
  const [respostasCertas, setRespostasCertas] = useState<number>(0);

  async function carregarIdsDasQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`);
    const idsDasQuestoesJson = await resp.json();
    setIdsDasQuestoes(idsDasQuestoesJson);
  }

  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await resp.json();
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json);
    setQuestao(novaQuestao);
  }

  function questaoRespondida(qstRespondida: QuestaoModel) {
    setQuestao(qstRespondida);

    const acertou = qstRespondida.acertou;
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0));
  }

  function idProximaQuestao() {
    const proximoIndice = idsDasQuestoes.indexOf(questao?.id) + 1;
    return idsDasQuestoes[proximoIndice];
  }

  function irPraProximoPasso() {
    const proximoId = idProximaQuestao();
    if (proximoId) {
      irPraProximaQuestao(proximoId);
    } else {
      finalizar();
    }
  }

  function irPraProximaQuestao(idQuestao: number) {
    carregarQuestao(idQuestao);
  }

  function finalizar() {
    router.push({
      pathname: "/resultado",
      query: {
        total: idsDasQuestoes.length,
        certas: respostasCertas,
      },
    });
  }

  useEffect(() => {
    if (idsDasQuestoes.length > 0) {
      carregarQuestao(idsDasQuestoes[0]);
    }
  }, [idsDasQuestoes]);

  useEffect(() => {
    carregarIdsDasQuestoes();
  }, []);

  return questao ? (
    <Questionario
      questao={questao}
      ultima={idProximaQuestao() === undefined}
      questaoRespondida={questaoRespondida}
      irPraProximoPasso={irPraProximoPasso}
    />
  ) : null;
}
