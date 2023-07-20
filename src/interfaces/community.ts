import { DivisionLevel, IColorCode, INewsLeader } from "./common";

export interface INews {
  tournamentId?: string;
  newsId: string;
  date: string;
  newsText: string;
  leaders: Array<INewsLeader>;
}

export interface INewsList {
  timePeriod: Array<{
    name?: string;
    news: Array<INews>;
  }>;
}

export interface INewsParams {
  params: {
    pageNum?: number;
    divisionLevel: DivisionLevel;
  };
}

export interface INewsRatingListParams {
  employeeNumber: string;
  params: {
    pageNum?: number;
    divisionLevel: DivisionLevel;
  };
}

export interface INewsRatingParams {
  params: {
    pageNum?: number;
    divisionLevel: DivisionLevel;
  };
}

export interface INewsRatingLeader {
  employeeNumber: string;
  firstName: string;
  lastName: string;
  photoData: string;
  terDivisionName: string;
  placeInRating: number;
  colorCode: IColorCode;
}

export interface INewsRating {
  heading: string;
  usersPosition: string;
  leaders: INewsRatingLeader[];
}

export interface INewsLikesPayload {
  employeeNumber: string;
  newsId: string;
}

interface ILikesPeople {
  position: string;
  list: INewsLeader[];
}

export interface INewsLikes {
  isLiked: boolean;
  likesAmount: number;
  bossNames?: string[];
  people: ILikesPeople[];
}
