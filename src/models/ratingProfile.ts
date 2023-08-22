import { IDivisions } from "../interfaces";

export const ratingProfile: RatingProfile = {
  timePeriod: [
    {
      periodName: "Текущий квартал",
      divisions: [
        {
          divisionName: "Страна",
          contestants: "33",
          placeInRating: 7,
        },
        {
          divisionName: "Тербанк",
          contestants: "3",
          placeInRating: 1,
        },
        {
          divisionName: "ГОСБ",
          contestants: "1",
          placeInRating: 1,
        },
      ],
    },
    {
      periodName: "За всё время",
      divisions: [
        {
          divisionName: "Страна",
          contestants: "33",
          placeInRating: 5,
        },
        {
          divisionName: "Тербанк",
          contestants: "3",
          placeInRating: 2,
        },
        {
          divisionName: "ГОСБ",
          contestants: "1",
          placeInRating: 1,
        },
      ],
    },
  ],
};

interface RatingProfile {
  timePeriod: Array<{
    divisions: IDivisions[];
    periodName: string;
  }>;
}
