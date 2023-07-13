import { Box, Flex, Text } from '@chakra-ui/react';

import { ReactComponent as CrystalLogo } from '../assets/icons/diamond.svg';

export const AboutCrystals = () => {
	return (
		<Box
			position="relative"
			p={{
				base: '24px 16px',
				lg: '24px',
			}}
			borderRadius="16px"
			bgColor="rgba(87, 92, 112, 0.3)"
		>
			<Flex direction="column" gap="16px" position="relative" zIndex="1">
				<Flex direction="row" gap="8px">
					<CrystalLogo width="32px" height="32px" />
					<Text size="h24/32" variant="semibold" color="rgba(255, 255, 255, 1)">
						Кристаллы
					</Text>
				</Flex>
				<Flex
					direction="column"
					gap="16px"
					position="relative"
					zIndex="1"
					color="rgba(255, 255, 255, 0.8)"
					fontSize="16px"
					lineHeight="24px"
				>
					<Text>
						Каждый бейдж имеет свой номинал в кристаллах. Так мы называем нашу внутреннюю валюту.
					</Text>
					<Text>Чем более значимый и сложный бейдж вы получаете, тем больше его стоимость.</Text>
					<Text>
						Общее количество заработанных кристаллов влияет на ваш уровень, рейтинг и звание. А для
						того, чтобы вы могли конвертировать кристаллы в реальные товары и ценности, мы
						разрабатываем наш фирменный магазин.
					</Text>
				</Flex>
			</Flex>
		</Box>
	);
};
