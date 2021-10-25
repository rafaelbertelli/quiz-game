import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
  new QuestaoModel(
    1,
    "Quem é Ganesha",
    [
      RespostaModel.errada("Sei não"),
      RespostaModel.errada(
        "É um dos deuses supremos do hinduísmo, conhecido também como 'o destruidor e regenerador' da energia vital; significa o 'benéfico', aquele que faz o bem.  também é considerado o criador do Yoga (Ioga), devido ao seu poder de gerar transformações, físicas e emocionais, em quem pratica a atividade."
      ),
      RespostaModel.errada(
        "(em sânscrito पार्वती) é a Deusa Mãe no Hinduísmo e, nominalmente, a segunda consorte de Shiva, o deus hindu da destruição e renovação (a primeira é Sáti). No entanto, ela não é diferente de Sáti, sendo considerada a reencarnação da ex-consorte de Shiva."
      ),
      RespostaModel.certa(
        "É o deus do intelecto, da sabedoria e da fortuna para a tradição religiosa do hinduísmo e védica. De acordo com a mitologia hindu, é o primeiro filho de Shiva e Parvati, e considerado um dos deuses mais importantes desta cultura."
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
        "É um dos deuses supremos do hinduísmo, conhecido também como 'o destruidor e regenerador' da energia vital; significa o 'benéfico', aquele que faz o bem.  também é considerado o criador do Yoga (Ioga), devido ao seu poder de gerar transformações, físicas e emocionais, em quem pratica a atividade."
      ),
      RespostaModel.errada(
        "(em sânscrito पार्वती) é a Deusa Mãe no Hinduísmo e, nominalmente, a segunda consorte de Shiva, o deus hindu da destruição e renovação (a primeira é Sáti). No entanto, ela não é diferente de Sáti, sendo considerada a reencarnação da ex-consorte de Shiva."
      ),
      RespostaModel.errada(
        "É o deus do intelecto, da sabedoria e da fortuna para a tradição religiosa do hinduísmo e védica. De acordo com a mitologia hindu, é o primeiro filho de Shiva e Parvati, e considerado um dos deuses mais importantes desta cultura."
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
        "É um dos deuses supremos do hinduísmo, conhecido também como 'o destruidor e regenerador' da energia vital; significa o 'benéfico', aquele que faz o bem.  também é considerado o criador do Yoga (Ioga), devido ao seu poder de gerar transformações, físicas e emocionais, em quem pratica a atividade."
      ),
      RespostaModel.certa(
        "(em sânscrito पार्वती) é a Deusa Mãe no Hinduísmo e, nominalmente, a segunda consorte de Shiva, o deus hindu da destruição e renovação (a primeira é Sáti). No entanto, ela não é diferente de Sáti, sendo considerada a reencarnação da ex-consorte de Shiva."
      ),
      RespostaModel.errada(
        "É o deus do intelecto, da sabedoria e da fortuna para a tradição religiosa do hinduísmo e védica. De acordo com a mitologia hindu, é o primeiro filho de Shiva e Parvati, e considerado um dos deuses mais importantes desta cultura."
      ),
    ],
    false
  ),
];

export default questoes;
