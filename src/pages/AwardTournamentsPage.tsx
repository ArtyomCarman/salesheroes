import { Box, Text } from '@chakra-ui/react';

import { AwardTournamentsFullListContainer } from '../containers';

export const AwardTournamentsPage = () => {
	return (
		<Box>
			<Text
				size="h30/48"
				lineHeight="40px"
				mb="28px"
				variant="medium"
				paddingX={{
					base: '16px',
					lg: '0',
				}}
			>
				Турнир «Регата эффективности»
			</Text>
			<AwardTournamentsFullListContainer />
		</Box>
	);
};
