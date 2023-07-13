import { Box, Flex, Text } from '@chakra-ui/react';

import { ReactComponent as FakeAvatars } from '../assets/icons/fake-avatars.svg';

export const AboutCommunity = () => {
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
					Сообщество
				</Text>
				<FakeAvatars width="248px" height="48px" />
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
						Результаты турниров и факты получения бейджей автоматически публикуются в ленте
						достижений.
					</Text>
					<Text>
						Каждый пост можно лайкнуть. Отдельно подсвечиваются лайки от руководителей и
						топ-менеджеров. А еще мы скоро добавим возможность оставлять комментарии и
						переписываться, чтобы оставлять благодарности вдохновляющим результатам коллег.
					</Text>
					<Text>
						Таким образом, мы выстраиваем мостик между талантливыми результативными менеджерами, их
						коллегами и рукодством банка, и превращаем сеть продаж в полноценную социалную сеть на
						уровне страны!
					</Text>
				</Flex>
			</Flex>
		</Box>
	);
};
