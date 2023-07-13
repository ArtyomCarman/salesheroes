import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Fade, SimpleGrid, Text } from '@chakra-ui/react';

import { Empty, Leaders } from '../components';
import { DivisionLevel, TimePeriod } from '../interfaces';
import {ratingList} from "../models";

interface Props {
	divisionLevel: DivisionLevel;
	timePeriod: TimePeriod;
}

export const RatingListProfilesContainer: FC<Props> = ({ divisionLevel, timePeriod }) => {
	if (ratingList.leaders.length === 0) {
		return (
			<Empty>
				<Text
					size="sub18/24"
					color="rgba(255, 255, 255, 0.6)"
					textAlign="center"
					whiteSpace="pre-wrap"
				>
					{divisionLevel === DivisionLevel.Тербанк
						? 'Пока нет участников рейтинга в вашем тербанке.'
						: 'Пока нет участников рейтинга в вашем подразделении.'}
					{'\n'}Получите{' '}
					<Box
						as="span"
						color="rgba(255, 255, 255, 0.8)"
						fontWeight="600"
						_hover={{
							backgroundColor: 'rgba(255, 255, 255, 0.1)',
							borderRadius: '4px',
							borderBottom: 'none',
						}}
						_active={{
							backgroundColor: 'rgba(255, 255, 255, 0.1)',
							borderRadius: '4px',
							borderBottom: 'none',
						}}
						borderBottom="1px dashed rgba(255, 255, 255, 0.8)"
					>
						<Link to="/gamification/awards">награды</Link>
					</Box>{' '}
					и станьте первым!
				</Text>
			</Empty>
		);
	}

	return (
		<Fade in>
			<Box>
				<SimpleGrid
					padding="16px 16px 12px"
					margin="0 -16px"
					gridTemplateColumns="auto auto"
					justifyContent="space-between"
					boxShadow="0px 1px 0px rgba(255, 255, 255, 0.2)"
					position="sticky"
					top="106px"
					bgColor="black"
					zIndex="2"
				>
					<Text size="body14/24" color="rgba(255, 255, 255, 0.8)">
						{ratingList.contestants}
					</Text>
					<Text
						size="body14/24"
						color="rgba(255, 255, 255, 0.8)"
						pr={{
							base: '0',
							lg: '56px',
						}}
					>
						Кристаллы
					</Text>
				</SimpleGrid>
				{ratingList.leaders.map((item) => <Leaders key={item.employeeNumber} leader={item} />)}
			</Box>
		</Fade>
	);
};
