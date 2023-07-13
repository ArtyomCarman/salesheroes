import { Box, Fade, Flex, Text } from '@chakra-ui/react';

import {LevelIcon, ProfileUserProgress } from '../components';
import { ReactComponent as DiamondIcon} from '../assets/icons/diamond.svg';
import {progress} from "../models";

export const ProfileProgressContainer = () => {

	return (
		<>
			<ProfileUserProgress progress={progress} />
			<Fade in>
				<Box
					borderRadius="16px"
					bgColor="rgba(87, 92, 112, 0.3)"
					p={{
						base: '24px 16px 12px',
						lg: '24px 24px 12px',
					}}
				>
					<Flex direction="column" gap="12px">
						<Text size="h24/32" variant="semibold">
							Все уровни
						</Text>
						<Box>
							{progress.levelsDirectory.map((level) => (
								<Flex
									gap="8px"
									p="12px 0"
									border="2px solid transparent"
									_notLast={{
										boxShadow: '0px 1px 0px rgba(255, 255, 255, 0.1)',
									}}
									sx={
										level.name === progress.userLevel.currentLevelName
											? {
													bgColor: 'rgba(87, 92, 112, 0.3)',
													margin: '0 -16px',
													px: '16px',
													borderColor: 'rgba(255, 191, 62, 0.6)',
													borderRadius: '8px',
											  }
											: undefined
									}
									key={level.name}
								>
									<LevelIcon colorCode={level.colorCode} />
									<Text flexGrow={1} color="rgba(255, 255, 255, 0.8)">
										{level.name}
									</Text>
									<Text>{level.achievementConditions}</Text>
									<DiamondIcon width="24px" height="24px" />
								</Flex>
							))}
						</Box>
					</Flex>
				</Box>
			</Fade>
		</>
	);
};
