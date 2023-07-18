import {EmployeeStatus} from "../interfaces";
import Меламед from '../assets/images/Сергей Меламед.jpeg';
import ЧернышоваЕлена from '../assets/images/Елена Чернышова.jpeg';
import Юлианна from '../assets/images/Юлианна Егорова.jpeg'
import ШебановаОльга from "../assets/images/Шебанова Ольга Евгеньевна.jpeg";
import СеркбаеваАлтын from "../assets/images/Серкбаева Алтын Суннатовна.jpeg";

export const likes = {
    isLiked: true,
    likesAmount: 8,
    bossNames: [
        "Попов А.Л",
        "Ситнов В.В.",
        "Меламед С.В.",
        "Чернышова Е.В.",
        "Егорова Ю.И.",
    ],
    people: [{
        position: '1',
        list: [
            {
                employeeNumber: "40",
                photoData: '',
                terDivisionName: "ЦА",
                firstName: "Анатолий",
                lastName: "Попов",
                colorCode: {
                    primary: "gradient",
                    secondary: "gradient"
                },
                employeeStatus: EmployeeStatus.Top_Manager
            },
            {
                employeeNumber: "41",
                photoData: "",
                terDivisionName: "ЦА",
                firstName: "Владимир",
                lastName: "Ситнов",
                colorCode: {
                    primary: "gradient",
                    secondary: "gradient"
                },
                employeeStatus: EmployeeStatus.Top_Manager
            },
            {
                employeeNumber: "42",
                photoData: Меламед,
                terDivisionName: "ЦА",
                firstName: "Сергей",
                lastName: "Меламед",
                colorCode: {
                    primary: "gradient",
                    secondary: "gradient"
                },
                employeeStatus: EmployeeStatus.Top_Manager
            },
            {
                employeeNumber: "43",
                photoData: ЧернышоваЕлена,
                terDivisionName: "ЦА",
                firstName: "Елена",
                lastName: "Чернышова",
                colorCode: {
                    primary: "gradient",
                    secondary: "gradient"
                },
                employeeStatus: EmployeeStatus.Top_Manager
            },
            {
                employeeNumber: "44",
                photoData: Юлианна,
                terDivisionName: "ЦА",
                firstName: "Юлианна",
                lastName: "Егорова",
                colorCode: {
                    primary: "gradient",
                    secondary: "gradient"
                },
                employeeStatus: EmployeeStatus.Top_Manager
            },
            {
                employeeNumber: "25",
                isMarked: false,
                firstName: "Алтын",
                lastName: "Серкбаева",
                photoData: СеркбаеваАлтын,
                terDivisionName: "УБ",
                colorCode: {
                    primary: "blue-60",
                    secondary: "blue-30",
                },
                employeeStatus: EmployeeStatus.Contestant
            },
            {
                employeeNumber: "11",
                isMarked: false,
                firstName: "Ярослав",
                lastName: "Митосев",
                photoData: "",
                terDivisionName: "МБ",
                colorCode: {
                    primary: "orange-60",
                    secondary: "orange-30",
                },
                employeeStatus: EmployeeStatus.Contestant
            },
            {
                employeeNumber: "31",
                isMarked: false,
                firstName: "Ольга",
                lastName: "Шебанова",
                photoData: ШебановаОльга,
                terDivisionName: "ЮЗБ",
                colorCode: {
                    primary: "light-green-30",
                    secondary: "light-green-20",
                },
                employeeStatus: EmployeeStatus.Contestant
            },
        ]
    }]
}