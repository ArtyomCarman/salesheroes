import { Fade, Flex, Icon as ChakraIcon, SimpleGrid, Text } from '@chakra-ui/react';

import { ReactComponent as DiamondIcon} from '../assets/icons/diamond.svg';
import { ReactComponent as InfoIcon16} from '../assets/icons/info.svg';
import { progress } from "../models";

export const NonContestantProfileProgressContainer = () => {
	if (progress.crystals.crystalsEarned === 0) return null;

	return (
		<Fade in>
			<Flex
				borderRadius="16px"
				bgColor="rgba(87, 92, 112, 0.3)"
				p={{
					base: '24px 16px',
					lg: '24px',
				}}
				gap="16px"
				direction="column"
			>
				<Text size="h24/32" variant="semibold">
					Кристаллы
				</Text>
				<Flex borderRadius="8px" gap="8px" direction="column">
					<Flex gap="8px" alignItems="center">
						<Text size="h30/48">{progress.crystals.crystalsEarned}</Text>
						<DiamondIcon width="32px" height="32px" />
					</Flex>
				</Flex>
				<SimpleGrid gridTemplateColumns="auto 1fr" gap="8px" color="rgba(255, 255, 255, 0.6)">
					<ChakraIcon mt="3px" width="16px" height="16px" as={InfoIcon16} />
					<Text size="body14/20">
						Мы планируем разработать магазин, где вы сможете потратить накопленные кристаллы
					</Text>
				</SimpleGrid>
			</Flex>
		</Fade>
	);
};
