import { Box, Text } from '@chakra-ui/react';

import { TournamentContainer } from '../containers';

export const TournamentsPage = () => {
	return (
		<Box>
			<Text
				size="h30/48"
				mb="24px"
				variant="medium"
				paddingX={{
					base: '16px',
					lg: '0',
				}}
			>
				Турниры
			</Text>
			<TournamentContainer />
		</Box>
	);
};
