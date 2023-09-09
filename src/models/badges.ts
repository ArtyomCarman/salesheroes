import { Badge } from "../interfaces";

const formatter = new Intl.DateTimeFormat("ru", {
  month: "long",
  day: "numeric",
});

const d = new Date();
d.setDate(d.getDate() - 1);

const date = formatter.format(d);

const Commission50k = {
  imageId: Badge.Commission50k,
  badgeId: "00010",
  imageIsActive: true,
  receivingDate: "10.03.23",
  badgeName: "50 тыс. руб. комиссии по сделкам с Индией",
  badgeAmount: 2,
  badgeType: "individual",
  updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
  hasNftMark: false,
  rewardCrystalCount: 5,
  specification: {
    description:
      'Войди в число лучших их лучших в турнире "Марафон по условным сделкам" на уровне всей страны.',
    features: [
      {
        number: 1,
        feature: "Факт получения бейджа попадает в ленту сообщества",
      },
    ],
  },
};

const Commission200k = {
  imageId: Badge.Commission200k,
  imageIsActive: false,
  badgeId: "00011",
  badgeName: "200 тыс. руб. комиссии по сделкам с Индией",
  badgeAmount: 1,
  badgeType: "individual",
  updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
  hasNftMark: false,
  rewardCrystalCount: 15,
  progressBarValue: 75,
  progress: {
    current: "146 из 200 тыс. руб.",
    condition: "Осталось 54 тыс. руб.",
  },
  specification: {
    description:
      "Продолжай в том же духе!\n" +
      "Собери для банка 200 тыс.руб. комиссии от импортных сделок своих клиентов с индийскими контрагентами, номинированных в рублях и эта награда твоя!",
    features: [
      {
        number: 1,
        feature:
          "Бейдж можно получить только один раз, накопив требуемую сумму комиссии",
      },
    ],
  },
};

const Commission1M = {
  imageIsActive: true,
  imageId: Badge.Commission1M,
  badgeId: "00012",
  badgeName: "1 млн руб. комиссии по сделкам с Индией",
  badgeAmount: 1,
  badgeType: "individual",
  receivingDate: "21.03.23",
  updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
  hasNftMark: false,
  rewardCrystalCount: 30,
  specification: {
    description:
      "Ты уже отлично поработал!\n" +
      "Следующая цель - 1 млнруб. комиссии от импортных сделок своих клиентов с индийскими контрагентами, номинированных в рублях.",
    features: [
      {
        number: 1,
        feature:
          "Бейдж можно получить только один раз, накопив требуемую сумму комиссии",
      },
    ],
  },
};

const Commission3M = {
  imageId: Badge.Commission3M,
  imageIsActive: true,
  badgeId: "00013",
  receivingDate: "06.07.23",
  badgeName: "3 млн руб. комиссии по сделкам с Индией",
  badgeAmount: 1,
  badgeType: "individual",
  updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
  hasNftMark: true,
  rewardCrystalCount: 50,
  specification: {
    description:
      "Эта награда для лучших из лучших!\n" +
      "Собери для банка 3 млнруб. комиссии от импортных сделок своих клиентов с индийскими контрагентами, номинированных в рублях и долгожданная награда станет твоей!",
    features: [
      {
        number: 1,
        feature:
          "- Бейдж можно получить только один раз, накопив требуемую сумму комиссии\n" +
          "- Факт получения бейджа попадает в ленту сообщества",
      },
    ],
  },
};

const CommissionX2 = {
  imageId: Badge.CommissionX2,
  imageIsActive: true,
  badgeId: "00014",
  receivingDate: "10.04.23",
  badgeName: "х2 комиссии по сделкам с Индией",
  badgeAmount: 2,
  badgeType: "individual",
  updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
  hasNftMark: false,
  rewardCrystalCount: 3,
  specification: {
    description:
      "Ты можешь это сделать!\n" +
      "Собери для банка комиссии в текущем месяце в 2 раза больше, чем в предыдущем от сделок своих клиентов с индийскими контрагентами, номинированных в рублях и получи свою награду!",
    features: [
      {
        number: 1,
        feature:
          "Бейдж можно получить только один раз, накопив требуемую сумму комиссии",
      },
    ],
  },
};

const CommissionX3 = {
  imageId: Badge.CommissionX3,
  imageIsActive: false,
  badgeId: "00015",
  badgeName: "х3 комиссии по сделкам с Индией",
  badgeAmount: 1,
  badgeType: "individual",
  updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
  hasNftMark: false,
  rewardCrystalCount: 7,
  specification: {
    description:
      "Покажи серьезный и основательный подход к делу!\n" +
      "Собери для банка комиссии в текущем месяце в 3 раза больше, чем в предыдущем от сделок своих клиентов с индийскими контрагентами, номинированных в рублях и получи свою награду!",
    features: [
      {
        number: 1,
        feature:
          "Бейдж можно получить только один раз, накопив требуемую сумму комиссии",
      },
    ],
  },
};

const CommissionX4 = {
  imageId: Badge.CommissionX4,
  imageIsActive: false,
  badgeId: "00016",
  badgeAmount: 1,
  badgeName: "х4 комиссии по сделкам с Индией",
  badgeType: "individual",
  updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
  hasNftMark: false,
  rewardCrystalCount: 15,
  progressBarValue: 60,
  progress: {
    current: "1800 из 3000 тыс. руб.",
    condition: "Осталось 1200 тыс. руб.",
  },
  specification: {
    description:
      "Докажи, что настоящий ас!\n" +
      "Собери для банка комиссии в текущем месяце в 4 раза больше, чем в предыдущем от сделок своих клиентов с индийскими контрагентами, номинированных в рублях и получи свою награду!",
    features: [
      {
        number: 1,
        feature:
          "Бейдж можно получить только один раз, накопив требуемую сумму комиссии\n" +
          "Факт получения бейджа попадает в ленту сообщества",
      },
    ],
  },
};

const ChampionLeague1 = {
  imageId: Badge.ChampionLeague1,
  imageIsActive: true,
  badgeId: "00017",
  badgeName: "Победитель Лиги Чемпионов 1ПГ 2023",
  badgeAmount: 1,
  badgeType: "individual",
  updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
  hasNftMark: false,
  rewardCrystalCount: 30,
  specification: {
    description:
      "Докажите, что лучшие!\n" +
      "Войдите командой в Лигу Чемпионов 1ПГ 2023 года и получите награду!",
    features: null,
  },
};

const ChampionLeague2 = {
  imageId: Badge.ChampionLeague2,
  imageIsActive: false,
  badgeId: "00018",
  badgeName: "Победитель Лиги Чемпионов 2ПГ 2023",
  badgeAmount: 1,
  badgeType: "individual",
  updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
  hasNftMark: false,
  rewardCrystalCount: 30,
  specification: {
    description:
      "Докажите, что лучшие!\n" +
      "Войдите командой в Лигу Чемпионов 2ПГ 2023 года и получите награду!",
    features: null,
  },
};

const SuperCup2023 = {
  imageId: Badge.SuperCup2023,
  imageIsActive: true,
  badgeId: "00019",
  badgeName: "Победитель Суперкубка 2023",
  badgeAmount: 1,
  updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
  badgeType: "individual",
  hasNftMark: false,
  rewardCrystalCount: 40,
  specification: {
    description:
      "Только лучшие из лучших станут победителями Суперкубка.\n" +
      "Войдите командой в число победителей 2023 года и получите награду!",
    features: null,
  },
};

const SuperBonusNFT = {
  imageId: Badge.SuperBonusNFT,
  imageIsActive: true,
  badgeId: "00020",
  badgeName: "1 место Сверхбонуса 1ПГ 2023",
  updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
  badgeAmount: 1,
  badgeType: "individual",
  hasNftMark: true,
  rewardCrystalCount: 50,
  specification: {
    description:
      'Возьми "Сверхбонус" вместе со своей командой в 1ПГ 2023!\n' +
      "Займите первое место в своем территориальном банке среди всех КПК.",
    features: null,
  },
};

const SuperBonus1 = {
  imageId: Badge.SuperBonus1,
  imageIsActive: false,
  badgeId: "00021",
  badgeName: "ТОП-10% Сверхбонуса 1ПГ 2023",
  updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
  badgeAmount: 1,
  badgeType: "individual",
  hasNftMark: false,
  rewardCrystalCount: 30,
  specification: {
    description:
      'Возьми "Сверхбонус" вместе со своей командой в 1ПГ 2023!\n' +
      "Войдите в ТОП-10% КПК в своем территориальном банке.",
    features: null,
  },
};

const SuperBonusTop10 = {
  imageId: Badge.SuperBonusTop10,
  imageIsActive: false,
  badgeId: "00022",
  badgeName: "ТОП-20% Сверхбонуса 1ПГ 2023",
  updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
  badgeAmount: 1,
  badgeType: "individual",
  hasNftMark: false,
  rewardCrystalCount: 20,
  specification: {
    description:
      'Возьми "Сверхбонус" вместе со своей командой в 1ПГ 2023!\n' +
      "Войдите в ТОП-20% КПК в своем территориальном банке.",
    features: null,
  },
};

const SuperBonusTop20 = {
  imageId: Badge.SuperBonusTop20,
  imageIsActive: true,
  badgeId: "00023",
  badgeName: "ТОП-20+% Сверхбонуса 1ПГ 2023",
  receivingDate: "10.03.23",
  updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
  badgeAmount: 1,
  badgeType: "individual",
  hasNftMark: false,
  rewardCrystalCount: 15,
  specification: {
    description:
      'Возьми "Сверхбонус" вместе со своей командой в 1ПГ 2023!\n' +
      "Войдите в ТОП-20+% КПК в своем территориальном банке.",
    features: null,
  },
};

const ConditionalsChampionFirst = {
  imageId: Badge.ConditionalsChampionFirst,
  imageIsActive: false,
  badgeId: "00024",
  badgeName: "Чемпион страны по условным сделкам",
  badgeAmount: 1,
  updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
  hasNftMark: true,
  badgeType: "forTheTournament",
  rewardCrystalCount: 30,
  progress: {
    current: "",
    condition: "",
  },
  tournamentName: "Марафон по условным сделкам",
  tournaments: [
    {
      tournamentId: "T1",
      status: {
        name: "Идёт сейчас",
        color: "green-30",
      },
      ratingStatusName: "Вы на 5 месте",
      periodName: "осталось 2 дня",
    },
    {
      tournamentId: "T1",
      status: {
        name: "Закончился",
        color: "red-30",
      },
      ratingStatusName: "Вы на 5 месте",
      periodName: "03.07.23 - 09.07.23",
    },
  ],
  specification: {
    description:
      'Войди в число лучших их лучших в турнире "Марафон по условным сделкам" на уровне всей страны.',
    features: null,
  },
};

const ConditionalsChampionSecond = {
  imageId: Badge.ConditionalsChampionSecond,
  imageIsActive: true,
  badgeId: "00025",
  receivingDate: "09.06.23",
  badgeName: "Чемпион ТБ по условным сделкам",
  badgeAmount: 2,
  updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
  hasNftMark: false,
  badgeType: "forTheTournament",
  rewardCrystalCount: 30,
  progress: {
    current: "",
    condition: "",
  },
  tournamentName: "Марафон по условным сделкам",
  tournaments: [
    {
      tournamentId: "T1",
      status: {
        name: "Идёт сейчас",
        color: "green-30",
      },
      ratingStatusName: "Вы на 2 месте",
      periodName: "осталось 2 дня",
    },
    {
      tournamentId: "T1",
      status: {
        name: "Закончился",
        color: "red-30",
      },
      ratingStatusName: "Вы на 2 месте",
      periodName: "07.03.23 - 07.09.23",
    },
  ],
  specification: {
    description:
      'Стань одним из лучших в турнире "Марафон по условным сделкам" на уровне своего тербанка.',
    features: null,
  },
};

const ConditionalsChampionThird = {
  imageId: Badge.ConditionalsChampionThird,
  imageIsActive: true,
  badgeId: "00026",
  receivingDate: "09.06.23",
  badgeName: "Чемпион подразделения по условным сделкам",
  badgeAmount: 1,
  updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
  hasNftMark: false,
  badgeType: "forTheTournament",
  rewardCrystalCount: 5,
  progress: {
    current: "",
    condition: "",
  },
  tournamentName: "Марафон по условным сделкам",
  tournaments: [
    {
      tournamentId: "T1",
      status: {
        name: "Идёт сейчас",
        color: "green-30",
      },
      ratingStatusName: "Вы на 1 месте",
      periodName: "осталось 2 дня",
    },
    {
      tournamentId: "T1",
      status: {
        name: "Закончился",
        color: "red-30",
      },
      ratingStatusName: "Вы на 1 месте",
      periodName: "07.03.23 - 07.09.23",
    },
  ],
  specification: {
    description:
      'Победи в турнире "Марафон по условным сделкам" в рамках своего ГОСБ \\ Управления',
    features: null,
  },
};

const AnchorBronze = {
  imageId: Badge.AnchorBronze,
  imageIsActive: false,
  badgeId: "00027",
  badgeName: "Чемпион подразделения по кредитным выдачам",
  badgeAmount: 1,
  updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
  hasNftMark: false,
  badgeType: "forTheTournament",
  rewardCrystalCount: 5,
  progress: {
    current: "",
    condition: "",
  },
  tournamentName: "Максимальное сальдо выдач по кредитам",
  tournaments: [
    {
      tournamentId: "T2",
      status: {
        name: "Активный",
        color: "green-30",
      },
      ratingStatusName: "Вы на 1 месте",
      periodName: "01.07.23 - 30.09.23",
    },
  ],
  specification: {
    description:
      'Победи в турнире "Максимальное сальдо выдач по кредитам" в рамках своего ГОСБ \\ Управления',
    features: null,
  },
};

const AnchorSilver = {
  imageId: Badge.AnchorSilver,
  imageIsActive: false,
  badgeId: "00028",
  badgeName: "Чемпион тербанка по кредитным выдачам",
  badgeAmount: 1,
  updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
  hasNftMark: false,
  badgeType: "forTheTournament",
  rewardCrystalCount: 30,
  progress: {
    current: "",
    condition: "",
  },
  tournamentName: "Максимальное сальдо выдач по кредитам",
  tournaments: [
    {
      tournamentId: "T2",
      status: {
        name: "Активный",
        color: "green-30",
      },
      ratingStatusName: "Вы на 1 месте",
      periodName: "01.07.23 - 30.09.23",
    },
  ],
  specification: {
    description:
      'Победи в турнире "Максимальное сальдо выдач по кредитам" на уровне своего тербанка',
    features: null,
  },
};

const AnchorGold = {
  imageId: Badge.AnchorGold,
  imageIsActive: false,
  badgeId: "00029",
  badgeName: "Чемпион страны по кредитным выдачам",
  badgeAmount: 1,
  updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
  hasNftMark: true,
  badgeType: "forTheTournament",
  rewardCrystalCount: 30,
  progress: {
    current: "",
    condition: "",
  },
  tournamentName: "Максимальное сальдо выдач по кредитам",
  tournaments: [
    {
      tournamentId: "T2",
      status: {
        name: "Активный",
        color: "green-30",
      },
      ratingStatusName: "Вы на 4 месте",
      periodName: "01.07.23 - 30.09.23",
    },
  ],
  specification: {
    description:
      'Победи в турнире "Максимальное сальдо выдач по кредитам" на уровне всей страны',
    features: null,
  },
};

export const allBadges = [
  Commission50k,
  Commission200k,
  Commission1M,
  Commission3M,
  CommissionX2,
  CommissionX3,
  CommissionX4,
  ChampionLeague1,
  ChampionLeague2,
  SuperCup2023,
  SuperBonusNFT,
  SuperBonus1,
  SuperBonusTop10,
  SuperBonusTop20,
  ConditionalsChampionFirst,
  ConditionalsChampionSecond,
  ConditionalsChampionThird,
  AnchorBronze,
  AnchorSilver,
  AnchorGold,
];

export const badges = {
  badgesUserHas: 12,
  badgesInTotal: 30,
  badgesType: [
    {
      badgeTypeName: "Индивидуальные бейджи",
      badges: allBadges.filter(({ badgeType }) => badgeType === "individual"),
    },
    {
      badgeTypeName: "Бейджи за победы в турнирах",
      badges: allBadges.filter(
        ({ badgeType }) => badgeType === "forTheTournament"
      ),
    },
  ],
};

export const badgeID = [
  Commission50k,
  Commission200k,
  Commission1M,
  Commission3M,
  CommissionX2,
  CommissionX3,
  CommissionX4,
  ConditionalsChampionFirst,
  ConditionalsChampionSecond,
  ConditionalsChampionThird,
];
