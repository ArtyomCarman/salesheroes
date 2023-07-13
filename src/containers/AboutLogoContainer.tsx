import { Box, Flex, Text } from '@chakra-ui/react';

import { ReactComponent as Logo } from '../assets/icons/logo.svg';

export const AboutLogoContainer = () => {
	return (
		<Box
			position="relative"
			p={{
				base: '24px 16px',
				lg: '32px 0 24px',
			}}
			borderRadius="16px"
			bgColor="rgba(29, 33, 39, 1)"
			overflow="hidden"
			_before={{
				content: "''",
				position: 'absolute',
				width: '423px',
				height: '250px',
				bottom: '177.94px',
				right: '258.49px',
				borderRadius: '50%',
				background: 'radial-gradient(66.32% 66.32% at 50.00% 50.00%, #2A4286 0%, #2A4286 100%)',
				filter: 'blur(76px)',
			}}
			_after={{
				content: "''",
				position: 'absolute',
				width: '430px',
				height: '253px',
				borderRadius: '50%',
				background:
					'radial-gradient(41.47% 91.00% at 50.00% 50.00%, rgba(35, 149, 116, 0.70) 0%, rgba(35, 149, 116, 0.00) 100%)',
				bottom: '55.18px',
				left: '139.76px',
				filter: 'blur(76px)',
			}}
		>
			<Flex direction="column" gap="12px" alignItems="center" position="relative" zIndex="1">
				<Logo width="84" height="108" />
				<Text size="h30/48" variant="medium" textAlign="center">
					Герои продаж
					<Text size="body16/24" color="rgba(255, 255, 255, 0.8)">
						v 1.0
					</Text>
				</Text>
			</Flex>
		</Box>
	);
};
