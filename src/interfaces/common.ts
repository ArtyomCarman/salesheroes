export type DivisionLevelName = keyof typeof DivisionLevel;

export enum EmployeeStatus {
  "Top_Manager" = "TOP_MANAGER",
  "Contestant" = "CONTESTANT",
  "Non_Contestant" = "NON_CONTESTANT",
  "Resigned" = "RESIGNED",
}

export interface IDivisions {
  divisionName: string;
  contestants: string;
  placeInRating: number;
}

export interface INewsLeader {
  profileNumber: string;
  photoData: string;
  terDivisionName: string;
  firstName: string;
  lastName: string;
  colorCode: IColorCode;
  employeeStatus?: EmployeeStatus;
  [x: string | number | symbol]: unknown;
}

export interface IPage {
  total: number;
  isLast: boolean;
  num: number;
}

export enum Reward {
  silver = "SILVER_LIGHTNING",
  gold = "GOLD_LIGHTNING",
}

export interface IRewardProfiles {
  icon?: Reward;
  tooltip?: string;
}

export interface ILeader {
  profileNumber: string;
  isMarked: boolean;
  firstName: string;
  lastName: string;
  photoData: string;
  crystalsEarned?: number;
  terDivisionName: string;
  indicatorValue: string;
  placeInRating?: number;
  reward?: IRewardProfiles;
  colorCode: IColorCode;
  employeeStatus?: EmployeeStatus;
}

export interface IColorCode {
  primary: string;
  secondary: string;
}

export enum DivisionLevel {
  "Тербанк" = "TERB",
  "Страна" = "COUNTRY",
  "Подразделение" = "GOSB",
  "Кластер" = "CLUSTER",
}

export enum TimePeriod {
  "За всё время" = "ALLTHETIME",
  "Текущий квартал" = "QUARTER",
}
