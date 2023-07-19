import { Badge, Reward } from "../interfaces";
import КузьменкоИгорь from "../assets/images/Кузьменко Игорь Владимирович1.jpeg";
import { leaders } from "./tournamen-leaders";

export const tournaments = {
  isArchiveButtonNeeds: true,
  ratingCategories: [
    {
      ratingCategoryName: "Вы в лидерах",
      tournaments: [
        {
          employee: {
            employeeNumber: "22",
            photoData: КузьменкоИгорь,
            firstName: "Игорь",
            lastName: "Кузьменко",
            colorCode: {
              primary: "blue-60",
              secondary: "blue-30",
            },
          },
          tournamentId: "T1",
          tournamentName: "Марафон по условным сделкам",
          tournamentInfo: "Осталось 2 дня",
          tournamentDurationName: "ТУРНИР НЕДЕЛИ",
          progressBarValue: 70,
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          reward: Reward.gold,
          rating: [
            {
              divisionLevelResult: "из 33 в стране",
              placeInRating: 12,
            },
            {
              divisionLevelResult: "из 3 в ТБ",
              placeInRating: 2,
              reward: {
                icon: Reward.silver,
                tooltip: "Претендент на победу",
              },
            },
            {
              divisionLevelResult: "из 1 в ГОСБ",
              placeInRating: 1,
              reward: {
                icon: Reward.gold,
                tooltip: "Претендент на победу",
              },
            },
          ],
        },
      ],
    },
    {
      ratingCategoryName: "Успейте поучаствовать",
      tournaments: [
        {
          tournamentId: "T2",
          tournamentName: "Марафон по условным сделкам",
          tournamentInfo: "Осталось 4 дня",
          tournamentDurationName: "ТУРНИР НЕДЕЛИ",
          progressBarValue: 50,
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          reward: undefined,
          rating: [
            {
              divisionLevelResult: "33 в стране",
            },
            {
              divisionLevelResult: "3 в ТБ",
            },
          ],
        },
      ],
    },
  ],
};

export const cluster = {
  text: "В вашем тербанке",
  amount: "11 ГОСБ",
  divisions: [
    "ББ",
    "ВВБ",
    "ДВБ",
    "МБ",
    "ПБ",
    "СЗБ",
    "СИБ",
    "СРБ",
    "УБ",
    "ЦЧБ",
    "ЮЗБ",
  ],
};

export const tournamentID = [
  {
    tournamentId: "T1",
    hasNftMark: true,
    tournamentName: "Марафон по условным сделкам",
    status: "ACTIVE",
    ratingCategoryName: "Вы в лидерах",
    tournamentInfo: "Осталось 5 дней",
    tournamentDurationName: "турнир недели",
    lasting: "24 июля 2023 - 30 июля 2023",
    percentageIndicator: 70,
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
    rating: [
      {
        divisionLevelName: "Страна",
        contestants: 33,
        placeInRating: 5,
      },
      {
        divisionLevelName: "Тербанк",
        contestants: 3,
        placeInRating: 2,
        reward: {
          icon: "SILVER_LIGHTNING",
          tooltip: "Претендент на победу",
        },
      },
      {
        divisionLevelName: "ГОСБ",
        contestants: 1,
        placeInRating: 1,
        reward: {
          icon: "GOLD_LIGHTNING",
          tooltip: "Претендент на победу",
        },
      },
    ],
    totalParticipants: "33 участников",
    specification: {
      description:
        "Том Лонгбоут по праву считается величайшим марафонцем всех времен!\n" +
        "Бери пример с лучших - закрывай каждую полную неделю турнира минимум 2 условные сделки. Если в какую-либо неделю условие не выполняется - участник выбывает из гонки.\n" +
        "\n" +
        "Покажешь результат по сумме УС лучше всех - станешь победителем турнира. Удачи!",
      features: [
        {
          number: 1,
          feature: "В турнире разыгрывается три комплекта наград",
        },
      ],
    },
    rewards: [
      {
        divisionLevelName: "Страна",
        rewardRule:
          "Бейдж получит 1% от числа участников турнира по всей стране",
        badgeId: "00024",
        badgeName: "Чемпион страны по условным сделкам",
        imageId: Badge.ConditionalsChampionFirst,
        badgeIcon: Badge.ConditionalsChampionFirst,
        rewardCrystalCount: 30,
        hasNftMark: true,
      },
      {
        divisionLevelName: "Тербанк",
        rewardRule: "Бейдж получат 7% от числа участников турнира в вашем ТБ",
        badgeId: "00025",
        badgeName: "Чемпион ТБ по условным сделкам",
        imageId: Badge.ConditionalsChampionSecond,
        badgeIcon: Badge.ConditionalsChampionSecond,
        rewardCrystalCount: 15,
        hasNftMark: false,
      },
      {
        divisionLevelName: "ГОСБ",
        rewardRule:
          "Бейдж получат 10% от числа участников турнира в вашем подразделении",
        badgeId: "00026",
        badgeName: "Чемпион подразделения по условным сделкам",
        imageId: Badge.ConditionalsChampionThird,
        badgeIcon: Badge.ConditionalsChampionThird,
        rewardCrystalCount: 5,
        hasNftMark: false,
      },
    ],
  },
  {
    tournamentId: "T2",
    hasNftMark: true,
    tournamentName: "Марафон по условным сделкам",
    status: "ACTIVE",
    ratingCategoryName: "Вы в лидерах",
    tournamentInfo: "Осталось 4 дней",
    tournamentDurationName: "турнир недели",
    lasting: "17 июля 2023 - 23 июля 2023",
    percentageIndicator: 70,
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
    rating: [],
    totalParticipants: "33 участников",
    specification: {
      description:
        "Том Лонгбоут по праву считается величайшим марафонцем всех времен!\n" +
        "Бери пример с лучших - закрывай каждую полную неделю турнира минимум 2 условные сделки. Если в какую-либо неделю условие не выполняется - участник выбывает из гонки.\n" +
        "\n" +
        "Покажешь результат по сумме УС лучше всех - станешь победителем турнира. Удачи!",
      features: [
        {
          number: 1,
          feature: "В турнире разыгрывается три комплекта наград",
        },
      ],
    },
    rewards: [
      {
        divisionLevelName: "Страна",
        rewardRule:
          "Бейдж получит 1% от числа участников турнира по всей стране",
        badgeId: "00024",
        badgeName: "Чемпион страны по условным сделкам",
        imageId: Badge.ConditionalsChampionFirst,
        badgeIcon: Badge.ConditionalsChampionFirst,
        rewardCrystalCount: 30,
        hasNftMark: true,
      },
      {
        divisionLevelName: "Тербанк",
        rewardRule: "Бейдж получат 7% от числа участников турнира в вашем ТБ",
        badgeId: "00025",
        badgeName: "Чемпион ТБ по условным сделкам",
        imageId: Badge.ConditionalsChampionSecond,
        badgeIcon: Badge.ConditionalsChampionSecond,
        rewardCrystalCount: 15,
        hasNftMark: false,
      },
      {
        divisionLevelName: "ГОСБ",
        rewardRule:
          "Бейдж получат 10% от числа участников турнира в вашем подразделении",
        badgeId: "00026",
        badgeName: "Чемпион подразделения по условным сделкам",
        imageId: Badge.ConditionalsChampionThird,
        badgeIcon: Badge.ConditionalsChampionThird,
        rewardCrystalCount: 5,
        hasNftMark: false,
      },
    ],
  },
];

export const archiveTournamentId = {
  tournamentId: "T3",
  hasNftMark: true,
  tournamentName: "Марафон по условным сделкам",
  status: "ACTIVE",
  ratingCategoryName: "Вы в лидерах",
  tournamentDurationName: "Турнир недели",
  lasting: "03 июля — 09 июля 2023",
  updateTooltip:
    "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
  rating: [
    {
      divisionLevelName: "Страна",
      contestants: 33,
      placeInRating: 5,
      reward: {
        icon: "GOLD_LIGHTNING",
        tooltip: "Претендент на победу",
      },
    },
    {
      divisionLevelName: "Тербанк",
      contestants: 3,
      placeInRating: 2,
      reward: {
        icon: "SILVER_LIGHTNING",
        tooltip: "Претендент на победу",
      },
    },
    {
      divisionLevelName: "ГОСБ",
      contestants: 1,
      placeInRating: 1,
      reward: {
        icon: "GOLD_LIGHTNING",
        tooltip: "Претендент на победу",
      },
    },
  ],
  totalParticipants: "33 участников",
  specification: {
    description:
      "Том Лонгбоут по праву считается величайшим марафонцем всех времен!\n" +
      "Бери пример с лучших - закрывай каждую полную неделю турнира минимум 2 условные сделки. Если в какую-либо неделю условие не выполняется - участник выбывает из гонки.\n" +
      "\n" +
      "Покажешь результат по сумме УС лучше всех - станешь победителем турнира. Удачи!",
    features: [
      {
        number: 1,
        feature: "В турнире разыгрывается три комплекта наград",
      },
    ],
  },
  rewards: [
    {
      divisionLevelName: "Страна",
      rewardRule: "Бейдж получит 1% от числа участников турнира по всей стране",
      badgeId: "00024",
      badgeName: "Чемпион страны по условным сделкам",
      imageId: Badge.ConditionalsChampionFirst,
      badgeIcon: Badge.ConditionalsChampionFirst,
      rewardCrystalCount: 30,
      hasNftMark: true,
    },
    {
      divisionLevelName: "Тербанк",
      rewardRule: "Бейдж получат 7% от числа участников турнира в вашем ТБ",
      badgeId: "00025",
      badgeName: "Чемпион ТБ по условным сделкам",
      imageId: Badge.ConditionalsChampionSecond,
      badgeIcon: Badge.ConditionalsChampionSecond,
      rewardCrystalCount: 15,
      hasNftMark: false,
    },
    {
      divisionLevelName: "ГОСБ",
      rewardRule:
        "Бейдж получат 10% от числа участников турнира в вашем подразделении",
      badgeId: "00026",
      badgeName: "Чемпион подразделения по условным сделкам",
      imageId: Badge.ConditionalsChampionThird,
      badgeIcon: Badge.ConditionalsChampionThird,
      rewardCrystalCount: 5,
      hasNftMark: false,
    },
  ],
};

export const tournamentShortList = [
  {
    divisionLevelName: "Страна",
    tournamentIndicator: "Ставка",
    contestants: "1 250 участников",
    leaders,
  },
  {
    divisionLevelName: "Тербанк",
    tournamentIndicator: "Ставка",
    contestants: "1 250 участников",
    leaders: [
      {
        employeeNumber: "010122",
        lastName: "Герасимчук",
        firstName: "Илья",
        photoData: "URL_in_Base64",
        indicatorValue: "22,6 %",
        placeInRating: 22,
        reward: {
          lightning: Reward.silver,
          tooltip: "Претендент на победу",
        },
        terDivisionName: "ЦА",
        isMarked: true,
        colorCode: {
          primary: "blue-60",
          secondary: "blue-30",
        },
      },
    ],
  },
  {
    divisionLevelName: "ГОСБ",
    tournamentIndicator: "Ставка",
    contestants: "1 250 участников",
    leaders: [
      {
        employeeNumber: "010122",
        lastName: "Герасимчук",
        firstName: "Илья",
        photoData: "URL_in_Base64",
        indicatorValue: "22,6 %",
        placeInRating: 22,
        reward: {
          lightning: Reward.gold,
          tooltip: "Претендент на победу",
        },
        terDivisionName: "ЦА",
        isMarked: true,
        colorCode: {
          primary: "blue-60",
          secondary: "blue-30",
        },
      },
    ],
  },
];

export const tournamentFullList = {
  tournamentId: "5708a086-f0ba-47f4-92ec-afc49ab1aa62",
  tournamentIndicator: "Ставка",
  contestants: "1250 участников",
  leaders: [
    {
      employeeNumber: "010122",
      lastName: "Герасимчук",
      firstName: "Илья",
      photoData: "URL_in_Base64",
      indicatorValue: "22,6 %",
      placeInRating: 1,
      reward: {
        icon: Reward.silver,
        tooltip: "Победитель турнира",
      },
      terDivisionName: "ЦА",
      isMarked: true,
      colorCode: {
        primary: "blue-60",
        secondary: "blue-30",
      },
    },
  ],
};

export const archiveTournaments = {
  tournaments: [
    {
      employee: {
        employeeNumber: "22",
        photoData: КузьменкоИгорь,
        firstName: "Игорь",
        lastName: "Кузьменко",
        colorCode: {
          primary: "blue-60",
          secondary: "blue-30",
        },
      },
      tournamentId: "T3",
      tournamentName: "Марафон по условным сделкам",
      tournamentInfo: "Турнир недели завершён • 07.03–07.09.23",
      tournamentDurationName: "",
      reward: Reward.gold,
      rating: [
        {
          divisionLevelResult: "из 33 в стране",
          placeInRating: 5,
        },
        {
          divisionLevelResult: "из 3 в стране",
          placeInRating: 2,
          reward: {
            icon: Reward.silver,
            tooltip: "Победитель турнира",
          },
        },
        {
          divisionLevelResult: "из 1 в стране",
          placeInRating: 1,
          reward: {
            icon: Reward.gold,
            tooltip: "Победитель турнира",
          },
        },
      ],
    },
  ],
};
