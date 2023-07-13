import { Link } from 'react-router-dom';
import { Box, Flex, Image, Show, Text } from '@chakra-ui/react';

import { ReactComponent as ArrowRightIcon } from '../assets/icons/arrow-right.svg';
import RomanGayn from '../assets/images/romanGayn.png';
import RomanSolodovnikov from '../assets/images/romanSolodovnikov.png';

const profiles = [
	{
		name: 'Роман Солодовников',
		photo: RomanSolodovnikov,
		email: 'Solodovnikov.R.Y@sberbank.ru',
		color: 'green-30',
	},
	{
		name: 'Роман Гайн',
		photo: RomanGayn,
		email: 'RAGayn@sber.ru',
		color: 'green-30',
	},
];

export const AboutTeam = () => {
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
					Мы - команда
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
							Друзья, спасибо за интерес!{' '}
						</Box>
						У нас большие планы по развитию проекта, но сделать его по-настоящему хорошо мы сможем
						только совместно с вами. Присылайте идеи и обратную связь, давайте общаться!
					</Text>
					<Text>С уважением, лидеры продукта:</Text>
					<Box>
						{profiles.map((profile) => (
							<Link to={`mailto:${profile.email}`} key={profile.name}>
								<Flex
									gap="8px"
									paddingTop="12px"
									border="2px solid transparent"
									cursor="pointer"
									role="group"
									boxShadow={
										profile === profiles[0] ? '28px 29px 0px -28px rgb(255 255 255 / 20%)' : 'none'
									}
									_hover={{
										backgroundColor: 'rgba(87, 92, 112, 0.3)',
										margin: '0 -16px',
										px: '16px',
										borderRadius: '8px',
										boxShadow: 'none',
									}}
									_active={{
										backgroundColor: 'rgba(87, 92, 112, 0.3)',
										margin: '0 -16px',
										px: '16px',
										borderRadius: '8px',
										boxShadow: 'none',
									}}
								>
									<Box
										border={`3px solid var(--${profile.color})`}
										borderRadius="50%"
										height="48px"
										width="48px"
										overflow="hidden"
										p="2px"
										flexShrink={0}
										position="relative"
										zIndex="1"
									>
										<Box
											display="flex"
											alignItems="center"
											justifyContent="center"
											height="100%"
											borderRadius="50%"
											position="relative"
										>
											<Image src={profile.photo} borderRadius="50%" zIndex="1" objectFit="cover" />
										</Box>
									</Box>
									<Flex flexGrow={1} alignItems="center" pb="11px">
										<Box flexGrow={1}>
											<Text variant="semibold">{profile.name}</Text>
											<Text size="body14/24" color="rgba(255, 255, 255, 0.8)">
												{profile.email}
											</Text>
										</Box>
										<Show above="md">
											<ArrowRightIcon width="24px" height="24px" />
										</Show>
									</Flex>
								</Flex>
							</Link>
						))}
					</Box>
				</Flex>
			</Flex>
		</Box>
	);
};
