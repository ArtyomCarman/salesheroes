import { Flex } from '@chakra-ui/react';

import {
	AwardHowToContainer,
	AwardInfoContainer,
	AwardShortListContainer,
	AwardTournamentsContainer,
} from '../containers';

export const AwardsIdPage = () => {
	return (
		<Flex direction="column" gap="16px">
				<AwardInfoContainer />
				<AwardHowToContainer />
				<AwardTournamentsContainer />
				<AwardShortListContainer />
		</Flex>
	);
};
