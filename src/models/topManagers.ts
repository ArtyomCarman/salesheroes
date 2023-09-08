import { EmployeeStatus } from "../interfaces";
import Меламед from "../assets/images/Сергей Меламед.jpeg";
import ЧернышоваЕлена from "../assets/images/Елена Чернышова.jpeg";
import Юлианна from "../assets/images/Юлианна Егорова.jpeg";
import ПоповАнатолий from "../assets/images/Попов Анатолий.png";
import СитновВладимир from "../assets/images/Ситнов Владимир.png";

const ПоповАнатолийПрофиль = {
  profileNumber: "40",
  photoData: ПоповАнатолий,
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
  progress: undefined,
};

const СитновВладимирПрофиль = {
  profileNumber: "41",
  photoData: СитновВладимир,
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
  progress: undefined,
};

const МеламедСергей = {
  profileNumber: "42",
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
  progress: undefined,
};

const ЕленаЧернышова = {
  profileNumber: "43",
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
  progress: undefined,
};
const ЕгороваЮлианна = {
  profileNumber: "44",
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
  progress: undefined,
};

export const topManagers = [
  СитновВладимирПрофиль,
  МеламедСергей,
  ЕгороваЮлианна,
  ЕленаЧернышова,
  ПоповАнатолийПрофиль,
];
