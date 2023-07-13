import { Link, useSearchParams } from 'react-router-dom';
import { Box, Flex, Text } from '@chakra-ui/react';

import { Empty, Filters } from '../components';
import { DivisionLevel, TimePeriod } from '../interfaces';
import { RatingListProfilesContainer } from './RatingListProfilesContainer';
import {ratingList} from "../models";

const filtersDivisionLevel = [
	{
		label: 'Страна',
		value: DivisionLevel['Страна'],
	},
	{
		label: 'Тербанк',
		value: DivisionLevel['Тербанк'],
	},
	{
		label: 'Подразделение',
		value: DivisionLevel['Подразделение'],
	},
];

const filtersTimePeriod = [
	{
		label: 'Текущий квартал',
		value: TimePeriod['Текущий квартал'],
	},
	{
		label: 'За всё время',
		value: TimePeriod['За всё время'],
	},
];

export const RatingListContainer = () => {
	const [searchParams] = useSearchParams();
	const divisionLevelParamsValue = searchParams.get('divisionLevel') as DivisionLevel;
	const isDivisionLevelParamValid = Object.values(DivisionLevel).includes(divisionLevelParamsValue);
	const divisionLevel = isDivisionLevelParamValid
		? divisionLevelParamsValue
		: DivisionLevel['Страна'];

	const timePeriodParamsValue = searchParams.get('timePeriod') as TimePeriod;
	const isTimePeriodParamValid = Object.values(TimePeriod).includes(timePeriodParamsValue);
	const timePeriod = isTimePeriodParamValid ? timePeriodParamsValue : TimePeriod['Текущий квартал'];

	if (ratingList.leaders.length === 0 && divisionLevel === DivisionLevel.Страна) {
		return (
			<Empty>
					<Text
						size="sub18/24"
						color="rgba(255, 255, 255, 0.6)"
						textAlign="center"
						whiteSpace="pre-wrap"
					>
						Пока нет участников в общем рейтинге.
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
		<>
			<Flex
				direction="column"
				gap="16px"
				position="sticky"
				top="0px"
				zIndex="2"
				bgColor="black"
				padding="16px 16px 0"
				margin="0 -16px"
			>
				<Filters
					filters={filtersDivisionLevel}
					searchParam="divisionLevel"
				/>
				<Filters filters={filtersTimePeriod} searchParam="timePeriod" />
			</Flex>
			<RatingListProfilesContainer
				key={timePeriodParamsValue}
				divisionLevel={divisionLevel}
				timePeriod={timePeriod}
			/>
		</>
	);
};
