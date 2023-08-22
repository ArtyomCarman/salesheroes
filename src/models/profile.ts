import { EmployeeStatus } from "../interfaces";
import ГайнРоман from "../assets/images/romanGayn.png";
import МеламедСергей from "../assets/images/Сергей Меламед.jpeg";

export const profileContestant = {
  profileNumber: "22",
  lastName: "Гайн",
  firstName: "Роман",
  tbShortName: "СРБ",
  gosbName: undefined,
  funcDivisionName: undefined,
  positionName: "КМ",
  photoData: ГайнРоман,
  colorCode: {
    primary: "blue-60",
    secondary: "blue-30",
  },
  employeeStatus: EmployeeStatus.Contestant,
  progress: undefined,
};

export const profileObserver = {
  profileNumber: "00002",
  lastName: "Гайн",
  firstName: "Роман",
  tbShortName: "ЦЧБ",
  gosbName: null,
  funcDivisionName: null,
  positionName: "",
  photoData: "Base64 ... ",
  colorCode: {
    primary: "gray-60",
    secondary: "gray-30",
  },
  employeeStatus: EmployeeStatus.Non_Contestant,
};

export const profileTopManager = {
  profileNumber: "00003",
  lastName: "Меламед",
  firstName: "Сергей",
  tbShortName: "ЦЧБ",
  terDivisionName: "ЦА",
  gosbName: undefined,
  funcDivisionName: undefined,
  positionName: "Руководитель",
  photoData: МеламедСергей,
  colorCode: {
    primary: "gradient",
    secondary: "gradient",
  },
  employeeStatus: EmployeeStatus.Top_Manager,
};

// {
//   profileNumber: "22",
//   isMarked: true,
//   firstName: "Роман",
//   lastName: "Гайн",
//   photoData: ГайнРоман,
//   terDivisionName: "СРБ",
//   placeInRating: 1,
//   crystalsEarned: 120,
//   indicatorValue: "",
//   colorCode: {
//     primary: "blue-60",
//     secondary: "blue-30",
//   },
