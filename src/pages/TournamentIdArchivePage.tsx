import { Flex } from '@chakra-ui/react';

import {
	TournamentArchiveAwardContainer,
	TournamentArchiveDescriptionContainer,
	TournamentArchiveProgress,
	TournamentArchiveResultContainer,
	TournamentArchiveShortListContainer,
} from '../containers';

export const TournamentIdArchivePage = () => {
	return (
		<Flex direction="column" gap="16px">
				<TournamentArchiveProgress />
				<TournamentArchiveResultContainer />
				<TournamentArchiveDescriptionContainer />
				<TournamentArchiveAwardContainer />
				<TournamentArchiveShortListContainer />
		</Flex>
	);
};
