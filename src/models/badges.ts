import { Badge } from "../interfaces";

const Commission50k = {
  imageId: Badge.Commission50k,
  badgeId: "00010",
  imageIsActive: true,
  receivingDate: "10.03.23",
  badgeName: "50 тыс. руб. комиссии по сделкам с Индией",
  badgeAmount: 2,
  updateTooltip:
    "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
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
}

const Commission200k = {
  imageId: Badge.Commission200k,
  imageIsActive: true,
  badgeId: "00011",
  receivingDate: "12.03.23",
  badgeName: "200 тыс. руб. комиссии по сделкам с Индией",
  badgeAmount: 1,
  badgeType: "individual",
  updateTooltip:
    "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
  hasNftMark: false,
  rewardCrystalCount: 15,
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
}

const Commission1M = {
  imageIsActive: true,
  imageId: Badge.Commission1M,
  badgeId: "00012",
  badgeName: "1 млн. руб. комиссии по сделкам с Индией",
  badgeAmount: 1,
  badgeType: "individual",
  receivingDate: "21.03.23",
  updateTooltip:
    "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
  hasNftMark: false,
  rewardCrystalCount: 30,
  specification: {
    description:
      "Ты уже отлично поработал!\n" +
      "Следующая цель - 1 млн.руб. комиссии от импортных сделок своих клиентов с индийскими контрагентами, номинированных в рублях.",
    features: [
      {
        number: 1,
        feature:
          "Бейдж можно получить только один раз, накопив требуемую сумму комиссии",
      },
    ],
  },
}



export const allBadges = [
  Commission50k,
  Commission200k,
  Commission1M,
]

export const badges = {
  badgesUserHas: 12,
  badgesInTotal: 30,
  badgesType: [
    {
      badgeTypeName: "Индивидуальные бейджи",
      badges: [
        {
          imageId: Badge.Commission50k,
          imageIsActive: true,
          receivingDate: "10.03.23",
          badgeId: "00010",
          badgeName: "50 тыс. руб. комиссии по сделкам с Индией",
          badgeAmount: 2,
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          hasNftMark: false,
        },
        {
          imageId: Badge.Commission200k,
          imageIsActive: true,
          badgeId: "00011",
          receivingDate: "12.03.23",
          badgeName: "200 тыс. руб. комиссии по сделкам с Индией",
          badgeAmount: 1,
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          hasNftMark: false,
        },
        {
          imageId: Badge.Commission1M,
          imageIsActive: true,
          badgeId: "00012",
          receivingDate: "21.03.23",
          badgeName: "1 млн. руб. комиссии по сделкам с Индией",
          badgeAmount: 1,
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          hasNftMark: false,
        },
        {
          imageId: Badge.Commission3M,
          imageIsActive: true,
          badgeId: "00013",
          receivingDate: "06.07.23",
          badgeName: "3 млн. руб. комиссии по сделкам с Индией",
          badgeAmount: 1,
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          hasNftMark: true,
        },
        {
          imageId: Badge.CommissionX2,
          imageIsActive: true,
          badgeId: "00014",
          receivingDate: "10.04.23",
          badgeName: "х2 комиссии по сделкам с Индией",
          badgeAmount: 2,
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          hasNftMark: false,
        },
        {
          imageId: Badge.CommissionX3,
          imageIsActive: true,
          badgeId: "00015",
          receivingDate: "19.04.23",
          badgeName: "х3 комиссии по сделкам с Индией",
          badgeAmount: 1,
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          hasNftMark: false,
        },
        {
          imageId: Badge.CommissionX4,
          imageIsActive: false,
          badgeId: "00016",
          badgeAmount: 1,
          progressBarValue: 60,
          badgeName: "х4 комиссии по сделкам с Индией",
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          hasNftMark: false,
        },
        {
          imageId: Badge.ChampionLeague1,
          imageIsActive: true,
          badgeId: "00017",
          badgeName: "Победитель Лиги Чемпионов 1ПГ 2023",
          badgeAmount: 1,
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          hasNftMark: false,
        },
        {
          imageId: Badge.ChampionLeague2,
          imageIsActive: true,
          badgeId: "00018",
          badgeName: "Победитель Лиги Чемпионов 2ПГ 2023",
          badgeAmount: 1,
          hasNftMark: false,
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
        },
        {
          imageId: Badge.SuperCup2023,
          imageIsActive: true,
          badgeId: "00019",
          badgeName: "Победитель Суперкубка 2023",
          badgeAmount: 1,
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          hasNftMark: false,
        },
        {
          imageId: Badge.SuperBonusNFT,
          imageIsActive: true,
          badgeId: "00020",
          badgeName: "1 место Сверхбонуса 1ПГ 2023",
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          badgeAmount: 1,
          hasNftMark: true,
        },
        {
          imageId: Badge.SuperBonus1,
          imageIsActive: true,
          badgeId: "00021",
          badgeName: "ТОП-10% Сверхбонуса 1ПГ 2023",
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          badgeAmount: 1,
          hasNftMark: false,
        },
        {
          imageId: Badge.SuperBonusTop10,
          imageIsActive: true,
          badgeId: "00022",
          badgeName: "ТОП-20% Сверхбонуса 1ПГ 2023",
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          badgeAmount: 1,
          hasNftMark: false,
        },
        {
          imageId: Badge.SuperBonusTop20,
          imageIsActive: true,
          badgeId: "00023",
          badgeName: "ТОП-20+% Сверхбонуса 1ПГ 2023",
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          badgeAmount: 1,
          hasNftMark: false,
        },
      ],
    },
    {
      badgeTypeName: "Бейджи за победы в турнирах",
      badges: [
        {
          imageId: Badge.ConditionalsChampionFirst,
          imageIsActive: true,
          badgeId: "00024",
          receivingDate: "09.06.23",
          badgeName: "Чемпион страны по условным сделкам",
          badgeAmount: 1,
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          hasNftMark: true,
        },
        {
          imageId: Badge.ConditionalsChampionSecond,
          imageIsActive: true,
          badgeId: "00025",
          receivingDate: "09.06.23",
          badgeName: "Чемпион ТБ по условным сделкам",
          badgeAmount: 2,
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          hasNftMark: false,
        },
        {
          imageId: Badge.ConditionalsChampionThird,
          imageIsActive: true,
          badgeId: "00026",
          receivingDate: "09.06.23",
          badgeName: "Чемпион подразделения по условным сделкам",
          badgeAmount: 1,
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          hasNftMark: false,
        },
      ],
    },
  ],
};

export const badgeID = [
  {
    imageId: Badge.Commission50k,
    badgeId: "00010",
    imageIsActive: true,
    receivingDate: "10.03.23",
    badgeName: "50 тыс. руб. комиссии по сделкам с Индией",
    badgeAmount: 2,
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
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
  },
  {
    imageId: Badge.Commission200k,
    imageIsActive: true,
    badgeId: "00011",
    receivingDate: "12.03.23",
    badgeName: "200 тыс. руб. комиссии по сделкам с Индией",
    badgeAmount: 1,
    badgeType: "individual",
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
    hasNftMark: false,
    rewardCrystalCount: 15,
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
  },
  {
    imageIsActive: true,
    imageId: Badge.Commission1M,
    badgeId: "00012",
    badgeName: "1 млн. руб. комиссии по сделкам с Индией",
    badgeAmount: 1,
    badgeType: "individual",
    receivingDate: "21.03.23",
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
    hasNftMark: false,
    rewardCrystalCount: 30,
    specification: {
      description:
        "Ты уже отлично поработал!\n" +
        "Следующая цель - 1 млн.руб. комиссии от импортных сделок своих клиентов с индийскими контрагентами, номинированных в рублях.",
      features: [
        {
          number: 1,
          feature:
            "Бейдж можно получить только один раз, накопив требуемую сумму комиссии",
        },
      ],
    },
  },
  {
    imageId: Badge.Commission3M,
    imageIsActive: true,
    badgeId: "00013",
    receivingDate: "06.07.23",
    badgeName: "3 млн. руб. комиссии по сделкам с Индией",
    badgeAmount: 1,
    badgeType: "individual",
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
    hasNftMark: true,
    rewardCrystalCount: 50,
    specification: {
      description:
        "Эта награда для лучших из лучших!\n" +
        "Собери для банка 3 млн.руб. комиссии от импортных сделок своих клиентов с индийскими контрагентами, номинированных в рублях и долгожданная награда станет твоей!",
      features: [
        {
          number: 1,
          feature:
            "- Бейдж можно получить только один раз, накопив требуемую сумму комиссии\n" +
            "- Факт получения бейджа попадает в ленту сообщества",
        },
      ],
    },
  },
  {
    imageId: Badge.CommissionX2,
    imageIsActive: true,
    badgeId: "00014",
    receivingDate: "10.04.23",
    badgeName: "х2 комиссии по сделкам с Индией",
    badgeAmount: 2,
    badgeType: "individual",
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
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
  },
  {
    imageId: Badge.CommissionX3,
    imageIsActive: true,
    badgeId: "00015",
    receivingDate: "19.04.23",
    badgeName: "х3 комиссии по сделкам с Индией",
    badgeAmount: 1,
    badgeType: "individual",
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
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
  },
  {
    imageId: Badge.CommissionX4,
    imageIsActive: false,
    badgeId: "00016",
    badgeAmount: 1,
    badgeName: "х4 комиссии по сделкам с Индией",
    badgeType: "individual",
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
    hasNftMark: false,
    rewardCrystalCount: 15,
    progressBarValue: 60,
    progress: {
      current: "104 из 1000 тыс. руб.",
      condition: "Осталось 896 тыс. руб.",
    },
    specification: {
      description:
        "Докажи, что настоящий асс!\n" +
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
  },
  {
    imageId: Badge.ChampionLeague1,
    imageIsActive: true,
    badgeId: "00017",
    badgeName: "Победитель Лиги Чемпионов 1ПГ 2023",
    badgeAmount: 1,
    badgeType: "individual",
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
    hasNftMark: false,
    rewardCrystalCount: 30,
    specification: {
      description:
        "Докажите, что лучшие!\n" +
        "Войдите командой в Лигу Чимпионов 1ПГ 2023 года и получите награду!",
      features: [
        {
          number: 1,
          feature: "Факт получения бейджа попадает в ленту сообщества",
        },
      ],
    },
  },
  {
    imageId: Badge.ChampionLeague2,
    imageIsActive: true,
    badgeId: "00018",
    badgeName: "Победитель Лиги Чемпионов 2ПГ 2023",
    badgeAmount: 1,
    badgeType: "individual",
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
    hasNftMark: false,
    rewardCrystalCount: 30,
    specification: {
      description:
        "Докажите, что лучшие!\n" +
        "Войдите командой в Лигу Чимпионов 2ПГ 2023 года и получите награду!",
      features: [
        {
          number: 1,
          feature: "Факт получения бейджа попадает в ленту сообщества",
        },
      ],
    },
  },
  {
    imageId: Badge.SuperCup2023,
    imageIsActive: true,
    badgeId: "00019",
    badgeName: "Победитель Суперкубка 2023",
    badgeAmount: 1,
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
    badgeType: "individual",
    hasNftMark: false,
    rewardCrystalCount: 40,
    specification: {
      description:
        "Только лучшие из лучших станут победителями Суперкубка.\n" +
        "Войдите командой в число победителей 2023 года и получите награду!",
      features: [
        {
          number: 1,
          feature: "Факт получения бейджа попадает в ленту сообщества",
        },
      ],
    },
  },
  {
    imageId: Badge.SuperBonusNFT,
    imageIsActive: true,
    badgeId: "00020",
    badgeName: "1 место Сверхбонуса 1ПГ 2023",
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
    badgeAmount: 1,
    badgeType: "individual",
    hasNftMark: true,
    rewardCrystalCount: 50,
    specification: {
      description:
        'Возьми "Сверхбонус" вместе со своей командой в 1ПГ 2023!\n' +
        "Займите первое место в своем территориальном банке среди всех КПК.",
      features: [
        {
          number: 1,
          feature: "Факт получения бейджа попадает в ленту сообщества",
        },
      ],
    },
  },
  {
    imageId: Badge.SuperBonus1,
    imageIsActive: true,
    badgeId: "00021",
    badgeName: "ТОП-10% Сверхбонуса 1ПГ 2023",
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
    badgeAmount: 1,
    badgeType: "individual",
    hasNftMark: false,
    rewardCrystalCount: 30,
    specification: {
      description:
        'Возьми "Сверхбонус" вместе со своей командой в 1ПГ 2023!\n' +
        "Войдите в ТОП-10% КПК в своем территориальном банке.",
      features: [
        {
          number: 1,
          feature: "Факт получения бейджа попадает в ленту сообщества",
        },
      ],
    },
  },
  {
    imageId: Badge.SuperBonusTop10,
    imageIsActive: true,
    badgeId: "00022",
    badgeName: "ТОП-20% Сверхбонуса 1ПГ 2023",
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
    badgeAmount: 1,
    badgeType: "individual",
    hasNftMark: false,
    rewardCrystalCount: 20,
    specification: {
      description:
        'Возьми "Сверхбонус" вместе со своей командой в 1ПГ 2023!\n' +
        "Войдите в ТОП-20% КПК в своем территориальном банке.",
      features: [
        {
          number: 1,
          feature: "Факт получения бейджа попадает в ленту сообщества",
        },
      ],
    },
  },
  {
    imageId: Badge.SuperBonusTop20,
    imageIsActive: true,
    badgeId: "00023",
    badgeName: "ТОП-20+% Сверхбонуса 1ПГ 2023",
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
    badgeAmount: 1,
    badgeType: "individual",
    hasNftMark: false,
    rewardCrystalCount: 15,
    specification: {
      description:
        'Возьми "Сверхбонус" вместе со своей командой в 1ПГ 2023!\n' +
        "Войдите в ТОП-20+% КПК в своем территориальном банке.",
      features: [
        {
          number: 1,
          feature: "Факт получения бейджа попадает в ленту сообщества",
        },
      ],
    },
  },
  {
    imageId: Badge.ConditionalsChampionFirst,
    imageIsActive: true,
    badgeId: "00024",
    receivingDate: "09.06.23",
    badgeName: "Чемпион страны по условным сделкам",
    badgeAmount: 1,
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
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
        tournamentId: "T2",
        status: {
          name: "Идет сейчас",
          color: "green-30",
        },
        periodName: "Осталось 4 дня",
      },
      {
        tournamentId: "T3",
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
      features: [
        {
          number: 1,
          feature: "Факт получения бейджа попадает в ленту сообщества",
        },
      ],
    },
  },
  {
    imageId: Badge.ConditionalsChampionSecond,
    imageIsActive: true,
    badgeId: "00025",
    receivingDate: "09.06.23",
    badgeName: "Чемпион ТБ по условным сделкам",
    badgeAmount: 2,
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
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
        tournamentId: "T2",
        status: {
          name: "Идет сейчас",
          color: "green-30",
        },
        periodName: "Осталось 4 дня",
      },
      {
        tournamentId: "T3",
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
      features: [
        {
          number: 1,
          feature: "",
        },
      ],
    },
  },
  {
    imageId: Badge.ConditionalsChampionThird,
    imageIsActive: true,
    badgeId: "00026",
    receivingDate: "09.06.23",
    badgeName: "Чемпион подразделения по условным сделкам",
    badgeAmount: 1,
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
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
        tournamentId: "T2",
        status: {
          name: "Идет сейчас",
          color: "green-30",
        },
        periodName: "Осталось 4 дня",
      },
      {
        tournamentId: "T3",
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
      features: [
        {
          number: 1,
          feature: "",
        },
      ],
    },
  },
];
