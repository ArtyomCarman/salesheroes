import { Fragment } from 'react';
import { Box, Fade, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { badges } from '../models'

import { AwardsListItem } from '../components';

export const ProfileAllAwardsContainer = () => {
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
						{badges.badgesType.map((badgeType) => (
							<Fragment key={badgeType.badgeTypeName}>
								{badgeType.badges.map((award) => {
									if (!award.imageIsActive) return null
									return <AwardsListItem key={award.badgeId} badge={award} status="EARNED"/>
								})}
							</Fragment>
						))}
					</SimpleGrid>
				</Box>
			</Box>
		</Fade>
	);
};
