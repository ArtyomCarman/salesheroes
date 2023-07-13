import { useSearchParams } from 'react-router-dom';
import { Box, Flex, Text } from '@chakra-ui/react';

import { CommunityNewsContainer, CommunityTabsRatingContainer } from '../containers';
import { DivisionLevel } from '../interfaces';

export const CommunityPage = () => {
	const [searchParams] = useSearchParams();
	const searchParamsValue = searchParams.get('divisionLevel') as DivisionLevel;

	return (
		<Box>
			<Flex direction="column" gap="24px">
				<Text
					size="h30/48"
					variant="medium"
					paddingX={{
						base: '16px',
						lg: 0,
					}}
				>
					Сообщество
				</Text>
				<Flex direction="column" gap="48px">
						<CommunityTabsRatingContainer />
						<CommunityNewsContainer key={searchParamsValue} />
				</Flex>
			</Flex>
		</Box>
	);
};
