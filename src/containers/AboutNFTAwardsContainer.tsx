import { Box, Flex, Text } from '@chakra-ui/react';

export const AboutNFTAwardsContainer = () => {
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
				<Text size="h24/32" variant="semibold" color="rgba(255, 255, 255, 1)">
					<Box as="span" color="rgba(182, 117, 175, 1)">
						NFT
					</Box>
					-бейджи
				</Text>
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
						Самые знаковые награды выполнены в формате{' '}
						<Box as="span" fontWeight="600">
							NFT-токена.
						</Box>
					</Text>
					<Text>
						По сути{' '}
						<Box as="span" fontWeight="600">
							NFT
						</Box>{' '}
						– это разновидность криптовалюты, которая носит коллекционный характер. Это значит, что
						получив такой знак, вы будете владеть его уникальной цифровой версией в блокчейн-сети
						Сбера и в последующем сможете распоряжаться, совершать транзакции со своими
						коллекционными активами.
					</Text>
				</Flex>
			</Flex>
		</Box>
	);
};
