import { FC } from 'react';
import { Grid, Text } from '@chakra-ui/react';

import { ReactComponent as Info } from '../assets/icons/info.svg';

interface Props {
	text: string;
}

export const InfoBlock: FC<Props> = ({ text }) => {
	return (
		<Grid
			gap="16px"
			overflow="hidden"
			borderRadius="16px"
			padding="12px 16px"
			borderColor="rgba(87, 92, 112, 0.5)"
			borderWidth="1px"
			templateColumns="auto 1fr"
		>
			<Info width="24px" height="24px" />
			<Text color="rgba(255, 255, 255, 0.6)">{text}</Text>
		</Grid>
	);
};
