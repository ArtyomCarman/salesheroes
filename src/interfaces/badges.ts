import { DivisionLevel, DivisionLevelName, ILeader, IPage } from './common';

export enum Badge {
	'ConditionalsChampionFirst' = 'CONDITIONALS_CHAMPION_FIRST',
	'ConditionalsChampionSecond' = 'CONDITIONALS_CHAMPION_SECOND',
	'ConditionalsChampionThird' = 'CONDITIONALS_CHAMPION_THIRD',
	'ChampionLeague1' = 'CHAMPION_LEAGUE1',
	'ChampionLeague2' = 'CHAMPION_LEAGUE2',
	'Commission1M' = 'COMMISSION1M',
	'Commission3M' = 'COMMISSION3M',
	'Commission50k' = 'COMMISSION50K',
	'Commission200k' = 'COMMISSION200K',
	'CommissionX2' = 'COMMISSIONX2',
	'CommissionX3' = 'COMMISSIONX3',
	'CommissionX4' = 'COMMISSIONX4',
	'SuperCup2023' = 'SUPERCUP2023',
	'SuperBonus1' = 'SUPER_BONUS_FIRST',
	'SuperBonusTop10' = 'SUPER_BONUS_TOP10',
	'SuperBonusTop20' = 'SUPER_BONUS_TOP20',
	'SuperBonusNFT' = 'SUPER_BONUS_NFT'
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
	rewardCrystalCount: number;
	specification: IBadgeSpecification;
	progress?: IBadgeProgress;
	tournamentName?: string;
	tournaments?: IBadgeTournament[];
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
