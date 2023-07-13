import { Box, Flex, Text } from '@chakra-ui/react';

export const AboutProfile = () => {
	return (
		<Box
			position="relative"
			p={{
				base: '24px 16px',
				lg: '24px',
			}}
			borderRadius="16px"
			bgColor="rgba(87, 92, 112, 0.3)"
			overflow="hidden"
			_before={{
				content: "''",
				position: 'absolute',
				width: '430px',
				height: '253px',
				top: '17px',
				right: '14.23px',
				borderRadius: '50%',
				background:
					'radial-gradient(41.47% 91.00% at 50.00% 50.00%, rgba(7, 69, 163, 0.70) 0%, rgba(58, 35, 149, 0.00) 100%)',
				filter: 'blur(76px) opacity(0.5)',
			}}
		>
			<Flex direction="column" gap="16px" position="relative" zIndex="1">
				<Text size="h24/32" variant="semibold" color="rgba(255, 255, 255, 1)">
					Личный профиль
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
						Профиль в{' '}
						<Box as="span" fontWeight="600">
							Героях продаж
						</Box>
						, как и в любой другой социальной сети, – это ваша визитная карточка.
					</Text>
					<Text>
						В нем содержится информация о полученных достижениях, актуальном месте в рейтинге и
						вашем текущем уровне, как участника проекта.
					</Text>
					<Text>
						В первой версии приложения мы предусмотрели три базовых уровня в зависимости от общего
						количества заработанных кристаллов:{' '}
						<Box as="span" fontWeight="600" color="rgba(20, 188, 136, 1)">
							Специалист
						</Box>
						,{' '}
						<Box as="span" fontWeight="600" color="rgba(255, 181, 59, 1)">
							Эксперт
						</Box>{' '}
						и{' '}
						<Box as="span" fontWeight="600" color="rgba(86, 190, 249, 1)">
							Мастер
						</Box>
						. Каждому уровню соответствует определенный цвет, который влияет на оформление профиля и
						на цвет вашего аватара в общих списках и рейтингах.
					</Text>
					<Text>
						По мере развития проекта мы будем совершенствовать систему уровней и рангов для того,
						чтобы подчеркивать уникальность каждого участника.
					</Text>
				</Flex>
			</Flex>
		</Box>
	);
};
