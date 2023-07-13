import { FC, useMemo } from 'react';
import { Icon as ChakraIcon, IconProps } from '@chakra-ui/react';

import { Badge } from '../interfaces';
import { ReactComponent as BraveMangooseBadge} from '../assets/icons/badgeBraveMangoose.svg';
import { ReactComponent as GuruBadge} from '../assets/icons/badgeGuru.svg';
import { ReactComponent as IndianElephantBadge} from '../assets/icons/badgeIndianElephant.svg';
import { ReactComponent as LotusFlowerBadge} from '../assets/icons/badgeLotusFlower.svg';
import { ReactComponent as SacredSitarBadge } from '../assets/icons/badgeSacredSitar.svg';
import { ReactComponent as VascoDaGamaBadge} from '../assets/icons/badgeVascoDaGama.svg';
import { ReactComponent as BengalTiger} from '../assets/icons/bengal-tiger.svg';
import { ReactComponent as ConditionalsChampionThird} from '../assets/icons/conditional-champion-bronze.svg';
import { ReactComponent as ConditionalsChampionFirst} from '../assets/icons/conditional-champion-gold.svg';
import { ReactComponent as ConditionalsChampionSecond} from '../assets/icons/conditional-champion-silver.svg';
import { ReactComponent as FakeBadgeIcon} from '../assets/icons/fake-badge.svg';

interface Props extends IconProps {
	imageId: Badge;
	isActive?: boolean;
}
export const BadgeIcon: FC<Props> = ({ imageId, isActive = true, ...props }) => {
	const Icon = useMemo(() => {
		if (imageId === Badge.Guru) return GuruBadge;
		if (imageId === Badge.VascoDaGama) return VascoDaGamaBadge;
		if (imageId === Badge.IndianElephant) return IndianElephantBadge;
		if (imageId === Badge.SacredSitar) return SacredSitarBadge;
		if (imageId === Badge.BraveMangoose) return BraveMangooseBadge;
		if (imageId === Badge.LotusFlower) return LotusFlowerBadge;
		if (imageId === Badge.ConditionalsChampionFirst) return ConditionalsChampionFirst;
		if (imageId === Badge.ConditionalsChampionSecond) return ConditionalsChampionSecond;
		if (imageId === Badge.ConditionalsChampionThird) return ConditionalsChampionThird;
		if (imageId === Badge.BengalTiger) return BengalTiger;

		return FakeBadgeIcon;
	}, []);

	return (
		<ChakraIcon
			display="block"
			filter={isActive ? 'opacity(1)' : 'opacity(0.3)'}
			as={Icon}
			boxSize="100%"
			{...props}
		/>
	);
};
