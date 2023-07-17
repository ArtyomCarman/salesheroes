import { FC, useMemo } from 'react';
import { Icon as ChakraIcon, IconProps } from '@chakra-ui/react';

import { Badge } from '../interfaces';
import { ReactComponent as ChampionLeague1} from '../assets/icons/badgeChampionLeague1.svg';
import { ReactComponent as ChampionLeague2} from '../assets/icons/badgeChampionLeague2.svg';
import { ReactComponent as Commission1M} from '../assets/icons/badgeCommission1M.svg';
import { ReactComponent as Commission3M} from '../assets/icons/badgeCommission3M.svg';
import { ReactComponent as Commission50k } from '../assets/icons/badgeCommission50k.svg';
import { ReactComponent as Commission200k} from '../assets/icons/badgeCommission200k.svg';
import { ReactComponent as CommissionX2} from '../assets/icons/badgeCommissionX2.svg';
import { ReactComponent as ConditionalsChampionThird} from '../assets/icons/conditional-champion-bronze.svg';
import { ReactComponent as ConditionalsChampionFirst} from '../assets/icons/conditional-champion-gold.svg';
import { ReactComponent as ConditionalsChampionSecond} from '../assets/icons/conditional-champion-silver.svg';
import { ReactComponent as CommissionX3} from '../assets/icons/badgeCommissionX3.svg';
import { ReactComponent as CommissionX4} from '../assets/icons/badgeCommissionX4.svg';
import { ReactComponent as SuperBonusNFT} from '../assets/icons/badgeSuperBonusNFT.svg';
import { ReactComponent as SuperBonusTop10} from '../assets/icons/badgeSuperBonusTop10.svg';
import { ReactComponent as SuperBonusTop20} from '../assets/icons/badgeSuperBonusTop20.svg';
import { ReactComponent as SuperBonus1} from '../assets/icons/badgeSuperBonus1.svg';
import { ReactComponent as SuperCup2023 } from '../assets/icons/badgeSuperCup2023.svg';
import { ReactComponent as FakeBadgeIcon} from '../assets/icons/fake-badge.svg';

interface Props extends IconProps {
	imageId: Badge;
	isActive?: boolean;
}
export const BadgeIcon: FC<Props> = ({ imageId, isActive = true, ...props }) => {
	const Icon = useMemo(() => {
		if (imageId === Badge.ChampionLeague1) return ChampionLeague1;
		if (imageId === Badge.ChampionLeague2) return ChampionLeague2;
		if (imageId === Badge.Commission1M) return Commission1M;
		if (imageId === Badge.Commission3M) return Commission3M;
		if (imageId === Badge.Commission50k) return Commission50k;
		if (imageId === Badge.Commission200k) return Commission200k;
		if (imageId === Badge.ConditionalsChampionFirst) return ConditionalsChampionFirst;
		if (imageId === Badge.ConditionalsChampionSecond) return ConditionalsChampionSecond;
		if (imageId === Badge.ConditionalsChampionThird) return ConditionalsChampionThird;
		if (imageId === Badge.CommissionX2) return CommissionX2;
		if (imageId === Badge.CommissionX3) return CommissionX3;
		if (imageId === Badge.CommissionX4) return CommissionX4;
		if (imageId === Badge.SuperBonus1) return SuperBonus1;
		if (imageId === Badge.SuperCup2023) return SuperCup2023;
		if (imageId === Badge.SuperBonusTop10) return SuperBonusTop10;
		if (imageId === Badge.SuperBonusTop20) return SuperBonusTop20;
		if (imageId === Badge.SuperBonusNFT) return SuperBonusNFT;

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
