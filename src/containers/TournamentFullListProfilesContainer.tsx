import { useSearchParams } from 'react-router-dom';
import { Box, Fade, Flex, SimpleGrid, Text } from '@chakra-ui/react';

import { Leaders } from '../components';
import { DivisionLevel, ILeader } from '../interfaces';
import { ClusterInfoContainer } from './ClusterInfoContainer';
import {tournamentFullList} from "../models";

export const TournamentFullListProfilesContainer = () => {
	const [searchParams] = useSearchParams();

	return (
		<Fade in>
			<Box>
				{searchParams.get('divisionLevel') === DivisionLevel.Кластер ? (
					<ClusterInfoContainer />
				) : null}
				<SimpleGrid
					padding="16px 16px 0"
					margin="0 -16px"
					gridTemplateColumns="auto auto"
					justifyContent="space-between"
					boxShadow="0px 1px 0px rgba(255, 255, 255, 0.2)"
					position="sticky"
					top="69px"
					bgColor="black"
					zIndex="2"
				>
					<Text size="body14/20" color="rgba(255, 255, 255, 0.8)" mb="12px">
						{tournamentFullList.contestants}
					</Text>
					<Text
						size="body14/20"
						color="rgba(255, 255, 255, 0.8)"
						mb="12px"
						pr={{ base: '0', lg: '56px' }}
					>
						Прирост УС
					</Text>
				</SimpleGrid>
				{tournamentFullList.leaders.map((item) => <Leaders key={item.employeeNumber} leader={item} />)}
			</Box>
		</Fade>
	);
};
