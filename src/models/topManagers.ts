import { EmployeeStatus } from "../interfaces";
import Меламед from "../assets/images/Сергей Меламед.jpeg";
import ЧернышоваЕлена from "../assets/images/Елена Чернышова.jpeg";
import Юлианна from "../assets/images/Юлианна Егорова.jpeg";

const ПоповАнатолий = {
  employeeNumber: "40",
  photoData: "",
  terDivisionName: "ЦА",
  firstName: "Анатолий",
  lastName: "Попов",
  colorCode: {
    primary: "gradient",
    secondary: "gradient",
  },
  employeeStatus: EmployeeStatus.Top_Manager,
  isMarked: false,
  indicatorValue: "5",
  reward: undefined,
  placeInRating: 27,
  positionName: "Заместитель Председателя Правления",
};

const СитновВладимир = {
  employeeNumber: "41",
  photoData: "",
  terDivisionName: "ЦА",
  firstName: "Владимир",
  lastName: "Ситнов",
  colorCode: {
    primary: "gradient",
    secondary: "gradient",
  },
  employeeStatus: EmployeeStatus.Top_Manager,
  isMarked: false,
  indicatorValue: "5",
  reward: undefined,
  placeInRating: 27,
  positionName: "Старший вице-президент",
};

const МеламедСергей = {
  employeeNumber: "42",
  photoData: Меламед,
  terDivisionName: "ЦА",
  firstName: "Сергей",
  lastName: "Меламед",
  colorCode: {
    primary: "gradient",
    secondary: "gradient",
  },
  employeeStatus: EmployeeStatus.Top_Manager,
  isMarked: false,
  indicatorValue: "5",
  reward: undefined,
  placeInRating: 27,
  positionName: "Старший управляющий директор-директор департамента",
};

const ЕленаЧернышова = {
  employeeNumber: "43",
  photoData: ЧернышоваЕлена,
  terDivisionName: "ЦА",
  firstName: "Елена",
  lastName: "Чернышова",
  colorCode: {
    primary: "gradient",
    secondary: "gradient",
  },
  employeeStatus: EmployeeStatus.Top_Manager,
  isMarked: false,
  indicatorValue: "5",
  reward: undefined,
  placeInRating: 27,
  positionName: "Управляющий директор",
};
const ЕгороваЮлианна = {
  employeeNumber: "44",
  photoData: Юлианна,
  terDivisionName: "ЦА",
  firstName: "Юлианна",
  lastName: "Егорова",
  colorCode: {
    primary: "gradient",
    secondary: "gradient",
  },
  employeeStatus: EmployeeStatus.Top_Manager,
  isMarked: false,
  indicatorValue: "5",
  reward: undefined,
  placeInRating: 27,
  positionName: "Управляющий директор",
};

export const topManagers = [
  СитновВладимир,
  МеламедСергей,
  ЕгороваЮлианна,
  ЕленаЧернышова,
  ПоповАнатолий,
];
