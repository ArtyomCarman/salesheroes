export const progress = {
    crystals: {
        crystalsEarned: 1956
    },
    userLevel: {
        currentLevelName: "Специалист",
        colorCode: {
            primary: "orange-60",
            secondary: "orange-30"
        },
        progressBar: {
            value: 70,
            info: "До следущего уровня 50 кристаллов"
        }
    },
    levelsDirectory: [
        {
            name: "Специалист",
            code: '1',
            lowBound: 0,
            achievementConditions: "0-50",
            colorCode: {
                primary: "light-green-60",
                secondary: "light-green-30"
            }
        },
        {
            name: "Эксперт",
            code: '2',
            lowBound: 50,
            achievementConditions: "50-100",
            colorCode: {
                primary: "orange-60",
                secondary: "orange-30"
            }
        },
        {
            name: "Мастер",
            code: '3',
            lowBound: 100,
            achievementConditions: "100+",
            colorCode: {
                primary: "blue-60",
                secondary: "blue-30"
            }
        }
    ]
}