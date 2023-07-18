import {EmployeeStatus} from "../interfaces";

export const likes = {
    isLiked: true,
    likesAmount: 12,
    bossNames: [
        "Попов А.Л",
        "Анисимова И.С.",
        "Константинопольский С.В."
    ],
    people: [{
        position: '1',
        list: [{
            employeeNumber: "01924077",
            photoData: "Base64",
            terDivisionName: "ЦБ",
            firstName: "Вероника",
            lastName: "Трошина",
            colorCode: {
                primary: "blue-60",
                secondary: "blue-30"
            },
            employeeStatus: EmployeeStatus.Top_Manager
        },
            {
                employeeNumber: "01924077",
                photoData: "URL_in_Base64",
                terDivisionName: "ЦБ",
                firstName: "Вероника",
                lastName: "Трошина",
                colorCode: {
                    primary: "blue-60",
                    secondary: "blue-30"
                },
                employeeStatus: EmployeeStatus.Contestant
            }]
    }]
}