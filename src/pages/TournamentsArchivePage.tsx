import { Box, Fade, Text } from '@chakra-ui/react';

import { TournamentArchiveContainer } from '../containers';

export const TournamentsArchivePage = () => {
	return (
		<Fade in>
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
					Архив турниров
				</Text>
				<TournamentArchiveContainer />
			</Box>
		</Fade>
	);
};
