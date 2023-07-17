import {FC} from 'react';
import { Fade, Flex, Icon as ChakraIcon, SimpleGrid, Text } from '@chakra-ui/react';

import { IProfileProgressBody } from '../interfaces';
import { ReactComponent as DiamondIcon } from '../assets/icons/diamond.svg';
import { ReactComponent as InfoIcon } from '../assets/icons/info.svg';
import { LevelProgressIcon } from './LevelProgressIcon';
import { ProgressBar } from './ProgressBar';

export const ProfileUserProgress: FC<Props> = ({ progress }) => {
	const { crystals, userLevel } = progress;

	return (
		<Fade in>
			<Flex
				borderRadius="16px"
				bgColor="rgba(87, 92, 112, 0.3)"
				p={{
					base: '24px 16px',
					lg: '24px',
				}}
				gap="24px"
				direction="column"
			>
				<Text size="h24/32" variant="semibold">
					Прогресс
				</Text>
				<SimpleGrid
					templateColumns={{
						base: '1fr',
						lg: '173px 1fr',
					}}
					gap="16px"
				>
					<Flex
						bgColor="rgba(87, 92, 112, 0.3)"
						borderRadius="8px"
						p="16px"
						gap="8px"
						direction="column"
					>
						<Text variant="semibold">Кристаллы</Text>
						<Flex gap="8px" alignItems="center">
							<Text size="h24/32" variant="semibold">
								{crystals.crystalsEarned}
							</Text>
							<DiamondIcon width="24px" height="24px" />
						</Flex>
					</Flex>
					<Flex
						bgColor="rgba(87, 92, 112, 0.3)"
						borderRadius="8px"
						p="16px"
						gap="8px"
						direction="column"
					>
						<Text variant="semibold">Уровень</Text>
						<Flex gap="8px">
							<LevelProgressIcon colorCode={userLevel.colorCode} />
							<Text size="sub20/28" variant="semibold">
								{userLevel.currentLevelName}
							</Text>
						</Flex>
						{userLevel.progressBar && (
							<>
								<Flex gap="8px" alignItems="center">
									<Text color="rgba(255, 255, 255, 0.8)">{userLevel.progressBar.info}</Text>
									<DiamondIcon width="16px" height="16px" />
								</Flex>
								<ProgressBar
									value={userLevel.progressBar.value}
									color={userLevel.colorCode.secondary}
								/>
							</>
						)}
					</Flex>
				</SimpleGrid>
				<SimpleGrid gridTemplateColumns="auto 1fr" gap="8px" color="rgba(255, 255, 255, 0.6)">
					<ChakraIcon mt="3px" width="16px" height="16px" as={InfoIcon} />
					<Text size="body14/20">
						Мы планируем разработать магазин, где вы сможете потратить накопленные кристаллы
					</Text>
				</SimpleGrid>
			</Flex>
		</Fade>
	);
};

interface Props {
	progress: IProfileProgressBody;
}
