import { Flex, Text } from '@chakra-ui/react';

import {
	Empty,
	TournamentArchiveCard,
} from '../components';
import {archiveTournaments} from "../models";

export const TournamentArchiveContainer = () => {

	if (!archiveTournaments.tournaments.length)
		return (
			<Empty>
				<Text size="sub18/24" color="rgba(255, 255, 255, 0.6)" textAlign="center">
					Здесь пока нет завершенных турниров
				</Text>
			</Empty>
		);

	return (
		<Flex direction="column" gap="16px">
				<TournamentArchiveCard category={archiveTournaments} />
		</Flex>
	);
};
