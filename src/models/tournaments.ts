import { Badge, Reward } from "../interfaces";
import ГайнРоман from "../assets/images/romanGayn.png";
import {
  colorCodeExpert,
  colorCodeMaster,
  colorCodeSpecialist,
  leaders,
} from "./tournamen-leaders";
import фотоГайнРоман from "../assets/images/romanGayn.png";
import фотоТихомироваМария from "../assets/images/Тихомирова Мария Алексеевна.jpeg";
import фотоШаброваИрина from "../assets/images/Шаброва Ирина Сергеевна.jpeg";

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
              divisionLevelResult: "из 33 в стране",
              placeInRating: 4,
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
      ratingCategoryName: "Нужно поднажать",
      tournaments: [
        {
          tournamentId: "T3",
          tournamentName: "Максимальное сальдо выдач по кредитам",
          tournamentInfo: "Осталось 39 дней",
          tournamentDurationName: "ТУРНИР квартала",
          progressBarValue: 65,
          updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
          reward: undefined,
          rating: [
            {
              divisionLevelResult: "из 33 в стране",
              placeInRating: 4,
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
              divisionLevelResult: "из 2 в ГОСБ",
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
        contestants: 33,
        placeInRating: 4,
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
    totalParticipants: "33 участника",
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
    tournamentName: "Турнир по условным сделкам",
    status: "ACTIVE",
    ratingCategoryName: "Вы в лидерах",
    tournamentInfo: "Завершён  •  Подведение итогов",
    tournamentDurationName: "турнир 3 недели",
    lasting: "31 июля 2023 - 20 августа 2023",
    percentageIndicator: 100,
    updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
    rating: [
      {
        divisionLevelName: "Страна",
        contestants: 33,
        placeInRating: 4,
      },
      {
        divisionLevelName: "ТБ",
        contestants: 3,
        placeInRating: 2,
        reward: {
          icon: Reward.silver,
          tooltip: "Претендент на победу",
        },
      },
      {
        divisionLevelName: "ГОСБ",
        contestants: 2,
        placeInRating: 2,
        reward: {
          icon: Reward.silver,
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
  tournamentId: "T4",
  hasNftMark: true,
  tournamentName: "Марафон по условным сделкам",
  status: "ACTIVE",
  ratingCategoryName: "Вы в лидерах",
  tournamentDurationName: "Турнир 4 недели",
  lasting: "03 июня — 30 июня 2023",
  updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
  rating: [
    {
      divisionLevelName: "Страна",
      contestants: 33,
      placeInRating: 4,
      reward: undefined,
    },
    {
      divisionLevelName: "Кластер",
      contestants: 3,
      placeInRating: 2,
      reward: {
        icon: "SILVER_LIGHTNING",
        tooltip: "Претендент на победу",
      },
    },
    {
      divisionLevelName: "Аппарат ТБ",
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
      divisionLevelName: "Кластер",
      rewardRule: "Бейдж получат 7% от числа участников турнира в вашем ТБ",
      badgeId: "00025",
      badgeName: "Чемпион ТБ по условным сделкам",
      imageId: Badge.ConditionalsChampionSecond,
      badgeIcon: Badge.ConditionalsChampionSecond,
      rewardCrystalCount: 15,
      hasNftMark: false,
    },
    {
      divisionLevelName: "Аппарат ТБ",
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
    contestants: "33 участника",
    leaders: leaders
      .sort((item1, item2) =>
        item1.placeInRating > item2.placeInRating ? 1 : -1
      )
      .slice(0, 5),
  },
  {
    divisionLevelName: "Тербанк",
    tournamentIndicator: "Ставка",
    contestants: "3 участника",
    leaders: [
      {
        profileNumber: "24",
        lastName: "Шаброва",
        firstName: "Ирина",
        photoData: фотоШаброваИрина,
        colorCode: colorCodeExpert,
        isMarked: false,
        indicatorValue: "28",
        reward: {
          icon: Reward.gold,
          tooltip: "Претендент на победу",
        },
        placeInRating: 1,
        terDivisionName: "СРБ",
      },
      {
        profileNumber: "22",
        lastName: "Гайн",
        firstName: "Роман",
        photoData: фотоГайнРоман,
        colorCode: colorCodeMaster,
        isMarked: true,
        indicatorValue: "27",
        placeInRating: 2,
        reward: {
          icon: Reward.silver,
        },
        terDivisionName: "СРБ",
      },
      {
        profileNumber: "23",
        lastName: "Тихомирова",
        firstName: "Мария",
        photoData: фотоТихомироваМария,
        colorCode: colorCodeSpecialist,
        isMarked: false,
        indicatorValue: "26",
        reward: {
          icon: Reward.silver,
        },
        placeInRating: 3,
        terDivisionName: "СРБ",
      },
    ],
  },
  {
    divisionLevelName: "ГОСБ",
    tournamentIndicator: "Ставка",
    contestants: "1 участник",
    leaders: [
      {
        profileNumber: "22",
        lastName: "Гайн",
        firstName: "Роман",
        photoData: фотоГайнРоман,
        colorCode: colorCodeMaster,
        isMarked: true,
        indicatorValue: "27",
        placeInRating: 1,
        reward: {
          icon: Reward.gold,
          tooltip: "Претендент на победу",
        },
        terDivisionName: "СРБ",
      },
    ],
  },
];

export const tournamentFullListCountry = {
  tournamentId: "T1",
  tournamentIndicator: "Ставка",
  contestants: "33 участника",
  leaders: leaders.sort((item1, item2) =>
    item1.placeInRating > item2.placeInRating ? 1 : -1
  ),
};
export const tournamentFullListTerb = {
  tournamentId: "T1",
  tournamentIndicator: "Ставка",
  contestants: "3 участника",
  leaders: [
    {
      profileNumber: "24",
      lastName: "Шаброва",
      firstName: "Ирина",
      photoData: фотоШаброваИрина,
      colorCode: colorCodeExpert,
      isMarked: false,
      indicatorValue: "28",
      reward: {
        icon: Reward.gold,
        tooltip: "Претендент на победу",
      },
      placeInRating: 1,
      terDivisionName: "СРБ",
    },
    {
      profileNumber: "22",
      lastName: "Гайн",
      firstName: "Роман",
      photoData: фотоГайнРоман,
      colorCode: colorCodeMaster,
      isMarked: true,
      indicatorValue: "27",
      placeInRating: 2,
      reward: {
        icon: Reward.silver,
      },
      terDivisionName: "СРБ",
    },
    {
      profileNumber: "23",
      lastName: "Тихомирова",
      firstName: "Мария",
      photoData: фотоТихомироваМария,
      colorCode: colorCodeSpecialist,
      isMarked: false,
      indicatorValue: "26",
      reward: {
        icon: Reward.silver,
        tooltip: "Претендент на победу",
      },
      placeInRating: 3,
      terDivisionName: "СРБ",
    },
  ],
};

export const tournamentFullListGOSB = {
  tournamentId: "T1",
  tournamentIndicator: "Ставка",
  contestants: "1 участник",
  leaders: [
    {
      profileNumber: "22",
      lastName: "Гайн",
      firstName: "Роман",
      photoData: фотоГайнРоман,
      colorCode: colorCodeMaster,
      isMarked: true,
      indicatorValue: "27",
      placeInRating: 1,
      reward: {
        icon: Reward.gold,
        tooltip: "Претендент на победу",
      },
      terDivisionName: "СРБ",
    },
  ],
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
      tournamentInfo: "Турнир 4 недели завершён • 03.06–30.06.23",
      tournamentDurationName: "",
      reward: Reward.gold,
      rating: [
        {
          divisionLevelResult: "из 33 в стране",
          placeInRating: 5,
        },
        {
          divisionLevelResult: "из 3 в кластере",
          placeInRating: 2,
          reward: {
            icon: Reward.silver,
          },
        },
        {
          divisionLevelResult: "из 1 в аппарате ТБ",
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

export const tournamentFullListGOSBT2 = {
  tournamentId: "T2",
  tournamentIndicator: "Ставка",
  contestants: "0 участников",
  leaders: [],
};

export const tournamentFullListTerbT2 = {
  tournamentId: "T2",
  tournamentIndicator: "Ставка",
  contestants: "2 участника",
  leaders: [
    {
      profileNumber: "24",
      lastName: "Шаброва",
      firstName: "Ирина",
      photoData: фотоШаброваИрина,
      colorCode: colorCodeExpert,
      isMarked: false,
      indicatorValue: "28",
      reward: {
        icon: Reward.gold,
        tooltip: "Претендент на победу",
      },
      placeInRating: 1,
      terDivisionName: "СРБ",
    },

    {
      profileNumber: "23",
      lastName: "Тихомирова",
      firstName: "Мария",
      photoData: фотоТихомироваМария,
      colorCode: colorCodeSpecialist,
      isMarked: false,
      indicatorValue: "26",
      reward: {
        icon: Reward.silver,
      },
      placeInRating: 2,
      terDivisionName: "СРБ",
    },
  ],
};

export const tournamentFullListCountryT2 = {
  tournamentId: "T1",
  tournamentIndicator: "Ставка",
  contestants: "32 участника",
  leaders: leaders
    .sort((item1, item2) =>
      item1.placeInRating > item2.placeInRating ? 1 : -1
    )
    .filter((item) => !item.isMarked),
};

export const tournamentShortListT2 = [
  {
    divisionLevelName: "Страна",
    tournamentIndicator: "Ставка",
    contestants: "32 участника",
    leaders: leaders
      .filter((item) => !item.isMarked)
      .sort((item1, item2) =>
        item1.placeInRating > item2.placeInRating ? 1 : -1
      )
      .slice(0, 5),
  },
  {
    divisionLevelName: "Тербанк",
    tournamentIndicator: "Ставка",
    contestants: "2 участника",
    leaders: [
      {
        profileNumber: "24",
        lastName: "Шаброва",
        firstName: "Ирина",
        photoData: фотоШаброваИрина,
        colorCode: colorCodeExpert,
        isMarked: false,
        indicatorValue: "28",
        reward: {
          icon: Reward.gold,
          tooltip: "Претендент на победу",
        },
        placeInRating: 1,
        terDivisionName: "СРБ",
      },
      {
        profileNumber: "23",
        lastName: "Тихомирова",
        firstName: "Мария",
        photoData: фотоТихомироваМария,
        colorCode: colorCodeSpecialist,
        isMarked: false,
        indicatorValue: "26",
        reward: {
          icon: Reward.silver,
        },
        placeInRating: 3,
        terDivisionName: "СРБ",
      },
    ],
  },
  {
    divisionLevelName: "ГОСБ",
    tournamentIndicator: "Ставка",
    contestants: "2 участника",
    leaders: [
      {
        profileNumber: "24",
        lastName: "Шаброва",
        firstName: "Ирина",
        photoData: фотоШаброваИрина,
        colorCode: colorCodeExpert,
        isMarked: false,
        indicatorValue: "28",
        reward: {
          icon: Reward.gold,
          tooltip: "Претендент на победу",
        },
        placeInRating: 1,
        terDivisionName: "СРБ",
      },
      {
        profileNumber: "22",
        lastName: "Гайн",
        firstName: "Роман",
        photoData: фотоГайнРоман,
        colorCode: colorCodeMaster,
        isMarked: true,
        indicatorValue: "27",
        placeInRating: 1,
        reward: {
          icon: Reward.gold,
          tooltip: "Претендент на победу",
        },
        terDivisionName: "СРБ",
        progress: undefined,
      },
    ],
  },
];

export const tournamentShortListT3 = [
  {
    divisionLevelName: "Страна",
    tournamentIndicator: "Ставка",
    contestants: "33 участника",
    leaders: leaders
      .sort((item1, item2) =>
        item1.placeInRating > item2.placeInRating ? 1 : -1
      )
      .slice(0, 5),
  },
  {
    divisionLevelName: "Кластер",
    tournamentIndicator: "Ставка",
    contestants: "3 участника",
    leaders: [
      {
        profileNumber: "24",
        lastName: "Шаброва",
        firstName: "Ирина",
        photoData: фотоШаброваИрина,
        colorCode: colorCodeExpert,
        isMarked: false,
        indicatorValue: "28",
        reward: {
          icon: Reward.gold,
          tooltip: "Претендент на победу",
        },
        placeInRating: 1,
        terDivisionName: "СРБ",
        progress: undefined,
      },
      {
        profileNumber: "22",
        lastName: "Гайн",
        firstName: "Роман",
        photoData: фотоГайнРоман,
        colorCode: colorCodeMaster,
        isMarked: true,
        indicatorValue: "27",
        placeInRating: 2,
        reward: {
          icon: Reward.silver,
        },
        terDivisionName: "СРБ",
        progress: undefined,
      },
      {
        profileNumber: "23",
        lastName: "Тихомирова",
        firstName: "Мария",
        photoData: фотоТихомироваМария,
        colorCode: colorCodeSpecialist,
        isMarked: false,
        indicatorValue: "26",
        reward: {
          icon: Reward.silver,
        },
        placeInRating: 3,
        terDivisionName: "СРБ",
        progress: undefined,
      },
    ],
  },
  {
    divisionLevelName: "Аппарат ТБ",
    tournamentIndicator: "Ставка",
    contestants: "1 участник",
    leaders: [
      {
        profileNumber: "22",
        lastName: "Гайн",
        firstName: "Роман",
        photoData: фотоГайнРоман,
        colorCode: colorCodeMaster,
        isMarked: true,
        indicatorValue: "27",
        placeInRating: 1,
        reward: {
          icon: Reward.gold,
          tooltip: "Претендент на победу",
        },
        terDivisionName: "СРБ",
        progress: undefined,
      },
    ],
  },
];
