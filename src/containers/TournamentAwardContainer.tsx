import { FC, useMemo } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import { Fade, Flex, Text } from '@chakra-ui/react';

import { BadgeIcon, Tabs } from '../components';
import {IProfileTournamentsIdBody, ProfileTournamentsReward} from '../interfaces';
import { ReactComponent as DiamondIcon} from '../assets/icons/diamond.svg';
import {archiveTournamentId, tournamentID} from "../models";

const TournamentAwardBadge: FC<Props> = ({ item }) => {
	const navigate = useNavigate();
	const goToBadge = (id: string) => () => {
		navigate(`/awards/${id}`);
	};

	return (
		<Flex direction="column" gap="24px">
			<Text size="body14/20" color="rgba(255, 255, 255, 0.6)">
				{item.rewardRule}
			</Text>
			<Flex
				bgColor=" rgba(87, 92, 112, 0.3)"
				borderRadius="8px"
				direction="column"
				alignItems="center"
				p={{
					base: '16px 16px 24px',
					lg: '16px 24px 24px',
				}}
				onClick={goToBadge(item.badgeId)}
				cursor="pointer"
				sx={{
					'@media (pointer: fine)': {
						'&:hover': { bgColor: 'rgba(87, 92, 112, 0.5)' },
					},
				}}
				_active={{
					bgColor: 'rgba(87, 92, 112, 0.5)',
				}}
			>
				<BadgeIcon imageId={item.imageId} width="176px" height="176px" />
				<Flex direction="column" gap="8px" alignItems="center">
					<Flex gap="4px">
						{item.hasNftMark && (
							<Text
								variant="semibold"
								bgClip="text"
								size="h24/32"
								color="transparent"
								bgImage="linear-gradient(103.74deg, #875AC0 0.85%, #B675AF 47.94%, #875AC0 94.39%), linear-gradient(49.6deg, #875AC0 26.29%, #B675AF 50.86%, #875AC0 74.59%)"
							>
								NFT
							</Text>
						)}
						<Text
							size="h24/32"
							variant="semibold"
							overflow="hidden"
							display="-webkit-box"
							sx={{
								'-webkit-box-orient': 'vertical',
								'-webkit-line-clamp': '1',
								wordBreak: 'break-all',
							}}
						>
							{item.badgeName}
						</Text>
					</Flex>
					<Flex gap="8px">
						<Text size="sub18/24" color="white">
							{item.rewardCrystalCount}
						</Text>
						<DiamondIcon width="24px" height="24px" />
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export const TournamentAwardContainer = () => {
	const { tournamentId } = useParams();
	const tournament = tournamentID.find((item) => item.tournamentId === tournamentId) as IProfileTournamentsIdBody
	const tabs = useMemo(
		() =>
			tournament?.rewards?.map((item) => ({
				label: item.divisionLevelName,
				component: <TournamentAwardBadge item={item} />,
			})) || [],
		[tournament],
	);
	return (
		<Fade in>
			<Flex
				direction="column"
				gap="16px"
				p={{
					base: '24px 16px',
					lg: '24px',
				}}
				borderRadius="16px"
				bgColor="rgba(87, 92, 112, 0.3)"
			>
				<Text size="h24/32" variant="semibold">
					Награда
				</Text>
				<Tabs tabs={tabs} />
			</Flex>
		</Fade>
	);
};

interface Props {
	item: ProfileTournamentsReward;
}
