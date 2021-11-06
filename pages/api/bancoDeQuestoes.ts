import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
  new QuestaoModel(
    1,
    "Quem é Ganesha",
    [
      RespostaModel.errada("Sei não"),
      RespostaModel.errada(
        "É um dos deuses supremos do hinduísmo"
      ),
      RespostaModel.errada(
        "(em sânscrito पार्वती) é a Deusa Mãe no Hinduísmo"
      ),
      RespostaModel.certa(
        "É o deus do intelecto, da sabedoria e da fortuna"
      ),
    ],
    false
  ),

  new QuestaoModel(
    2,
    "Quem é Shiva",
    [
      RespostaModel.errada("Sei não"),
      RespostaModel.certa(
        "É um dos deuses supremos do hinduísmo"
      ),
      RespostaModel.errada(
        "(em sânscrito पार्वती) é a Deusa Mãe no Hinduísmo"
      ),
      RespostaModel.errada(
        "É o deus do intelecto, da sabedoria e da fortuna"
      ),
    ],
    false
  ),

  new QuestaoModel(
    3,
    "Quem é Parvati",
    [
      RespostaModel.errada("Sei não"),
      RespostaModel.errada(
        "É um dos deuses supremos do hinduísmo"
      ),
      RespostaModel.certa(
        "(em sânscrito पार्वती) é a Deusa Mãe no Hinduísmo"
      ),
      RespostaModel.errada(
        "É o deus do intelecto, da sabedoria e da fortuna"
      ),
    ],
    false
  ),
];

export default questoes;
