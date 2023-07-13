import { Flex } from '@chakra-ui/react';

import {
	AboutAwardsContainer,
	AboutCommunity,
	AboutCrystals,
	AboutInfoContainer,
	AboutLogoContainer,
	AboutNFTAwardsContainer,
	AboutProfile,
	AboutRating,
	AboutTeam,
	AboutTournaments,
} from '../containers';

export const AboutPage = () => {
	return (
		<Flex direction="column" gap="16px">
			<AboutLogoContainer />
			<AboutInfoContainer />
			<AboutAwardsContainer />
			<AboutNFTAwardsContainer />
			<AboutCrystals />
			<AboutTournaments />
			<AboutCommunity />
			<AboutRating />
			<AboutProfile />
			<AboutTeam />
		</Flex>
	);
};
