import { FC } from 'react';

import { ReactComponent as AwardsIcon } from '../assets/icons/awards.svg';
import { ReactComponent as LightningIcon } from '../assets/icons/lightning.svg';

export const LeadersIcon: FC<Props> = ({ status }) => {
	return status === 'active' ? (
		<LightningIcon width="24px" height="24px" />
	) : (
		<AwardsIcon width="24px" height="24px" color="rgba(245, 193, 59, 1)" />
	);
};

interface Props {
	status: 'active' | 'closed';
}
