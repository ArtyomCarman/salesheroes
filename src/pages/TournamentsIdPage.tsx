import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';

import {
	TournamentAwardContainer,
	TournamentDescriptionContainer,
	TournamentProgressContainer,
	TournamentResultContainer,
	TournamentShortListContainer,
} from '../containers';

export const TournamentsIdPage = () => {
	return (
		<Flex direction="column" gap="16px">
				<TournamentProgressContainer />
				<TournamentResultContainer />
				<TournamentDescriptionContainer />
				<TournamentAwardContainer />
					<TournamentShortListContainer />
		</Flex>
	);
};
