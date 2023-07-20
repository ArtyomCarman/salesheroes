import { EmployeeStatus } from "../interfaces";
import КузьменкоИгорь from "../assets/images/Кузьменко Игорь Владимирович1.jpeg";
import МеламедСергей from "../assets/images/Сергей Меламед.jpeg";

export const profileContestant = {
  employeeNumber: "00001",
  lastName: "Кузьменко",
  firstName: "Игорь",
  tbShortName: "СРБ",
  gosbName: undefined,
  funcDivisionName: undefined,
  positionName: "КМ",
  photoData: КузьменкоИгорь,
  colorCode: {
    primary: "blue-60",
    secondary: "blue-30",
  },
  employeeStatus: EmployeeStatus.Contestant,
};

export const profileObserver = {
  employeeNumber: "00002",
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
  employeeNumber: "00003",
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
//   employeeNumber: "22",
//   isMarked: true,
//   firstName: "Игорь",
//   lastName: "Кузьменко",
//   photoData: КузьменкоИгорь,
//   terDivisionName: "СРБ",
//   placeInRating: 1,
//   crystalsEarned: 120,
//   indicatorValue: "",
//   colorCode: {
//     primary: "blue-60",
//     secondary: "blue-30",
//   },
