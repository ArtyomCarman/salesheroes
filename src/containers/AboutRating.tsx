import { Box, Flex, Text } from '@chakra-ui/react';

export const AboutRating = () => {
	return (
		<Box
			position="relative"
			p={{
				base: '24px 16px',
				lg: '24px',
			}}
			borderRadius="16px"
			bgColor="rgba(87, 92, 112, 0.3)"
			_before={{
				content: "''",
				position: 'absolute',
				width: '430px',
				height: '253px',
				bottom: '81.42px',
				right: '307.23px',
				borderRadius: '50%',
				background:
					'radial-gradient(41.47% 91.00% at 50.00% 50.00%, rgba(85, 35, 149, 0.70) 0%, rgba(58, 35, 149, 0.00) 100%)',
				filter: 'blur(76px) opacity(0.5)',
			}}
		>
			<Flex direction="column" gap="16px" position="relative" zIndex="1">
				<Text size="h24/32" variant="semibold" color="rgba(255, 255, 255, 1)">
					Рейтинг
				</Text>
				<Flex
					direction="column"
					gap="16px"
					position="relative"
					zIndex="1"
					color="rgba(255, 255, 255, 0.8)"
					font-size="16px"
					lineHeight="24px"
				>
					<Text>
						В зависимости от количества полученных кристаллов строится общий рейтинг всех
						участников. Он позволяет вам сравнить свой личный прогресс с результатами коллег в своем
						подразделении, в тербанке или на уровне всей страны.
					</Text>
					<Text>
						Рейтинг формируется как за текущий квартал, так и за все время существования проекта.
					</Text>
				</Flex>
			</Flex>
		</Box>
	);
};
