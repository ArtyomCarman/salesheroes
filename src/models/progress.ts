import { Badge, Reward } from "../interfaces";

export const progress = {
  crystals: {
    crystalsEarned: 120,
  },
  userLevel: {
    currentLevelName: "Мастер",
    colorCode: {
      primary: "blue-60",
      secondary: "blue-30",
    },
  },
  levelsDirectory: [
    {
      name: "Специалист",
      code: "1",
      lowBound: 0,
      achievementConditions: "0-50",
      colorCode: {
        primary: "light-green-30",
        secondary: "light-green-20",
      },
    },
    {
      name: "Эксперт",
      code: "2",
      lowBound: 50,
      achievementConditions: "50-100",
      colorCode: {
        primary: "orange-60",
        secondary: "orange-30",
      },
    },
    {
      name: "Мастер",
      code: "3",
      lowBound: 100,
      achievementConditions: "100+",
      colorCode: {
        primary: "blue-60",
        secondary: "blue-30",
      },
    },
  ],
};

export const progressRating = [
  {
    divisionLevel: "Страна",
    updateNumber: "+1",
    placeInRating: 7,
    divisionLevelResult: "из 1243",
    reward: Reward.silver,
  },
  {
    divisionLevel: "Тербанк",
    updateNumber: "+2",
    placeInRating: 1,
    divisionLevelResult: "из 33",
    reward: Reward.silver,
  },
  {
    divisionLevel: "ГОСБ",
    updateNumber: null,
    placeInRating: 1,
    divisionLevelResult: "из 15",
    reward: Reward.gold,
  },
];

export const progressTournamentAwards = [
  {
    award: {
      awardName: Badge.ConditionalsChampionThird,
      hasNft: false,
      colorCode: {
        primary: "rgba(255, 181, 59, 0.48)",
        secondary: "rgba(255, 108, 12, 0.48)",
      },
    },
    crystalEarned: 50,
    text: "<span style='font-weight: 600'>Вы победили</span> в турнире среди 15 участников в вашем подразделении",
    tournament: {
      tournamentName: "Максимальный прирост условных сделок",
      tournamentDate: "Турнир завершён",
    },
  },
  {
    award: {
      awardName: Badge.ConditionalsChampionFirst,
      hasNft: true,
      colorCode: {
        primary: "rgba(255, 181, 59, 0.48)",
        secondary: "rgba(255, 108, 12, 0.48)",
        tertiary: "rgba(135, 90, 192, 0.70)",
      },
    },
    crystalEarned: 80,
    text: "<span style='font-weight: 600'>Вы победили</span> турнире среди 1250 участников по стране и выиграли NFT-награду",
    tournament: {
      tournamentName: "Максимальный прирост условных сделок",
      tournamentDate: "Турнир завершён",
    },
  },
];

export const progressAwards = [
  {
    infoText: "Получен новый бейдж",
    award: {
      awardName: Badge.Commission50k,
      hasNft: false,
      colorCode: {
        primary: "rgba(20, 188, 136, 0.3)",
        secondary: "rgba(20, 188, 136, 0.3)",
      },
    },
    crystalEarned: 20,
    text: "50 тыс. руб. комиссии по сделкам с Индией",
  },
  {
    infoText: "Прогресс в накоплении",
    award: {
      awardName: Badge.Commission200k,
      hasNft: false,
      colorCode: {
        primary: "rgba(86, 190, 249, 0.61)",
        secondary: "rgba(42, 66, 134, 0.61)",
      },
    },
    crystalEarned: 20,
    text: "50 тыс. руб. комиссии по сделкам с Индией",
    progressBarValue: 60,
    progressBarCount: "+27 090",
    leftToEarnText:
      "Осталось заработать комиссии на 53 820 тыс. руб. и награда ваша",
  },
];
