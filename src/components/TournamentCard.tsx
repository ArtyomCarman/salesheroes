import { FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { ActivityTypes, RatingCategory, Reward } from '../interfaces';
import { ReactComponent as LightningIcon } from '../assets/icons/lightning.svg';
import { ProfileAvatar } from './ProfileAvatar';
import { TournamentCardProgress } from './TournamentCardProgress';
import { TournamentCardWrapper } from './TournamentCardWrapper';

export const TournamentCard: FC<Props> = ({ category }) => {
	return (
		<Flex direction="column" gap="16px">
			{category.tournaments.map((tournament) => (
				<TournamentCardWrapper key={tournament.tournamentId} navigateTo={tournament.tournamentId}>
					{(tournament.progressBarValue || tournament.tournamentInfo) && (
						<TournamentCardProgress tournament={tournament} />
					)}
					{tournament.tournamentName ? (
						<Text
							size="sub20/28"
							variant="medium"
							lineHeight="28px"
							mb="24px"
							display="-webkit-box"
							textOverflow="ellipsis"
							overflow="hidden"
							sx={{
								'-webkit-box-orient': 'vertical',
								'-webkit-line-clamp': '2',
							}}
						>
							{tournament.tournamentName}
						</Text>
					) : null}
					<Flex gap="8px" paddingTop={tournament.tournamentName ? '0' : '8px'}>
						{tournament.employee && <ProfileAvatar profile={tournament.employee} />}
						<Flex flexWrap="wrap" gap="4px">
							{tournament.rating.map((rating) => (
								<Flex
									key={rating.divisionLevelResult}
									borderRadius="8px"
									bgColor="rgba(255, 255, 255, 0.1)"
									p="6px 12px 6px 8px"
									gap="4px"
									alignItems="center"
								>
									{rating.reward?.icon && (
										<LightningIcon
											width="16px"
											height="16px"
											fill={rating.reward.icon === Reward.gold ? 'var(--primary-30)' : 'white'}
										/>
									)}
									<Text size="body14/20" color="rgba(255, 255, 255, 0.6)">
										{rating.placeInRating && (
											<>
												<Text
													as="span"
													size="body14/20"
													variant={rating.reward?.icon ? 'semibold' : 'regular'}
													color={
														// eslint-disable-next-line no-nested-ternary
														rating.reward?.icon
															? rating.reward.icon === Reward.gold
																? 'var(--primary-30)'
																: 'white'
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
				</TournamentCardWrapper>
			))}
		</Flex>
	);
};

interface Props {
	category: RatingCategory | ActivityTypes;
}
