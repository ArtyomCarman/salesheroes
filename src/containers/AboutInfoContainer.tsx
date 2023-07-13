import { Box, Flex, Text } from '@chakra-ui/react';

export const AboutInfoContainer = () => {
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
				width: '234px',
				height: '138px',
				top: '116px',
				right: '553.67px',
				borderRadius: '50%',
				background:
					'radial-gradient(66.32% 66.32% at 50.00% 50.00%, rgba(171, 198, 94, 0.70) 0%, rgba(55, 123, 105, 0.70) 100%)',
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
				top: '82px',
				left: '415px',
				filter: 'blur(76px) opacity(0.5)',
			}}
		>
			<Flex direction="column" gap="16px" position="relative" zIndex="1">
				<Text size="h24/32" variant="semibold" color="rgba(255, 255, 255, 1)">
					Геймификация бизнеса
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
						<Box as="span" fontWeight="600">
							Герои продаж
						</Box>{' '}
						– это проект, посвященный игровым механикам в бизнес-процессе ККСБ.
					</Text>
					<Text>
						Это не игра в общепринятом смысле. Здесь не нужно строить собственную ферму или
						выращивать тамагочи. Если проводить аналогию, то концепция нашего продукта близка к
						фитнесс-трекеру, только не для физической активности, а для бизнеса.
					</Text>
					<Text>
						Для того, чтобы стать участником, вам не нужно предпринимать специальных действий.
						Просто занимайтесь своим повседневным делом, развивайте бизнес клиента, а приложение с
						помощью алгоритмов само визуализирует ваш прогресс.
					</Text>
					<Text>
						С помощью{' '}
						<Box as="span" fontWeight="600">
							Героев продаж
						</Box>{' '}
						вы сможете коллекционировать награды, получать благодарность от коллег и руководства
						Банка, развивать собственный профиль и заявлять о себе на всю страну!
					</Text>
				</Flex>
			</Flex>
		</Box>
	);
};
