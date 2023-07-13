import {Badge, Reward} from "../interfaces";

export const tournaments = {
    isArchiveButtonNeeds: true,
    ratingCategories: [
        {
            ratingCategoryName: "Вы в лидерах",
            tournaments: [
                {
                    employee: {
                        employeeNumber: "01924077",
                        photoData: "URL_in_Base64",
                        firstName: "Вероника",
                        lastName: "Трошина",
                        colorCode: {
                            primary: "blue-60",
                            secondary: "blue-30"
                        }
                    },
                    tournamentId: "5708a086-f0ba-47f4-92ec-afc49ab1aa62",
                    tournamentName: "Минимальная ставка по депозиту",
                    tournamentInfo: "Осталось 2 дня",
                    tournamentDurationName: "ТУРНИР НЕДЕЛИ",
                    progressBarValue: 70,
                    updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
                    reward: Reward.silver,
                    rating: [
                        {
                            divisionLevelResult: "из 1250 в стране",
                            placeInRating: 12,
                            reward: {
                                icon: Reward.gold,
                                tooltip: "Претендент на победу"
                            }
                        },
                        {
                            divisionLevelResult: "из 128 в кластере",
                            placeInRating: 7,
                            reward: {
                                icon: Reward.silver,
                                tooltip: "Победитель турнира"
                            }
                        },
                        {
                            divisionLevelResult: "из 15 в подразделении",
                            placeInRating: 5
                        }
                    ]
                }
            ]
        }
    ]
}

export const cluster = {
    text: 'text',
    amount: 'amount',
    divisions: ['123', '123'],
}

export const archiveTournamentId = {
    tournamentId: "5708a086-f0ba-47f4-92ec-afc49ab1aa62",
    hasNftMark: true,
    tournamentName: "Минимальная ставка по депозиту",
    status: "ACTIVE",
    ratingCategoryName: "Вы в лидерах",
    tournamentInfo: "Осталось 5 дней",
    tournamentDurationName: "квартальный турнир",
    lasting: "16 января — 20 января 2023",
    percentageIndicator: 70,
    updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
    rating: [
        {
            divisionLevelName: "Страна",
            contestants: 5000,
            placeInRating: 134,
            reward: {
                icon: "⁣SILVER_LIGHTNING",
                tooltip: "Претендент на победу"
            }
        },
    ],
    totalParticipants: "1250 участников",
    specification: {
        description: "some usefull info",
        features: [
            {
                number: 1,
                feature: "a usefull piece of text"
            },
        ]
    },
    rewards: [
        {
            divisionLevelName: "Кластер",
            rewardRule: "Получают 3% участников",
            badgeId: "255485d6-daab-41b0-866e-aa958875ebf7",
            badgeName: "Депозитный гений ГОСБ",
            imageId: Badge.BraveMangoose,
            badgeIcon: Badge.BraveMangoose,
            rewardCrystalCount: 60,
            hasNftMark: true
        },
    ]
}

export const tournamentShortList = [
    {
        divisionLevelName: "Страна",
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
                    tooltip: "Претендент на победу"
                },
                terDivisionName: "ЦА",
                isMarked: true,
                colorCode: {
                    primary: "blue-60",
                    secondary: "blue-30"
                }
            },
        ]
    },
    {
        divisionLevelName: "Кластер",
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
                    tooltip: "Претендент на победу"
                },
                terDivisionName: "ЦА",
                isMarked: true,
                colorCode: {
                    primary: "blue-60",
                    secondary: "blue-30"
                }
            },
        ]
    }, {
        divisionLevelName: "Подразделение",
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
                    tooltip: "Претендент на победу"
                },
                terDivisionName: "ЦА",
                isMarked: true,
                colorCode: {
                    primary: "blue-60",
                    secondary: "blue-30"
                }
            },
        ]
    },
]

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
                tooltip: "Победитель турнира"
            },
            terDivisionName: "ЦА",
            isMarked: true,
            colorCode: {
                primary: "blue-60",
                secondary: "blue-30"
            }
        }
    ]
}

export const archiveTournaments =  {
    tournaments: [
        {
            employee: {
                employeeNumber: "01924077",
                photoData: "URL_in_Base64",
                firstName: "Вероника",
                lastName: "Трошина",
                colorCode: {
                    primary: "blue-60",
                    secondary: "blue-30"
                }
            },
            tournamentId: "5708a086-f0ba-47f4-92ec-afc49ab1aa62",
            tournamentName: "Минимальная ставка по депозиту",
            tournamentInfo: "Турнир недели завершён • 17.02–23.02.23",
            tournamentDurationName: '123',
            reward: Reward.gold,
            rating: [
                {
                    divisionLevelResult: "из 1250 в стране",
                    placeInRating: 12,
                    reward: {
                        icon: Reward.silver,
                        tooltip: "Победитель турнира"
                    }
                }
            ]
        }
]}
