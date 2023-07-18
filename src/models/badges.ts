import { Badge } from "../interfaces";

export const badges = {
  badgesUserHas: 12,
  badgesInTotal: 30,
  badgesType: [
    {
      badgeTypeName: "Индивидуальные бейджи",
      badges: [
        {
<<<<<<< Updated upstream
            badgeTypeName: "Индивидуальные бейджи",
            badges: [
                {
                    imageId: Badge.Commission50k,
                    imageIsActive: true,
                    badgeId: "00010",
                    badgeName: "50 тыс. комиссии по сделкам с Индией",
                    badgeAmount: 2,
                    updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
                    hasNftMark: false
                },
                {
                    imageId: Badge.Commission200k,
                    imageIsActive: true,
                    badgeId: "00011",
                    badgeName: "200 тыс. комиссии по сделкам с Индией",
                    badgeAmount: 1,
                    updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
                    hasNftMark: false
                },
                {
                    imageId: Badge.Commission1M,
                    imageIsActive: true,
                    badgeId: "00012",
                    badgeName: "1 млн комиссии по сделкам с Индией",
                    badgeAmount: 1,
                    updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
                    hasNftMark: false
                },
                {
                    imageId: Badge.Commission3M,
                    imageIsActive: true,
                    badgeId: "00013",
                    badgeName: "3 млн комиссии по сделкам с Индией",
                    badgeAmount: 1,
                    updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
                    hasNftMark: true,
                },
                {
                    imageId: Badge.CommissionX2,
                    imageIsActive: true,
                    badgeId: "00014",
                    badgeName: "х2 комиссии по сделкам с Индией",
                    badgeAmount: 2,
                    updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
                    hasNftMark: false
                },
                {
                    imageId: Badge.CommissionX3,
                    imageIsActive: true,
                    badgeId: "00015",
                    badgeName: "х3 комиссии по сделкам с Индией",
                    badgeAmount: 1,
                    updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
                    hasNftMark: false
                },
                {
                    imageId: Badge.CommissionX4,
                    imageIsActive: false,
                    badgeId: "00016",
                    badgeAmount: 1,
                    progressBarValue: 60,
                    badgeName: "х4 комиссии по сделкам с Индией",
                    updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
                    hasNftMark: false
                },
                {
                    imageId: Badge.ChampionLeague1,
                    imageIsActive: true,
                    badgeId: "00017",
                    badgeName: "Победитель Лиги Чемпионов 1ПГ 2023",
                    badgeAmount: 1,
                    updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
                    hasNftMark: false
                },
                {
                    imageId: Badge.ChampionLeague2,
                    imageIsActive: true,
                    badgeId: "00018",
                    badgeName: "Победитель Лиги Чемпионов 2ПГ 2023",
                    badgeAmount: 1,
                    hasNftMark: false,
                    updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
                },
                {
                    imageId: Badge.SuperCup2023,
                    imageIsActive: false,
                    badgeId: "00019",
                    badgeName: "Победитель Суперкубка 2023",
                    badgeAmount: 1,
                    updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
                    progressBarValue: 50,
                    hasNftMark: false
                },
                {
                    imageId: Badge.SuperBonus1,
                    imageIsActive: true,
                    badgeId: "00020",
                    badgeName: "1 место Сверхбонуса 1ПГ 2023",
                    updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
                    badgeAmount: 1,
                    hasNftMark: true
                },
                {
                    imageId: Badge.SuperBonusTop10,
                    imageIsActive: true,
                    badgeId: "00021",
                    badgeName: "ТОП-10% Сверхбонуса 1ПГ 2023",
                    updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
                    badgeAmount: 1,
                    hasNftMark: false
                },
                {
                    imageId: Badge.SuperBonusTop20,
                    imageIsActive: true,
                    badgeId: "00022",
                    badgeName: "ТОП-20% Сверхбонуса 1ПГ 2023",
                    updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
                    badgeAmount: 1,
                    hasNftMark: false
                },
                {
                    imageId: Badge.SuperBonusNFT,
                    imageIsActive: true,
                    badgeId: "00023",
                    badgeName: "ТОП-20+% Сверхбонуса 1ПГ 2023",
                    updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
                    badgeAmount: 1,
                    hasNftMark: false
                },
            ]
        },
        {
            badgeTypeName: "Бейджи за победы в турнирах",
            badges: [
                {
                    imageId: Badge.ConditionalsChampionFirst,
                    imageIsActive: false,
                    badgeId: "00024",
                    badgeName: "Чемпион страны по условным сделкам",
                    badgeAmount: 1,
                    updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
                    hasNftMark: true
                },
                {
                    imageId: Badge.ConditionalsChampionSecond,
                    imageIsActive: true,
                    badgeId: "00025",
                    badgeName: "Чемпион ТБ по условным сделкам",
                    badgeAmount: 2,
                    updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
                    hasNftMark: false
                },
                {
                    imageId: Badge.ConditionalsChampionThird,
                    imageIsActive: true,
                    badgeId: "00026",
                    badgeName: "Чемпион подразделения по условным сделкам",
                    badgeAmount: 1,
                    updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
                    hasNftMark: false
                },
            ]
        }
    ]
}
=======
          imageId: Badge.Commission50k,
          imageIsActive: true,
          badgeId: "00010",
          badgeName: "50 тыс. комиссии по сделкам с Индией",
          badgeAmount: 2,
          receivingDate: "17.11.22",
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          hasNftMark: false,
        },
        {
          imageId: Badge.Commission200k,
          imageIsActive: true,
          badgeId: "00011",
          badgeName: "200 тыс. комиссии по сделкам с Индией",
          badgeAmount: 1,
          receivingDate: "05.02.22",
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          hasNftMark: false,
        },
        {
          imageId: Badge.Commission1M,
          imageIsActive: true,
          badgeId: "00012",
          badgeName: "1 млн комиссии по сделкам с Индией",
          badgeAmount: 1,
          receivingDate: "20.10.22",
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          hasNftMark: false,
        },
        {
          imageId: Badge.Commission3M,
          imageIsActive: true,
          badgeId: "00013",
          badgeName: "3 млн комиссии по сделкам с Индией",
          badgeAmount: 1,
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          hasNftMark: true,
          receivingDate: "17.07.23",
        },
        {
          imageId: Badge.CommissionX2,
          imageIsActive: true,
          badgeId: "00014",
          badgeName: "х2 комиссии по сделкам с Индией",
          badgeAmount: 2,
          receivingDate: "25.01.22",
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          hasNftMark: false,
        },
        {
          imageId: Badge.CommissionX3,
          imageIsActive: true,
          badgeId: "00015",
          badgeName: "х3 комиссии по сделкам с Индией",
          badgeAmount: 1,
          receivingDate: "19.08.22",
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
          receivingDate: "11.01.22",
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
          receivingDate: "01.12.22",
          hasNftMark: false,
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
        },
        {
          imageId: Badge.SuperCup2023,
          imageIsActive: false,
          badgeId: "00019",
          badgeName: "Победитель Суперкубка 2023",
          badgeAmount: 1,
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          progressBarValue: 50,
          hasNftMark: false,
        },
        {
          imageId: Badge.SuperBonus1,
          imageIsActive: true,
          badgeId: "00020",
          badgeName: "1 место Сверхбонуса 1ПГ 2023",
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          badgeAmount: 1,
          receivingDate: "01.12.22",
          hasNftMark: false,
        },
        {
          imageId: Badge.SuperBonusTop10,
          imageIsActive: true,
          badgeId: "00021",
          badgeName: "ТОП-10% Сверхбонуса 1ПГ 2023",
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          badgeAmount: 1,
          receivingDate: "30.03.22",
          hasNftMark: false,
        },
        {
          imageId: Badge.SuperBonusTop20,
          imageIsActive: true,
          badgeId: "00022",
          badgeName: "ТОП-20% Сверхбонуса 1ПГ 2023",
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          badgeAmount: 1,
          receivingDate: "19.04.22",
          hasNftMark: false,
        },
        {
          imageId: Badge.SuperBonusNFT,
          imageIsActive: true,
          badgeId: "00023",
          badgeName: "ТОП-20+% Сверхбонуса 1ПГ 2023",
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          badgeAmount: 1,
          receivingDate: "01.12.22",
          hasNftMark: true,
        },
      ],
    },
    {
      badgeTypeName: "Бейджи за победы в турнирах",
      badges: [
        {
          imageId: Badge.ConditionalsChampionFirst,
          imageIsActive: false,
          badgeId: "00024",
          badgeName: "Чемпион страны по условным сделкам",
          badgeAmount: 1,
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          progressBarValue: 90,
          hasNftMark: true,
        },
        {
          imageId: Badge.ConditionalsChampionSecond,
          imageIsActive: true,
          badgeId: "00025",
          badgeName: "Чемпион ТБ по условным сделкам",
          badgeAmount: 2,
          receivingDate: "18.08.22",
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          hasNftMark: false,
        },
        {
          imageId: Badge.ConditionalsChampionThird,
          imageIsActive: true,
          badgeId: "00026",
          badgeName: "Чемпион подразделения по условным сделкам",
          badgeAmount: 1,
          receivingDate: "31.01.22",
          updateTooltip:
            "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
          hasNftMark: false,
        },
      ],
    },
  ],
};
>>>>>>> Stashed changes

export const badgeId = {
  imageId: Badge.ConditionalsChampionSecond,
  badgeId: "00019",
  imageIsActive: true,
  badgeName: "Махараджа",
  badgeAmount: 1,
  receivingDate: "22.12.22",
  badgeType: "individual",
  updateTooltip:
    "Информация об участниках и достижениях обновляется ежедневно. Последнее обновление информации - 12 ноября",
  progressBarValue: 70,
  hasNftMark: true,
  rewardCrystalCount: 60,
  specification: {
    description:
      "Продайте клиенту депозит или НСО с минимальной ставкой в диапазоне от 30 до 100 млн. руб. на срок от 31 до 60 дней и станьте победителем турнира «Минимальная ставка по депозиту» по стране.",
    features: [
      {
        number: 1,
        feature: "Достижение попадает в ленту",
      },
    ],
  },
  progress: {
    current: "104 из 1000 тыс. руб.",
    condition: "Осталось 896 тыс.",
  },
  tournamentName: "Минимальная ставка по депозиту",
  tournaments: [
    {
<<<<<<< Updated upstream
        imageId: Badge.ConditionalsChampionSecond,
        badgeId: "00019",
        imageIsActive: true,
        badgeName: "Махараджа",
        badgeAmount: 1,
        badgeType: "individual",
        updateTooltip: "Информация об участниках и достижениях обновляется ежедневно. Последнее обновление информации - 12 ноября",
        progressBarValue: 70,
        hasNftMark: true,
        rewardCrystalCount: 60,
        specification: {
            description: "Продайте клиенту депозит или НСО с минимальной ставкой в диапазоне от 30 до 100 млн. руб. на срок от 31 до 60 дней и станьте победителем турнира «Минимальная ставка по депозиту» по стране.",
            features: [
                {
                    number: 1,
                    feature: "Достижение попадает в ленту"
                }
            ]
        },
        progress: {
            current: "104 из 1000 тыс. руб.",
            condition: "Осталось 896 тыс."
        },
        tournamentName: "Минимальная ставка по депозиту",
        tournaments: [
            {
                tournamentId: "5708a086-f0ba-47f4-92ec-afc49ab1aa62",
                    status: {
                    name: "Идет сейчас",
                    color: "green-30"
                },
                ratingStatusName: "Вы в лидерах",
                periodName: "осталось 12 дней"
            },
            {
                tournamentId: "5708a086-f0ba-47f4-92ec-afc49ab1bb44",
                status: {
                    name: "Закончился",
                    color: "red-60"
                },
                ratingStatusName: "Вы на 105 месте",
                periodName: "31.10–07.11.2022"
            }
        ]
    }

export const badgeID = [{
        imageId: Badge.Commission50k,
        badgeId: "00010",
        imageIsActive: true,
        badgeName: "50 тыс. комиссии по сделкам с Индией",
        badgeAmount: 2,
        badgeType: "individual",
        updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
        hasNftMark: false,
        rewardCrystalCount: 5,
        specification: {
            description: "Войди в число лучших их лучших в турнире \"Марафон по условным сделкам\" на уровне всей страны.",
            features: [
                {
                    number: 1,
                    feature: "Факт получения бейджа попадает в ленту сообщества"
                }
            ]
        }
    },
        {
            imageId: Badge.Commission200k,
            imageIsActive: true,
            badgeId: "00011",
            badgeName: "200 тыс. комиссии по сделкам с Индией",
            badgeAmount: 1,
            badgeType: "individual",
            updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
            hasNftMark: false,
            rewardCrystalCount: 15,
            specification: {
                description: "Продолжай в том же духе!\n" +
                    "Собери для банка 200 тыс.руб. комиссии от импортных сделок своих клиентов с индийскими контрагентами, номинированных в рублях и эта награда твоя!",
                features: [
                    {
                        number: 1,
                        feature: "Бейдж можно получить только один раз, накопив требуемую сумму комиссии"
                    }
                ]
            }
=======
      tournamentId: "5708a086-f0ba-47f4-92ec-afc49ab1aa62",
      status: {
        name: "Идет сейчас",
        color: "green-30",
      },
      ratingStatusName: "Вы в лидерах",
      periodName: "осталось 12 дней",
    },
    {
      tournamentId: "5708a086-f0ba-47f4-92ec-afc49ab1bb44",
      status: {
        name: "Закончился",
        color: "red-60",
      },
      ratingStatusName: "Вы на 105 месте",
      periodName: "12.04–18.07.2023",
    },
  ],
};

export const badgeID = [
  {
    imageId: Badge.Commission50k,
    badgeId: "00010",
    imageIsActive: true,
    badgeName: "50 тыс. комиссии по сделкам с Индией",
    badgeAmount: 2,
    badgeType: "individual",
    receivingDate: "17.11.22",
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
>>>>>>> Stashed changes
        },
      ],
    },
  },
  {
    imageId: Badge.Commission200k,
    imageIsActive: true,
    badgeId: "00011",
    badgeName: "200 тыс. комиссии по сделкам с Индией",
    badgeAmount: 1,
    receivingDate: "05.02.22",
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
<<<<<<< Updated upstream
            imageIsActive: true,
            imageId: Badge.Commission1M,
            badgeId: "00012",
            badgeName: "1 млн комиссии по сделкам с Индией",
            badgeAmount: 1,
            badgeType: "individual",
            updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
            hasNftMark: false,
            rewardCrystalCount: 30,
            specification: {
                description: "Ты уже отлично поработал!\n" +
                    "Следующая цель - 1 млн.руб. комиссии от импортных сделок своих клиентов с индийскими контрагентами, номинированных в рублях.",
                features: [
                    {
                        number: 1,
                        feature: "Бейдж можно получить только один раз, накопив требуемую сумму комиссии"
                    }
                ]
            }
=======
          number: 1,
          feature:
            "Бейдж можно получить только один раз, накопив требуемую сумму комиссии",
>>>>>>> Stashed changes
        },
      ],
    },
  },
  {
    imageIsActive: true,
    imageId: Badge.Commission1M,
    badgeId: "00012",
    badgeName: "1 млн комиссии по сделкам с Индией",
    badgeAmount: 1,
    receivingDate: "20.10.22",
    badgeType: "individual",
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
<<<<<<< Updated upstream
            imageId: Badge.Commission3M,
            imageIsActive: true,
            badgeId: "00013",
            badgeName: "3 млн комиссии по сделкам с Индией",
            badgeAmount: 1,
            badgeType: "individual",
            updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
            hasNftMark: true,
            rewardCrystalCount: 50,
            specification: {
                description: "Эта награда для лучших из лучших!\n" +
                    "Собери для банка 3 млн.руб. комиссии от импортных сделок своих клиентов с индийскими контрагентами, номинированных в рублях и долгожданная награда станет твоей!",
                features: [
                    {
                        number: 1,
                        feature: "- Бейдж можно получить только один раз, накопив требуемую сумму комиссии\n" +
                            "- Факт получения бейджа попадает в ленту сообщества"
                    }
                ]
            }
        },
    {
        imageId: Badge.CommissionX2,
        imageIsActive: true,
        badgeId: "00014",
        badgeName: "х2 комиссии по сделкам с Индией",
        badgeAmount: 2,
        badgeType: "individual",
        updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
        hasNftMark: false,
        rewardCrystalCount: 3,
        specification: {
            description: "Ты можешь это сделать!\n" +
                "Собери для банка комиссии в текущем месяце в 2 раза больше, чем в предыдущем от сделок своих клиентов с индийскими контрагентами, номинированных в рублях и получи свою награду!",
            features: [
                {
                    number: 1,
                    feature: "Бейдж можно получить только один раз, накопив требуемую сумму комиссии"
                }
            ]
        }
    },
    {
        imageId: Badge.CommissionX3,
        imageIsActive: true,
        badgeId: "00015",
        badgeName: "х3 комиссии по сделкам с Индией",
        badgeAmount: 1,
        badgeType: "individual",
        updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
        hasNftMark: false,
        rewardCrystalCount: 7,
        specification: {
            description: "Покажи серьезный и основательный подход к делу!\n" +
                "Собери для банка комиссии в текущем месяце в 3 раза больше, чем в предыдущем от сделок своих клиентов с индийскими контрагентами, номинированных в рублях и получи свою награду!",
            features: [
                {
                    number: 1,
                    feature: "Бейдж можно получить только один раз, накопив требуемую сумму комиссии"
                }
            ]
        }
    },
    {
        imageId: Badge.CommissionX4,
        imageIsActive: false,
        badgeId: "00016",
        badgeAmount: 1,
        badgeName: "х4 комиссии по сделкам с Индией",
        badgeType: "individual",
        updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
        hasNftMark: false,
        rewardCrystalCount: 15,
        progressBarValue: 60,
        progress: {
            current: '104 из 1000 тыс. руб.',
            condition: 'Осталось 896 тыс.',
=======
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
    badgeName: "3 млн комиссии по сделкам с Индией",
    badgeAmount: 1,
    badgeType: "individual",
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
    hasNftMark: true,
    rewardCrystalCount: 50,
    receivingDate: "17.07.23",
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
>>>>>>> Stashed changes
        },
      ],
    },
<<<<<<< Updated upstream
    {
        imageId: Badge.ChampionLeague1,
        imageIsActive: true,
        badgeId: "00017",
        badgeName: "Победитель Лиги Чемпионов 1ПГ 2023",
        badgeAmount: 1,
        badgeType: "individual",
        updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
        hasNftMark: false,
        rewardCrystalCount: 30,
        specification: {
            description: "Докажите, что лучшие!\n" +
                "Войдите командой в Лигу Чимпионов 1ПГ 2023 года и получите награду!",
            features: [
                {
                    number: 1,
                    feature: "Факт получения бейджа попадает в ленту сообщества"
                }
            ]
        }
    },
    {
        imageId: Badge.ChampionLeague2,
        imageIsActive: true,
        badgeId: "00018",
        badgeName: "Победитель Лиги Чемпионов 2ПГ 2023",
        badgeAmount: 1,
        badgeType: "individual",
        updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
        hasNftMark: false,
        rewardCrystalCount: 30,
        specification: {
            description: "Докажите, что лучшие!\n" +
                "Войдите командой в Лигу Чимпионов 2ПГ 2023 года и получите награду!",
            features: [
                {
                    number: 1,
                    feature: "Факт получения бейджа попадает в ленту сообщества"
                }
            ]
        }
    },
    {
        imageId: Badge.SuperCup2023,
        imageIsActive: false,
        badgeId: "00019",
        badgeName: "Победитель Суперкубка 2023",
        badgeAmount: 1,
        updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
        badgeType: "individual",
        hasNftMark: false,
        rewardCrystalCount: 40,
        specification: {
            description: "Только лучшие из лучших станут победителями Суперкубка.\n" +
                "Войдите командой в число победителей 2023 года и получите награду!",
            features: [
                {
                    number: 1,
                    feature: "Факт получения бейджа попадает в ленту сообщества"
                }
            ]
        }
    },
    {
        imageId: Badge.SuperBonus1,
        imageIsActive: true,
        badgeId: "00020",
        badgeName: "1 место Сверхбонуса 1ПГ 2023",
        updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
        badgeAmount: 1,
        badgeType: "individual",
        hasNftMark: true,
        rewardCrystalCount: 50,
        specification: {
            description: "Возьми \"Сверхбонус\" вместе со своей командой в 1ПГ 2023!\n" +
                "Займите первое место в своем территориальном банке среди всех КПК.",
            features: [
                {
                    number: 1,
                    feature: "Факт получения бейджа попадает в ленту сообщества"
                }
            ]
        }
    },
    {
        imageId: Badge.SuperBonusTop10,
        imageIsActive: true,
        badgeId: "00021",
        badgeName: "ТОП-10% Сверхбонуса 1ПГ 2023",
        updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
        badgeAmount: 1,
        badgeType: "individual",
        hasNftMark: false,
        rewardCrystalCount: 30,
        specification: {
            description: "Возьми \"Сверхбонус\" вместе со своей командой в 1ПГ 2023!\n" +
                "Войдите в ТОП-10% КПК в своем территориальном банке.",
            features: [
                {
                    number: 1,
                    feature: "Факт получения бейджа попадает в ленту сообщества"
                }
            ]
        }
    },
    {
        imageId: Badge.SuperBonusTop20,
        imageIsActive: true,
        badgeId: "00022",
        badgeName: "ТОП-20% Сверхбонуса 1ПГ 2023",
        updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
        badgeAmount: 1,
        badgeType: "individual",
        hasNftMark: false,
        rewardCrystalCount: 20,
        specification: {
            description: "Возьми \"Сверхбонус\" вместе со своей командой в 1ПГ 2023!\n" +
                "Войдите в ТОП-20% КПК в своем территориальном банке.",
            features: [
                {
                    number: 1,
                    feature: "Факт получения бейджа попадает в ленту сообщества"
                }
            ]
        }
    },
    {
        imageId: Badge.SuperBonusNFT,
        imageIsActive: true,
        badgeId: "00023",
        badgeName: "ТОП-20+% Сверхбонуса 1ПГ 2023",
        updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
        badgeAmount: 1,
        badgeType: "individual",
        hasNftMark: false,
        rewardCrystalCount: 15,
        specification: {
            description: "Возьми \"Сверхбонус\" вместе со своей командой в 1ПГ 2023!\n" +
                "Войдите в ТОП-20+% КПК в своем территориальном банке.",
            features: [
                {
                    number: 1,
                    feature: "Факт получения бейджа попадает в ленту сообщества"
                }
            ]
        }
    },
    {
        imageId: Badge.ConditionalsChampionFirst,
        imageIsActive: true,
        badgeId: "00024",
        badgeName: "Чемпион страны по условным сделкам",
        badgeAmount: 1,
        updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
        hasNftMark: true,
        badgeType: "forTheTournament",
        rewardCrystalCount: 30,
        progress: {
            current: '',
            condition: '',
=======
  },
  {
    imageId: Badge.CommissionX2,
    imageIsActive: true,
    badgeId: "00014",
    badgeName: "х2 комиссии по сделкам с Индией",
    badgeAmount: 2,
    receivingDate: "25.01.22",
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
>>>>>>> Stashed changes
        },
      ],
    },
<<<<<<< Updated upstream
    {
        imageId: Badge.ConditionalsChampionSecond,
        imageIsActive: true,
        badgeId: "00025",
        badgeName: "Чемпион ТБ по условным сделкам",
        badgeAmount: 2,
        updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
        hasNftMark: false,
        badgeType: "forTheTournament",
        rewardCrystalCount: 30,
        progress: {
            current: '',
            condition: '',
=======
  },
  {
    imageId: Badge.CommissionX3,
    imageIsActive: true,
    badgeId: "00015",
    badgeName: "х3 комиссии по сделкам с Индией",
    badgeAmount: 1,
    receivingDate: "19.08.22",
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
>>>>>>> Stashed changes
        },
      ],
    },
<<<<<<< Updated upstream
    {
        imageId: Badge.ConditionalsChampionThird,
        imageIsActive: true,
        badgeId: "00026",
        badgeName: "Чемпион подразделения по условным сделкам",
        badgeAmount: 1,
        updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
        hasNftMark: false,
        badgeType: "forTheTournament",
        rewardCrystalCount: 5,
        progress: {
            current: '',
            condition: '',
=======
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
      condition: "Осталось 896 тыс.",
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
>>>>>>> Stashed changes
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
    receivingDate: "11.01.22",
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
    receivingDate: "01.12.22",
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
    imageIsActive: false,
    badgeId: "00019",
    badgeName: "Победитель Суперкубка 2023",
    badgeAmount: 1,
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
    progressBarValue: 50,
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
    imageId: Badge.SuperBonus1,
    imageIsActive: true,
    badgeId: "00020",
    badgeName: "1 место Сверхбонуса 1ПГ 2023",
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
    badgeAmount: 1,
    receivingDate: "01.12.22",
    badgeType: "individual",
    hasNftMark: false,
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
    imageId: Badge.SuperBonusTop10,
    imageIsActive: true,
    badgeId: "00021",
    badgeName: "ТОП-10% Сверхбонуса 1ПГ 2023",
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
    badgeAmount: 1,
    receivingDate: "30.03.22",
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
    imageId: Badge.SuperBonusTop20,
    imageIsActive: true,
    badgeId: "00022",
    badgeName: "ТОП-20% Сверхбонуса 1ПГ 2023",
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
    badgeAmount: 1,
    receivingDate: "19.04.22",
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
    imageId: Badge.SuperBonusNFT,
    imageIsActive: true,
    badgeId: "00023",
    badgeName: "ТОП-20+% Сверхбонуса 1ПГ 2023",
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
    badgeAmount: 1,
    receivingDate: "01.12.22",
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
    imageIsActive: false,
    badgeId: "00024",
    badgeName: "Чемпион страны по условным сделкам",
    badgeAmount: 1,
    updateTooltip:
      "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 24 июля",
    progressBarValue: 90,
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
    badgeName: "Чемпион ТБ по условным сделкам",
    badgeAmount: 2,
    receivingDate: "18.08.22",
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
    badgeName: "Чемпион подразделения по условным сделкам",
    badgeAmount: 1,
    receivingDate: "31.01.22",
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

export const badgeIdProfiles = {
  badge: {
    badgeId: "00019",
    contestants: "1250 участников",
    leaders: [
      {
        employeeNumber: "010122",
        isMarked: true,
        firstName: "Илья",
        lastName: "Герасимчук",
        photoData: "URL_in_Base64",
        terDivisionName: "ЦБ",
        indicatorValue: "12",
        placeInRating: 3,
        colorCode: {
          primary: "blue-60",
          secondary: "blue-30",
        },
      },
      {
        employeeNumber: "010122",
        isMarked: false,
        firstName: "Илья",
        lastName: "Герасимчук",
        photoData: "URL_in_Base64",
        terDivisionName: "ЦБ",
        indicatorValue: "12",
        placeInRating: 3,
        colorCode: {
          primary: "blue-60",
          secondary: "blue-30",
        },
      },
    ],
  },
};

export const badgeAllProfiles = [
  {
    divisionLevelName: "Страна",
    contestants: "33 участника",
    leaders: [
      {
        employeeNumber: "010122",
        isMarked: true,
        firstName: "Илья",
        lastName: "Герасимчук",
        photoData: "URL_in_Base64",
        terDivisionName: "ЦБ",
        indicatorValue: "12",
        placeInRating: 3,
        colorCode: {
          primary: "blue-60",
          secondary: "blue-30",
        },
      },
      {
        employeeNumber: "010122",
        isMarked: false,
        firstName: "Илья",
        lastName: "Герасимчук",
        photoData: "URL_in_Base64",
        terDivisionName: "ЦБ",
        indicatorValue: "12",
        placeInRating: 3,
        colorCode: {
          primary: "blue-60",
          secondary: "blue-30",
        },
      },
    ],
  },
  {
    divisionLevelName: "Тербанк",
    contestants: "3 участника",
    leaders: [
      {
        employeeNumber: "010122",
        isMarked: true,
        firstName: "Илья",
        lastName: "Герасимчук",
        photoData: "URL_in_Base64",
        terDivisionName: "ЦБ",
        indicatorValue: "12",
        placeInRating: 3,
        colorCode: {
          primary: "blue-60",
          secondary: "blue-30",
        },
      },
      {
        employeeNumber: "010122",
        isMarked: false,
        firstName: "Илья",
        lastName: "Герасимчук",
        photoData: "URL_in_Base64",
        terDivisionName: "ЦБ",
        indicatorValue: "12",
        placeInRating: 3,
        colorCode: {
          primary: "blue-60",
          secondary: "blue-30",
        },
      },
    ],
  },
  {
    divisionLevelName: "Подразделение",
    contestants: "1 участник",
    leaders: [
      {
        employeeNumber: "010122",
        isMarked: true,
        firstName: "Илья",
        lastName: "Герасимчук",
        photoData: "URL_in_Base64",
        terDivisionName: "ЦБ",
        indicatorValue: "12",
        placeInRating: 3,
        colorCode: {
          primary: "blue-60",
          secondary: "blue-30",
        },
      },
      {
        employeeNumber: "010122",
        isMarked: false,
        firstName: "Илья",
        lastName: "Герасимчук",
        photoData: "URL_in_Base64",
        terDivisionName: "ЦБ",
        indicatorValue: "12",
        placeInRating: 3,
        colorCode: {
          primary: "blue-60",
          secondary: "blue-30",
        },
      },
    ],
  },
];
