import { Badge, Reward } from "../interfaces";
import ГайнРоман from "../assets/images/romanGayn.png";
import { leaders } from "./tournamen-leaders";

const formatter = new Intl.DateTimeFormat("ru", {
  month: "long",
  day: "numeric",
});

const d = new Date();
d.setDate(d.getDate() - 1);

const date = formatter.format(d);

const date1 = new Date("09/30/2023"); // 30 сентября
const date2 = new Date();

const difference = date1.getTime() - date2.getTime();

const days = Math.ceil(difference / (1000 * 3600 * 24));

const daysLeft = days + 1;

export const tournaments = {
  isArchiveButtonNeeds: true,
  ratingCategories: [
    {
      ratingCategoryName: "Вы в лидерах",
      tournaments: [
        {
          employee: {
            profileNumber: "22",
            photoData: ГайнРоман,
            firstName: "Роман",
            lastName: "Гайн",
            colorCode: {
              primary: "blue-60",
              secondary: "blue-30",
            },
          },
          tournamentId: "T1",
          tournamentName: "Марафон по условным сделкам",
          tournamentInfo: `Осталось ${daysLeft} дней`,
          tournamentDurationName: "ТУРНИР МЕСЯЦА",
          progressBarValue: 15,
          updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
          reward: Reward.gold,
          rating: [
            {
              divisionLevelResult: "из 1 243 в стране",
              placeInRating: 4,
            },
            {
              divisionLevelResult: "из 152 в ТБ",
              placeInRating: 1,
              reward: {
                icon: Reward.gold,
                tooltip: "Претендент на победу",
              },
            },
            {
              divisionLevelResult: "из 11 в ГОСБ",
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
      ratingCategoryName: "Нужно поднажать",
      tournaments: [
        {
          tournamentId: "T2",
          tournamentName: "Максимальное сальдо выдач по кредитам",
          tournamentInfo: "Осталось 19 дней",
          tournamentDurationName: "ТУРНИР квартала",
          progressBarValue: 20,
          updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
          reward: undefined,
          rating: [
            {
              divisionLevelResult: "из 900 в стране",
              placeInRating: 4,
            },
            {
              divisionLevelResult: "из 80 в ТБ",
              placeInRating: 2,
              reward: {
                icon: Reward.silver,
                tooltip: "Претендент на победу",
              },
            },
            {
              divisionLevelResult: "из 7 в ГОСБ",
              placeInRating: 2,
              reward: {
                icon: Reward.silver,
                tooltip: "Претендент на победу",
              },
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
    tournamentInfo: `Осталось ${daysLeft} дней`,
    tournamentDurationName: "турнир месяца",
    lasting: "1 сентября 2023 - 30 сентября 2023",
    percentageIndicator: 15,
    updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
    rating: [
      {
        divisionLevelName: "Страна",
        contestants: "1 243",
        placeInRating: 4,
      },
      {
        divisionLevelName: "Тербанк",
        contestants: 152,
        placeInRating: 1,
        reward: {
          icon: "GOLD_LIGHTNING",
          tooltip: "Претендент на победу",
        },
      },
      {
        divisionLevelName: "ГОСБ",
        contestants: 11,
        placeInRating: 1,
        reward: {
          icon: "GOLD_LIGHTNING",
          tooltip: "Претендент на победу",
        },
      },
    ],
    totalParticipants: "1 243 участника",
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
    tournamentName: "Максимальное сальдо выдач по кредитам",
    status: "ACTIVE",
    ratingCategoryName: "Вы в лидерах",
    tournamentInfo: "Осталось 19 дней",
    tournamentDurationName: "турнир 3 недели",
    lasting: "9 сентября 2023 - 29 сентября 2023",
    percentageIndicator: 20,
    updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
    rating: [
      {
        divisionLevelName: "Страна",
        contestants: 900,
        placeInRating: 4,
      },
      {
        divisionLevelName: "ТБ",
        contestants: 80,
        placeInRating: 2,
        reward: {
          icon: Reward.silver,
          tooltip: "Претендент на победу",
        },
      },
      {
        divisionLevelName: "ГОСБ",
        contestants: 7,
        placeInRating: 2,
        reward: {
          icon: Reward.silver,
          tooltip: "Претендент на победу",
        },
      },
    ],
    totalParticipants: "900 участников",
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
    tournamentId: "T3",
    hasNftMark: true,
    tournamentName: "Максимальное сальдо выдач по кредитам",
    status: "ACTIVE",
    ratingCategoryName: "Вы в лидерах",
    tournamentInfo: `Осталось ${daysLeft} дней`,
    tournamentDurationName: "турнир квартала",
    lasting: "01 июля 2023 - 30 сентября 2023",
    percentageIndicator: 65,
    updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
    rating: [],
    totalParticipants: "33 участников",
    specification: {
      description:
        "Покажи максимальное среди коллег сальдо выдач-гашений по всем кредитным договорам своих клиентов ККСБ и стань победителем турнира.\n" +
        "В расчет учитываются только положительные сальдо.\n" +
        "Удачи!",
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
        badgeId: "00029",
        badgeName: "Чемпион страны по условным сделкам",
        imageId: Badge.AnchorGold,
        badgeIcon: Badge.AnchorGold,
        rewardCrystalCount: 30,
        hasNftMark: true,
      },
      {
        divisionLevelName: "Тербанк",
        rewardRule: "Бейдж получат 7% от числа участников турнира в вашем ТБ",
        badgeId: "00028",
        badgeName: "Чемпион ТБ по условным сделкам",
        imageId: Badge.AnchorSilver,
        badgeIcon: Badge.AnchorSilver,
        rewardCrystalCount: 15,
        hasNftMark: false,
      },
      {
        divisionLevelName: "ГОСБ",
        rewardRule:
          "Бейдж получат 10% от числа участников турнира в вашем подразделении",
        badgeId: "00027",
        badgeName: "Чемпион подразделения по условным сделкам",
        imageId: Badge.AnchorBronze,
        badgeIcon: Badge.AnchorBronze,
        rewardCrystalCount: 5,
        hasNftMark: false,
      },
    ],
  },
];

export const archiveTournamentId = {
  tournamentId: "T4",
  hasNftMark: true,
  tournamentName: "Марафон по условным сделкам",
  status: "ACTIVE",
  ratingCategoryName: "Вы в лидерах",
  tournamentDurationName: "Турнир 4 недели",
  lasting: "01 августа — 30 августа 2023",
  updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
  rating: [
    {
      divisionLevelName: "Страна",
      contestants: 700,
      placeInRating: 4,
      reward: undefined,
    },
    {
      divisionLevelName: "Тербанк",
      contestants: 60,
      placeInRating: 2,
      reward: {
        icon: "SILVER_LIGHTNING",
        tooltip: "Претендент на победу",
      },
    },
    {
      divisionLevelName: "ГОСБ",
      contestants: 5,
      placeInRating: 1,
      reward: {
        icon: "GOLD_LIGHTNING",
        tooltip: "Претендент на победу",
      },
    },
  ],
  totalParticipants: "700 участников",
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
    contestants: "1 243 участника",
    leaders: leaders
      .sort((item1, item2) =>
        item1.placeInRating > item2.placeInRating ? 1 : -1
      )
      .map((item, index) => (index < 5 ? { ...item, hasReward: true } : item))
      .slice(0, 5),
  },
  {
    divisionLevelName: "Тербанк",
    tournamentIndicator: "Ставка",
    contestants: "152 участников",
    leaders: leaders
      .filter(({ terDivisionName }) => terDivisionName === "СРБ")
      .sort((item1, item2) =>
        item1.placeInRating > item2.placeInRating ? 1 : -1
      )
      .map((item, index) => (index < 3 ? { ...item, hasReward: true } : item))
      .slice(0, 5),
  },
  {
    divisionLevelName: "ГОСБ",
    tournamentIndicator: "Ставка",
    contestants: `${
      leaders
        .filter(({ terDivisionName }) => terDivisionName === "СРБ")
        .slice(0, 11).length
    } участников`,
    leaders: leaders
      .filter(({ terDivisionName }) => terDivisionName === "СРБ")
      .sort((item1, item2) =>
        item1.placeInRating > item2.placeInRating ? 1 : -1
      )
      .map((item, index) => (index < 1 ? { ...item, hasReward: true } : item))
      .slice(0, 5),
  },
];

export const tournamentShortList2 = [
  {
    divisionLevelName: "Страна",
    tournamentIndicator: "Ставка",
    contestants: "900 участника",
    leaders: leaders

      .map((item) =>
        item.profileNumber === "22" ? { ...item, indicatorValue: "22" } : item
      )
      .sort((item1, item2) => +item2.indicatorValue - +item1.indicatorValue)
      .map((item, index) => (index < 5 ? { ...item, hasReward: true } : item))
      .slice(0, 5),
  },
  {
    divisionLevelName: "Тербанк",
    tournamentIndicator: "Ставка",
    contestants: "80 участников",
    leaders: leaders
      .filter(({ terDivisionName }) => terDivisionName === "СРБ")
      .map((item) =>
        item.profileNumber === "22" ? { ...item, indicatorValue: "22" } : item
      )
      .sort((item1, item2) => +item2.indicatorValue - +item1.indicatorValue)
      .map((item, index) => (index < 3 ? { ...item, hasReward: true } : item))
      .slice(0, 5),
  },
  {
    divisionLevelName: "ГОСБ",
    tournamentIndicator: "Ставка",
    contestants: `${
      leaders
        .filter(({ terDivisionName }) => terDivisionName === "СРБ")
        .slice(0, 7).length
    } участников`,
    leaders: leaders
      .filter(({ terDivisionName }) => terDivisionName === "СРБ")
      .map((item) =>
        item.profileNumber === "22" ? { ...item, indicatorValue: "22" } : item
      )
      .sort((item1, item2) => +item2.indicatorValue - +item1.indicatorValue)
      .map((item, index) => (index < 1 ? { ...item, hasReward: true } : item))
      .slice(0, 5),
  },
];

export const tournamentFullListCountry = {
  tournamentId: "T1",
  tournamentIndicator: "Ставка",
  contestants: "1243 участника",
  leaders: leaders
    .sort((item1, item2) => +item2.indicatorValue - +item1.indicatorValue)
    .map((item, index) => (index < 5 ? { ...item, hasReward: true } : item)),
};

export const tournamentFullListCountry2 = {
  tournamentId: "T2",
  tournamentIndicator: "Ставка",
  contestants: "900 участника",
  leaders: leaders
    .map((item) =>
      item.profileNumber === "22" ? { ...item, indicatorValue: "22" } : item
    )
    .sort((item1, item2) => +item2.indicatorValue - +item1.indicatorValue)
    .map((item, index) => (index < 5 ? { ...item, hasReward: true } : item)),
};

export const tournamentFullListTerb = {
  tournamentId: "T1",
  tournamentIndicator: "Ставка",
  contestants: "152 участников",
  leaders: leaders
    .filter(({ terDivisionName }) => terDivisionName === "СРБ")
    .sort((item1, item2) => +item2.indicatorValue - +item1.indicatorValue)
    .map((item, index) => (index < 3 ? { ...item, hasReward: true } : item)),
};

export const tournamentFullListTerb2 = {
  tournamentId: "T2",
  tournamentIndicator: "Ставка",
  contestants: "80 участников",
  leaders: leaders
    .filter(({ terDivisionName }) => terDivisionName === "СРБ")
    .map((item) =>
      item.profileNumber === "22" ? { ...item, indicatorValue: "22" } : item
    )
    .sort((item1, item2) => +item2.indicatorValue - +item1.indicatorValue)
    .map((item, index) => (index < 3 ? { ...item, hasReward: true } : item)),
};

export const tournamentFullListGOSB = {
  tournamentId: "T1",
  tournamentIndicator: "Ставка",
  contestants: `${
    leaders
      .filter(({ terDivisionName }) => terDivisionName === "СРБ")
      .slice(0, 11).length
  } участников`,
  leaders: leaders
    .filter(({ terDivisionName }) => terDivisionName === "СРБ")
    .sort((item1, item2) => +item2.indicatorValue - +item1.indicatorValue)
    .slice(0, 11)
    .map((item, index) => (index < 1 ? { ...item, hasReward: true } : item)),
};

export const tournamentFullListGOSB2 = {
  tournamentId: "T1",
  tournamentIndicator: "Ставка",
  contestants: `7 участников`,
  leaders: leaders
    .filter(({ terDivisionName }) => terDivisionName === "СРБ")
    .map((item) =>
      item.profileNumber === "22" ? { ...item, indicatorValue: "22" } : item
    )
    .sort((item1, item2) => +item2.indicatorValue - +item1.indicatorValue)
    .slice(0, 7)
    .map((item, index) => (index < 1 ? { ...item, hasReward: true } : item)),
};

export const archiveTournaments = {
  tournaments: [
    {
      employee: {
        profileNumber: "22",
        photoData: ГайнРоман,
        firstName: "Роман",
        lastName: "Гайн",
        colorCode: {
          primary: "blue-60",
          secondary: "blue-30",
        },
      },
      tournamentId: "T4",
      tournamentName: "Марафон по условным сделкам",
      tournamentInfo: "Турнир 4 недели завершён • 01.08–30.08.23",
      tournamentDurationName: "",
      reward: Reward.gold,
      rating: [
        {
          divisionLevelResult: "из 700 в стране",
          placeInRating: 5,
        },
        {
          divisionLevelResult: "из 60 в тербанке",
          placeInRating: 2,
          reward: {
            icon: Reward.silver,
          },
        },
        {
          divisionLevelResult: "из 5 в ГОСБ",
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
