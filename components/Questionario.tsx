import QuestaoModel from "../model/questao";
import styles from "../styles/Questionario.module.css";
import Botao from "./Botao";
import Questao from "./Questao";

interface QuestionarioProps {
  questao: QuestaoModel;
  ultima: boolean;
  questaoRespondida: (questao: QuestaoModel) => void;
  irPraProximoPasso: () => void;
}

const TEMPO_RESPOSTA = 10;

export default function Questionario(props: QuestionarioProps) {
  function respostaFornecida(indice: number) {
    if (props.questao.naoRespondida) {
      props.questaoRespondida(props.questao.responderCom(indice));
    }
  }

  return (
    <div className={styles.questionario}>
      {props.questao && (
        <Questao
          valor={props.questao}
          tempoPraResponder={TEMPO_RESPOSTA}
          respostaFornecida={respostaFornecida}
          tempoEsgotado={props.irPraProximoPasso}
        />
      )}

      <Botao
        onClick={props.irPraProximoPasso}
        texto={props.ultima ? "Finalizar" : "Próxima"}
      />
    </div>
  );
}
