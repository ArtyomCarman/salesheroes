import { Badge } from './badges';
import {
	DivisionLevel,
	DivisionLevelName,
	EmployeeStatus,
	IColorCode,
	ILeader,
	IPage,
	Reward,
} from './common';

export interface IGetProfileTournaments {
	id: string;
}

interface IRating {
	divisionLevelResult?: string;
	placeInRating?: number;
	reward?: IReward;
}

export interface IEmployee {
	employeeNumber: string;
	photoData?: string;
	firstName: string;
	lastName: string;
	colorCode: IColorCode;
	employeeStatus?: EmployeeStatus;
}

export interface IReward {
	icon?: Reward;
	tooltip?: string;
}

export enum Status {
	'active' = 'ACTIVE',
	'canceled' = 'CANCELLED',
	'summarizing' = 'SUMMARIZING',
	'end' = 'END',
}

export interface Tournament {
	tournamentId: string;
	employee?: IEmployee;
	tournamentName?: string;
	tournamentInfo?: string;
	tournamentDurationName?: string;
	progressBarValue?: number;
	updateTooltip?: string;
	reward?: Reward;
	rating: IRating[];
}


export interface ActivityTypes {
	activityTypeName: string;
	tournaments: Tournament[];
}

export interface RatingCategory {
	ratingCategoryName: string;
	tournaments: Tournament[];
}

export interface IProfileTournamentsBody {
	isArchiveButtonNeeds: boolean;
	ratingCategories: RatingCategory[];
}

export interface IArchiveTournament {
	employee: IEmployee;
	tournamentId: string;
	tournamentName: string;
	tournamentDurationName: string;
	tournamentInfo: string;
	reward: Reward;
	rating: IRating[];
}

export interface IArchiveTournamentsBody {
	tournaments: IArchiveTournament[];
}

export interface IProfileTournamentsIdBody {
	imageId: Badge;
	tournamentId: string;
	hasNftMark: boolean;
	tournamentName: string;
	status: Status;
	ratingCategoryName: string;
	tournamentInfo: string;
	tournamentDurationName: string;
	percentageIndicator: number;
	lasting: string;
	updateTooltip?: string;
	rating: Array<{
		divisionLevelName: string;
		contestants: number;
		placeInRating: number;
		reward: IReward;
	}>;
	totalParticipants: string;
	specification: {
		description: string;
		features?: Array<{
			number: number;
			feature: string;
		}>;
	};
	rewards: Array<ProfileTournamentsReward>;
}

export interface ProfileTournamentsReward {
	divisionLevelName: string;
	rewardRule: string;
	badgeId: string;
	badgeName: string;
	badgeIcon: string;
	rewardCrystalCount: number;
	hasNftMark: boolean;
	imageId: Badge;
}

export interface IGetTournamentIdProfiles {
	tournamentId: string;
	params: {
		pageNum?: number;
		divisionLevel: DivisionLevel;
	};
}

export interface ITournamentIdProfilesParams {
	tournamentId: string;
	params: {
		pageNum?: number;
		divisionLevel: DivisionLevel;
	};
}

export interface ITournamentIdParams {
	tournamentId: string;
}

export interface ITournamentId {
	tournamentId: string;
	tournamentIndicator: string;
	contestants: number;
	leaders: ILeader[];
}

export interface IProfileTournamentsIdPayload {
	tournamentId: string;
}
export interface ITournamentIdProfilesBody {
	tournament: ITournamentId;
	page: IPage;
}

export interface ITournamentIdProfilesShortListBody {
	divisionLevelName: string;
	tournamentIndicator: string;
	contestants: string;
	leaders: ILeader[];
}

export interface IGetClusterList {
	text: string;
	amount: string;
	divisions?: string[];
}

export interface IGetClusterListParams {
	employeeNumber: string;
}

export interface IGetTournamentsAwardsIdParams {
	badgeId: string;
}
