import { Box, Fade, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { badgeID, badges } from '../models'

import { AwardsListItem } from '../components';

export const ProfileAllAwardsContainer = () => {
	const earnedBadges = badgeID.filter(({imageIsActive}) => imageIsActive)

	return (
		<Fade in>
			<Box>
				<Flex
					direction="row"
					gap="12px"
					mb="24px"
					paddingX={{
						base: '16px',
						lg: '0',
					}}
				>
					<Text size="h24/32" variant="semibold">
						Полученные награды
					</Text>
					<Text size="h24/32" variant="semibold" color="rgba(255, 255, 255, 0.6)">
						{badges.badgesUserHas}
					</Text>
				</Flex>

				<Box>
					<SimpleGrid gridTemplateColumns="repeat(2, 1fr)" gap="16px">
						{earnedBadges.map((badge) => (
							 <AwardsListItem key={badge.badgeId} badge={badge} />
						))}
					</SimpleGrid>
				</Box>
			</Box>
		</Fade>
	);
};
