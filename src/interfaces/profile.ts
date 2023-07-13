import { IBadgesType } from './badges';
import {
	DivisionLevel,
	EmployeeStatus,
	IColorCode,
	IDivisions,
	ILeader,
	IPage,
	TimePeriod,
} from './common';

export interface IProfileBody {
	employeeNumber: string;
	lastName: string;
	firstName: string;
	tbCode?: string;
	tbShortName?: string;
	gosbCode?: string;
	gosbName?: string;
	funcDivisionName?: string;
	positionName?: string;
	photoData?: string;
	colorCode?: IColorCode;
	employeeStatus?: EmployeeStatus;
}

export interface IProfileRatingBody {
	timePeriod: Array<{
		periodName: keyof typeof TimePeriod;
		divisions: IDivisions[];
	}>;
}

export interface ILevelsDirectory {
	name: string;
	code: string;
	lowBound: number;
	achievementConditions: string;
	colorCode: IColorCode;
}

interface IUserLevel {
	currentLevelName: string;
	colorCode: IColorCode;
	progressBar: {
		value: number;
		info: string;
	};
}

interface ICristals {
	crystalsEarned: number;
}

export interface IProfileProgressBody {
	crystals: ICristals;
	userLevel: IUserLevel;
	levelsDirectory: ILevelsDirectory[];
}

export interface IProfileBadgesBody {
	badgesUserHas: number;
	badgesInTotal: number;
	badgesType: IBadgesType[];
}

export interface IProfileIdParams {
	profileId: string;
}

export interface IGetProfileRatingList {
	params: {
		pageNum: number;
		divisionLevel: DivisionLevel;
		timePeriod: TimePeriod;
	};
}

export interface IRating {
	contestants: string;
	leaders: ILeader[];
}

export interface IProfileRatingListBody {
	rating: IRating;
	page: IPage;
}
