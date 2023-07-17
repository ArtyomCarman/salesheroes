import {EmployeeStatus} from "../interfaces";

export const profileContestant = {
    employeeNumber: "00001",
    lastName: "Кузьменко",
    firstName: "Игорь",
    tbShortName: "СРБ",
    gosbName: undefined,
    funcDivisionName: undefined,
    positionName: 'КМ',
    photoData: "Base64 ... ",
    colorCode: {
        primary: "blue-60",
        secondary: "blue-30"
    },
    employeeStatus: EmployeeStatus.Contestant
}

export const profileObserver = {
    employeeNumber: "00002",
    lastName: "Гайн",
    firstName: "Роман",
    tbShortName: "ЦЧБ",
    gosbName: null,
    funcDivisionName: null,
    positionName: '',
    photoData: "Base64 ... ",
    colorCode: {
        primary: "gray-60",
        secondary: "gray-30"
    },
    employeeStatus: EmployeeStatus.Non_Contestant
}

export const profileTopManager = {
    employeeNumber: "00003",
    lastName: "Меламед",
    firstName: "Сергей",
    tbShortName: "ЦЧБ",
    gosbName: undefined,
    funcDivisionName: undefined,
    positionName: 'Руководитель',
    photoData: "Base64 ... ",
    colorCode: {
        primary: "gradient",
        secondary: "gradient"
    },
    employeeStatus: EmployeeStatus.Top_Manager
}