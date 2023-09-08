import { DivisionLevel } from "../interfaces";

export const divisionLevelDeclension = (divisionLevel: DivisionLevel) => {
  switch (divisionLevel) {
    case "COUNTRY": {
      return "стране";
    }
    case "TERB": {
      return "тербанке";
    }
    default: {
      return "подразделении";
    }
  }
};
