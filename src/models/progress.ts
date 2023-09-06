import { Reward } from "../interfaces";

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
