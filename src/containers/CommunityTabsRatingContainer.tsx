import { useSearchParams } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';

import {
	EmptyRatingBlock,
	Filters,
} from '../components';
import { DivisionLevel } from '../interfaces';
import { CommunityRatingContainer } from './CommunityRatingContainer';
import { newsRatingCountry, newsRatingGOSB, newsRatingTERB } from "../models";
import {useMemo} from "react";

export const CommunityTabsRatingContainer = () => {
	const [searchParams] = useSearchParams();
	const searchParamsValue = searchParams.get('divisionLevel') as DivisionLevel;
	const isSearchParamValid = Object.values(DivisionLevel).includes(searchParamsValue);
	const divisionLevel = isSearchParamValid ? searchParamsValue : DivisionLevel['Страна'];
	const rating = useMemo(() => {
		if (divisionLevel === DivisionLevel.Тербанк) {
			return newsRatingTERB
		}
		if (divisionLevel === DivisionLevel.Подразделение) {
			return newsRatingGOSB
		}
		return newsRatingCountry
	}, [divisionLevel])


	const filters = [
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

	if (rating.leaders.length === 0 && divisionLevel === DivisionLevel.Страна)
		return <EmptyRatingBlock />;

	return (
		<Flex flexDirection="column" gap="24px">
			<Filters
				filters={filters}
				searchParam="divisionLevel"
				paddingX={{ base: '16px', lg: 0 }}
			/>
			<Text
				size="h24/32"
				variant="semibold"
				paddingX={{
					base: '16px',
					lg: 0,
				}}
			>
				Лидеры рейтинга
			</Text>
				<CommunityRatingContainer divisionLevel={divisionLevel} />
		</Flex>
	);
};
