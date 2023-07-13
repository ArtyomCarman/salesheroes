import { Box, Flex, Text } from '@chakra-ui/react';

import { ReactComponent as FirstPlaceShield } from '../assets/icons/firstPlaceShield.svg';
import { ReactComponent as SecondPlaceShield } from '../assets/icons/secondPlaceShield.svg';
import { ReactComponent as ThirdPlaceShield } from '../assets/icons/thirdPlaceShield.svg';

export const AboutTournaments = () => {
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
				bottom: '80.42px',
				right: '40.23px',
				borderRadius: '50%',
				background:
					'radial-gradient(41.47% 91.00% at 50.00% 50.00%, rgba(85, 35, 149, 0.70) 0%, rgba(58, 35, 149, 0.00) 100%)',
				filter: 'blur(76px) opacity(0.5)',
			}}
		>
			<Flex direction="column" gap="16px" position="relative" zIndex="1">
				<Text size="h24/32" variant="semibold" color="rgba(255, 255, 255, 1)">
					Турниры
				</Text>
				<Flex direction="row" gap="28px">
					<FirstPlaceShield width="72px" height="100px" />
					<SecondPlaceShield width="72px" height="100px" />
					<ThirdPlaceShield width="72px" height="100px" />
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
						Турнир – это соревнование между клиентскими менеджерами в достижении ключевых
						бизнес-метрик.
					</Text>
					<Text>
						Каждый турнир имеет срок. Например, две недели, месяц или квартал. По окончанию срока
						турнира автоматически определяются победители и стартует новый до тех пор, пока он не
						будет перенесен в архив.
					</Text>
					<Text>
						Одновременно проводятся турниры различных тематик, а участником вы становитесь по факту
						совершения бизнес-действий, прописанных в условиях. Например, если турнир посвящен
						котированию депозитов, то, как только вы прокотируете ваш первый депозит в период
						проведения турнира, вы присодиняетесь к соревнованию.
					</Text>
					<Text>
						Актуальный список участников и ваше текущее место в турнире обновляются динамически и
						всегда доступны под рукой.
					</Text>
					<Text>
						В качестве награды здесь выступают турнирные бейджи соответствующей степени в
						зависимости от масштаба победы:{' '}
						<Box as="span" fontWeight="600">
							Золото
						</Box>
						,{' '}
						<Box as="span" fontWeight="600">
							Серебро
						</Box>{' '}
						или{' '}
						<Box as="span" fontWeight="600">
							Бронза
						</Box>
						.
					</Text>
				</Flex>
			</Flex>
		</Box>
	);
};
