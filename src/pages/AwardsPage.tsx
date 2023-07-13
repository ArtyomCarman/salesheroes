import { Fade, Text } from '@chakra-ui/react';

import { AwardsContainer } from '../containers';

export const AwardsPage = () => (
	<Fade in>
		<Text
			size="h30/48"
			variant="medium"
			paddingX={{
				base: '16px',
				lg: '0',
			}}
			mb="24px"
		>
			Награды
		</Text>
			<AwardsContainer />
	</Fade>
);
