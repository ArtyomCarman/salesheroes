import { FC } from 'react';
import { Box, Text, Tooltip } from '@chakra-ui/react';

import { IRewardProfiles, Reward } from '../interfaces';
import { ReactComponent as LightningIcon } from '../assets/icons/lightning.svg';

interface Props {
	reward?: IRewardProfiles;
	placeInRating?: number;
	crystallEarned?: number;
}

export const PlaceInRating: FC<Props> = ({ reward, placeInRating, crystallEarned }) => {
	const thousandthNumber = `${String(placeInRating).slice(0, 1)}К`;

	if (!placeInRating) {
		return null;
	}
	if (placeInRating > 999) {
		return (
			<Text size="caption12/16" variant="semibold" w="24px" textAlign="center" mt="15px">
				{thousandthNumber}
			</Text>
		);
	}
	if (placeInRating > 3) {
		return (
			<Text
				size="caption12/16"
				variant="semibold"
				w={placeInRating > 99 ? '25px' : '24px'}
				textAlign="center"
				mt="15px"
			>
				{placeInRating}
			</Text>
		);
	}
	if (placeInRating && crystallEarned) {
		return (
			<Text
				size="caption12/16"
				variant="semibold"
				w={placeInRating > 99 ? '26px' : '24px'}
				textAlign="center"
				mt="15px"
			>
				{placeInRating}
			</Text>
		);
	}

	return (
		<Tooltip
			label={reward?.tooltip}
			placement="top-start"
			bgColor="rgba(87, 92, 112, 1)"
			borderRadius="8px"
			color="white"
			p="8px 12px"
		>
			<Box mt="12px">
				<LightningIcon
					width="24px"
					height="24px"
					color={reward?.icon === Reward.gold ? 'rgba(245, 193, 59, 1)' : 'white'}
				/>
			</Box>
		</Tooltip>
	);
};
