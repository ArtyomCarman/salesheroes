import { Box, Flex, Text } from '@chakra-ui/react';

import { RatingListContainer } from '../containers';

export const RatingListPage = () => {
	return (
		<Box>
			<Flex
				direction="column"
				gap="8px"
				paddingX={{
					base: '16px',
					lg: '0',
				}}
			>
				<Text size="h30/48" variant="medium">
					Лидеры рейтинга
				</Text>
				<RatingListContainer />
			</Flex>
		</Box>
	);
};
