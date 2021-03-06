import RespostaModel from "../model/resposta";
import styles from "../styles/Resposta.module.css";

interface RespostaProps {
  valor: RespostaModel;
  indice: number;
  letra: string;
  corFundoLetra: string;
  respostaFornecida: (indice: number) => void;
}

export default function Resposta(props: RespostaProps) {
  const resposta = props.valor;
  const respostaReveladaCss = resposta.revelada ? styles.respostaRevelada : "";

  function respostaOculta() {
    return (
      <>
        <div
          className={styles.letra}
          style={{ backgroundColor: props.corFundoLetra }}
        >
          {props.letra}
        </div>
        <div className={styles.valor}>{resposta.valor}</div>
      </>
    );
  }

  function respostaRevelada() {
    function respostaCerta() {
      return (
        <div className={styles.certa}>
          <div>A resposta certa é...</div>
          <div className={styles.valor}>{resposta.valor}</div>
        </div>
      );
    }

    function respostaErrada() {
      return (
        <div className={styles.errada}>
          <div>A resposta informada está errada</div>
          <div className={styles.valor}>{resposta.valor}</div>
        </div>
      );
    }

    return resposta.certa ? respostaCerta() : respostaErrada();
  }

  return (
    <div
      className={styles.resposta}
      onClick={() => props.respostaFornecida(props.indice)}
    >
      <div className={`${respostaReveladaCss} ${styles.conteudoResposta}`}>
        <div className={styles.frente}>{respostaOculta()}</div>
        <div className={styles.verso}>{respostaRevelada()}</div>
      </div>
    </div>
  );
}
