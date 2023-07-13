import { useMemo } from 'react';
import { Fade, Flex, Text } from '@chakra-ui/react';

import { Tabs } from '../components';
import { TournamentShortListProfilesContainer } from './TournamentShortListProfilesContainer';
import {tournamentShortList} from "../models";

export const TournamentArchiveShortListContainer = () => {
	const tabs = useMemo(
		() =>
			tournamentShortList?.map((item) => ({
				label: item.divisionLevelName,
				component: <TournamentShortListProfilesContainer divisionLevel={item} />,
			})),
		[tournamentShortList],
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
					Лидеры турнира
				</Text>
				<Tabs tabs={tabs} />
			</Flex>
		</Fade>
	);
};
