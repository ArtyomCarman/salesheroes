import { Box, Flex, Text } from '@chakra-ui/react';

import { ReactComponent as ProgressShieldLogo } from '../assets/icons/progress-shield.svg';
import { ReactComponent as ShieldLogo} from '../assets/icons/shield.svg';
import { ReactComponent as TripleShieldLogo} from '../assets/icons/tripple-shield.svg';

export const AboutAwardsContainer = () => {
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
					Награды
				</Text>
				<Flex direction="row" gap="28px">
					<ShieldLogo width="84px" height="88px" />
					<ProgressShieldLogo width="84px" height="88px" />
					<TripleShieldLogo width="84px" height="88px" />
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
						В качестве наград в нашем проекте используются бейджи – индивидуальные почетные знаки,
						которые присваиваются вам автоматически при соблюдении условий получения.
					</Text>
					<Text>Бейджи делятся на три основные группы:</Text>
					<Text>
						<Box as="span" fontWeight="600" color="rgba(255, 191, 62, 1)">
							Обычные
						</Box>
						. Выдаются за единоразовое знаковое событие. Например, вы выдали кредит размером более
						100 млн рублей. Как только в учетной системе появляются данные о выдаче кредита с такой
						суммой, сразу присуждается бейдж.
					</Text>
					<Text>
						<Box as="span" fontWeight="600" color="rgba(255, 191, 62, 1)">
							Накопительные
						</Box>
						. Выдаются за достижение цели в накоплении. Например, для получения бейджа вам
						необходимо закрыть 500 условных сделок за период. У такого вида бейджа предусмотрена
						шкала, которая позволит отследить, сколько сделок уже закрыто и сколько осталось для
						того, чтобы значок был присвоен.
					</Text>
					<Text>
						<Box as="span" fontWeight="600" color="rgba(255, 191, 62, 1)">
							Турнирные
						</Box>
						. Присуждаются за победу в соревновании с другими участниками{' '}
						<Box as="span" fontWeight="600">
							Героев продаж
						</Box>
						, поэтому такие бейджи имеют три степени:{' '}
						<Box as="span" fontWeight="600">
							Бронза
						</Box>{' '}
						– за победу в вашем подразделении,{' '}
						<Box as="span" fontWeight="600">
							Серебро
						</Box>{' '}
						– за победу в тербанке и{' '}
						<Box as="span" fontWeight="600">
							Золото
						</Box>{' '}
						– за первое место на уровне страны.
					</Text>
				</Flex>
			</Flex>
		</Box>
	);
};
