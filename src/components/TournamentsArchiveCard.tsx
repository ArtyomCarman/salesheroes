import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Flex, Text } from '@chakra-ui/react';

import { ActivityTypes, IArchiveTournamentsBody, RatingCategory, Reward } from '../interfaces';
import { ReactComponent as LightningIcon } from '../assets/icons/lightning.svg';
import { ProfileAvatar } from './ProfileAvatar';

export const TournamentArchiveCard: FC<Props> = ({ category }) => {
	const navigate = useNavigate();
	const goToTournamentCardId = (id: string) => () =>
		navigate(`/tournaments/archive/${id}`);

	return (
		<Flex direction="column" gap="16px">
			{category.tournaments.map((tournament) => (
				<Box
					key={tournament.tournamentId}
					bgColor="var(--grey-50-30)"
					sx={{
						'@media (pointer: fine)': {
							'&:hover': {
								bgColor: 'var(--grey-50-50)',
								cursor: 'pointer',
							},
						},
					}}
					_active={{
						bgColor: 'var(--grey-50-50)',
					}}
					p={{
						base: '24px 16px',
						lg: '24px',
					}}
					borderRadius="16px"
					overflow="hidden"
					onClick={goToTournamentCardId(tournament.tournamentId)}
				>
					<Text
						color="rgba(255, 255, 255, 0.6)"
						size="caption10/16"
						variant="medium"
						mb="16px"
						whiteSpace="pre"
					>
						{tournament.tournamentDurationName ? `${tournament.tournamentDurationName}  •  ` : null}
						{tournament.tournamentInfo}
					</Text>
					<Text size="sub20/28" variant="medium" mb="24px">
						{tournament.tournamentName}
					</Text>
					<Flex gap="8px">
						{tournament.employee && <ProfileAvatar profile={tournament.employee} />}
						<Flex flexWrap="wrap" gap="4px">
							{tournament.rating.map((rating) => (
								<Flex
									key={rating.divisionLevelResult}
									borderRadius="8px"
									bgColor="rgba(255, 255, 255, 0.1)"
									p="6px 12px"
									gap="4px"
									alignItems="center"
								>
									{rating.reward && (
										<LightningIcon
											width="16px"
											height="16px"
											fill={rating?.reward.icon === Reward.gold ? 'var(--primary-30)' : 'white'}
										/>
									)}
									<Text size="body14/20" color="rgba(255, 255, 255, 0.6)">
										{rating.placeInRating && (
											<>
												<Text
													as="span"
													variant={rating.reward ? 'semibold' : 'regular'}
													color={
														// eslint-disable-next-line no-nested-ternary
														rating.reward?.icon === Reward.gold
															? 'var(--primary-30)'
															: rating.reward?.icon === Reward.silver
															? 'white'
															: 'rgba(255, 255, 255, 0.6)'
													}
												>
													{rating.placeInRating}
												</Text>{' '}
											</>
										)}
										{rating.divisionLevelResult}
									</Text>
								</Flex>
							))}
						</Flex>
					</Flex>
				</Box>
			))}
		</Flex>
	);
};

interface Props {
	category: RatingCategory | ActivityTypes | IArchiveTournamentsBody;
}
