import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../styles/Temporizador.module.css";

interface TemporizadorProps {
  duracao: number;
  tempoEsgotado: () => void;
}

export default function Temporizador(props: TemporizadorProps) {
  return (
    <div className={styles.temporizador}>
      <CountdownCircleTimer
        isPlaying
        size={100}
        duration={props.duracao}
        colors={[
          ["#bce596", 0.33],
          ["#f7b801", 0.33],
          ["#ed827a", 0.33],
        ]}
        onComplete={props.tempoEsgotado}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}
