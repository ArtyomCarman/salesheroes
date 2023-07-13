import { Fade, Flex, Text } from '@chakra-ui/react';

import { ReactComponent as CalendarIcon} from '../assets/icons/calendar.svg';
import { ReactComponent as CommunityIcon} from '../assets/icons/community.svg';
import {archiveTournamentId} from "../models";

export const TournamentArchiveProgress = () => {
	return (
		<Fade in>
			<Flex
				direction="column"
				gap="16px"
				bgColor="rgba(87, 92, 112, 0.3)"
				borderRadius="16px"
				p={{
					base: '24px 16px',
					lg: '24px',
				}}
			>
				<Text color="rgba(255, 255, 255, 0.8)" size="caption10/16">
					{archiveTournamentId.tournamentDurationName}
				</Text>

				<Text color="white" variant="semibold" size="h24/32">
					{archiveTournamentId.tournamentName}
				</Text>
				<Flex
					direction={{
						base: 'column',
						lg: 'row',
					}}
					gap={{
						base: '16px',
						lg: '24px',
					}}
				>
					<Flex color="rgba(255, 255, 255, 0.8)" gap="8px">
						<CalendarIcon width="24px" height="24px" />
						<Text>{archiveTournamentId.lasting}</Text>
					</Flex>
					<Flex color="rgba(255, 255, 255, 0.8)" gap="8px">
						<CommunityIcon width="24px" height="24px" />
						<Text>{archiveTournamentId.totalParticipants}</Text>
					</Flex>
				</Flex>
			</Flex>
		</Fade>
	);
};
