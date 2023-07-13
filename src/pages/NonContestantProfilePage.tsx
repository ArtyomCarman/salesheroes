import { Flex } from '@chakra-ui/react';

import {
	NonContestantProfileProgressContainer,
	ProfileAwardsContainer,
	ProfileInfoContainer,
} from '../containers';

export const NonContestantProfilePage = () => {
	return (
		<Flex direction="column" gap="16px">
				<ProfileInfoContainer />
				<NonContestantProfileProgressContainer />
				<ProfileAwardsContainer />
		</Flex>
	);
};
