import { DivisionLevel, DivisionLevelName, ILeader, IPage } from './common';

export enum Badge {
	'Guru' = 'GURU',
	'BraveMangoose' = 'BRAVEMANGOOSE',
	'IndianElephant' = 'INDIANELEPHANT',
	'LotusFlower' = 'LOTUSFLOWER',
	'SacredSitar' = 'SACREDSITAR',
	'VascoDaGama' = 'VASCODAGAMA',
	'BengalTiger' = 'BENGAL_TIGER',
	'ConditionalsChampionFirst' = 'CONDITIONALS_CHAMPION_FIRST',
	'ConditionalsChampionSecond' = 'CONDITIONALS_CHAMPION_SECOND',
	'ConditionalsChampionThird' = 'CONDITIONALS_CHAMPION_THIRD',
}

export interface IBagdes {
	imageId: Badge;
	badgeId: string;
	badgeName: string;
	badgeAmount: number;
	imageIsActive?: boolean;
	receivingDate?: string;
	updateTooltip?: string;
	progressBarValue?: number;
	hasNftMark?: boolean;
	badgesOrderPriority?: number;
}

export interface IBadgesType {
	badgeTypeName: string;
	badges: IBagdes[];
}

export interface IBadgeFeature {
	number: number;
	feature: string;
}

export interface IBadgeSpecification {
	description: string;
	features: IBadgeFeature[];
}

export interface IBadgeProgress {
	current: string;
	condition: string;
}

export interface IBadgeTournament {
	tournamentId: string;
	status: {
		name: string;
		color: string;
	};
	ratingStatusName?: string;
	periodName: string;
}

export interface IProfileBadgesIdBody {
	imageId: Badge;
	badgeId: string;
	badgeName: string;
	badgeAmount: number;
	receivingDate?: string;
	badgeType: string;
	updateTooltip?: string;
	progressBarValue: number;
	hasNftMark: boolean;
	badgesOrderPriority: number;
	rewardCrystalCount: number;
	specification: IBadgeSpecification;
	progress: IBadgeProgress;
	tournamentName: string;
	tournaments: IBadgeTournament[];
}

type FilterType = 'TOP' | 'ALL' | 'EARNED';

export interface IProfileBadgesPayload {
	id: string;
	params: {
		filterType: FilterType;
	};
}
export interface IGetProfileBadgesId {
	badgeId: string;
}

export interface IBadgeIdParams {
	badgeId: string;
}

export interface IBadgesIdProfilesBody {
	badge: IBadge;
	page: IPage;
}

export interface IBadgesIdProfilesShortListBody {
	divisionLevelName: DivisionLevelName;
	contestants: string;
	leaders: ILeader[];
}

export interface IBadge {
	badgeId: string;
	contestants: string;
	leaders: ILeader[];
}

export interface IBadgeParams {
	pageNum?: number;
	divisionLevel: DivisionLevel;
}

export interface IBadgeRequest {
	badgeId: string;
	params: IBadgeParams;
}
