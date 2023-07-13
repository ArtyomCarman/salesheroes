import { Fade, Flex, SimpleGrid, Text, usePrefersReducedMotion } from '@chakra-ui/react';

import { InfoBlock, ProgressBar } from '../components';
import { gradient } from '../utils';
import { ReactComponent as CalendarIcon } from '../assets/icons/calendar.svg';
import { ReactComponent as CommunityIcon } from '../assets/icons/community.svg';
import {archiveTournamentId} from "../models";

export const TournamentProgressContainer = () => {

	const prefersReducedMotion = usePrefersReducedMotion();
	const animation = prefersReducedMotion ? undefined : `${gradient} 8s ease infinite`;

	return (
		<Fade in>
			<SimpleGrid gap="16px">
				{archiveTournamentId.updateTooltip && <InfoBlock text={archiveTournamentId.updateTooltip} />}
				<Flex
					direction="column"
					gap="16px"
					bgColor="rgba(87, 92, 112, 0.3)"
					borderRadius="16px"
					p={{
						base: '24px 16px',
						lg: '24px',
					}}
					position="relative"
					overflow="hidden"
					_before={{
						content: "''",
						width: '512px',
						height: '512px',
						position: 'absolute',
						top: '-384px',
						right: '210px',
						background:
							'radial-gradient(66.32% 66.32% at 50% 50%, rgba(52, 98, 136, 0.9) 0%, rgba(0, 0, 0, 0) 100%)',
						borderRadius: '50%',
						filter: 'blur(76px) opacity(0.7)',
						animation: `${animation}`,
					}}
					_after={{
						content: "''",
						width: '403px',
						height: '403px',
						position: 'absolute',
						top: '-348px',
						left: '176px',
						background:
							'radial-gradient(32.51% 32.51% at -27.54% 90.32%, rgba(135, 90, 192, 0.3) 0%, rgba(135, 90, 192, 0.3) 100%)',
						borderRadius: '50%',
						filter: 'blur(76px)',
						animation: `${animation}`,
						animationDelay: '3s',
					}}
				>
					{(archiveTournamentId.percentageIndicator || archiveTournamentId.tournamentInfo) && (
						<SimpleGrid gridTemplateColumns="156px auto" gap="8px" zIndex="1">
							<ProgressBar
								value={archiveTournamentId.percentageIndicator}
								color="light-blue-50"
								text={archiveTournamentId.tournamentDurationName}
								height="16px"
							/>
							<Text color="rgba(255, 255, 255, 0.8)" size="caption10/16">
								{archiveTournamentId.tournamentInfo}
							</Text>
						</SimpleGrid>
					)}
					<Text color="white" variant="semibold" size="h24/32" zIndex="1">
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
						zIndex="1"
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
			</SimpleGrid>
		</Fade>
	);
};
