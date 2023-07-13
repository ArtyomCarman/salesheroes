export const badges = {
    badgesUserHas: 12,
    badgesInTotal: 30,
    badgesType: [
        {
            badgeTypeName: "Индивидуальные бейджи",
            badges: [
                {
                    imageId: "BRAVEMANGOOSE",
                    imageIsActive: true,
                    badgeId: "00010",
                    badgeName: "10 годовых депозитов",
                    badgeAmount: 2,
                    receivingDate: "25.01.22",
                    updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
                    progressBarValue: 70,
                    hasNftMark: true
                }
            ]
        },
        {
            badgeTypeName: "Бейджи за победы в турнирах",
            badges: [
                {
                    imageId: "BRAVEMANGOOSE",
                    imageIsActive: true,
                    badgeId: "00010",
                    badgeName: "10 годовых депозитов",
                    badgeAmount: 2,
                    receivingDate: "25.01.22",
                    updateTooltip: "Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — 12 марта",
                    progressBarValue: 70,
                    hasNftMark: true
                }
            ]
        }
    ]
}

export const badgeId = {
    imageId: "BRAVEMANGOOSE",
    badgeId: "00010",
    imageIsActive: true,
    badgeName: "Махараджа",
    badgeAmount: 1,
    receivingDate: "22.12.22",
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

export const badgeIdProfiles = {
    badge: {
        badgeId: "00010",
        contestants: "1250 участников",
        leaders: [
            {
                employeeNumber: "010122",
                isMarked: true,
                firstName: "Илья",
                lastName: "Герасимчук",
                photoData: "URL_in_Base64",
                terDivisionName: "ЦБ",
                colorCode: {
                    primary: "blue-60",
                    secondary: "blue-30"
                }
            },
            {
                employeeNumber: "010122",
                isMarked: true,
                firstName: "Илья",
                lastName: "Герасимчук",
                photoData: "URL_in_Base64",
                terDivisionName: "ЦБ",
                colorCode: {
                    primary: "blue-60",
                    secondary: "blue-30"
                }
            },
        ]
    },
}

export const badgeAllProfiles = [
    {
        divisionLevelName: "Страна",
        contestants: "1250 участников",
        leaders: [
        {
            employeeNumber: "010122",
            isMarked: true,
            firstName: "Илья",
            lastName: "Герасимчук",
            photoData: "URL_in_Base64",
            terDivisionName: "ЦБ",
            colorCode: {
                primary: "blue-60",
                secondary: "blue-30"
            }
        },
        {
            employeeNumber: "010122",
            isMarked: true,
            firstName: "Илья",
            lastName: "Герасимчук",
            photoData: "URL_in_Base64",
            terDivisionName: "ЦБ",
            colorCode: {
                primary: "blue-60",
                secondary: "blue-30"
            }
        },
        ]
    },
]