import {useNavigate, useParams} from 'react-router-dom';
import { Box, Fade, Flex, Text } from '@chakra-ui/react';

import { ButtonComponent } from '../components';
import {badgeID, badgeId} from "../models";
import {IBagdes, IProfileBadgesIdBody} from "../interfaces";

export const AwardTournamentsContainer = () => {
	const { badgeId } = useParams()
	const badge = badgeID.find((item) => item.badgeId === badgeId) as IProfileBadgesIdBody
	const navigate = useNavigate();
	const navigateToTournament = (id: string) => () => {
		navigate(`/tournaments/${id}`);
	};
	const navigateToAllTournaments = () => {
		navigate(`/tournaments/awards/${badge.badgeId}`);
	};

	if (!badge.tournaments) return null

	return (
		<Fade in>
			<Flex
				p={{
					base: '24px 16px',
					lg: '24px',
				}}
				bgColor="rgba(87, 92, 112, 0.3)"
				borderRadius="16px"
				gap="24px"
				color="rgba(255, 255, 255, 0.8)"
				direction="column"
			>
				<Text
					size="h24/32"
					variant="semibold"
					color="#fff"
					display="-webkit-box"
					overflow="hidden"
					sx={{
						'-webkit-box-orient': 'vertical',
						'-webkit-line-clamp': '2',
					}}
				>
					{badge.tournamentName}
				</Text>
				<Flex flexDirection="column" gap="16px">
					{badge.tournaments.map((item) => (
						<Flex
							key={item.tournamentId}
							gap="8px"
							p="16px"
							alignItems="flex-start"
							borderRadius="8px"
							bgColor="rgba(87, 92, 112, 0.3)"
							_hover={{
								bgColor: 'rgba(87, 92, 112, 0.5)',
								cursor: 'pointer',
							}}
							onClick={navigateToTournament(item.tournamentId)}
						>
							<Box
								width="12px"
								height="12px"
								m="6px"
								borderRadius="50%"
								bgColor={`var(--${item.status.color})`}
							/>
							<Flex
								gap="4px"
								justifyContent="space-between"
								flexGrow={1}
								flexDirection={{
									base: 'column',
									lg: 'row',
								}}
							>
								<Flex gap="1ch" flexWrap={{ base: 'wrap' }}>
									<Text variant="semibold">{item.status.name}</Text>
									<Text variant="semibold">•</Text>
									<Text color="rgba(255, 255, 255, 0.8)">{item.periodName}</Text>
								</Flex>
								{item.ratingStatusName && (
									<Text color="rgba(255, 255, 255, 0.3)">{item.ratingStatusName}</Text>
								)}
							</Flex>
						</Flex>
					))}
				</Flex>
				<ButtonComponent text="Посмотреть все турниры" onClick={navigateToAllTournaments} />
			</Flex>
		</Fade>
	);
};
