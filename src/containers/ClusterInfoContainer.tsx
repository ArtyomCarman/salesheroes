import { Box, Fade, Flex, SimpleGrid, Text } from '@chakra-ui/react';

import { AppPopover } from '../components';
import { ReactComponent as Info } from '../assets/icons/info.svg';
import {cluster} from "../models";

export const ClusterInfoContainer = () => {
	return (
		<Fade in>
			<SimpleGrid
				gap="16px"
				overflow="hidden"
				borderRadius="16px"
				padding="12px 16px"
				borderColor="rgba(87, 92, 112, 0.5)"
				borderWidth="1px"
				mb="24px"
				templateColumns="auto 1fr"
			>
				<Info width="24px" height="24px" />
				<Flex
					letterSpacing="0.01em"
					direction={{ base: 'column', lg: 'row' }}
					alignItems="flex-start"
				>
					<Text color="rgba(255, 255, 255, 0.6)" whiteSpace="pre-wrap">
						{cluster.text}{' '}
					</Text>
					<AppPopover
						header={cluster.amount}
						content={cluster?.divisions?.map((division) => (
							<Flex
								key={division}
								borderBottom="1px solid rgb(255 255 255 / 10%)"
								padding="12px 16px"
							>
								<Text size="body16/24">{division}</Text>
							</Flex>
						))}
					>
						<Box
							_hover={{
								backgroundColor: 'rgba(255, 255, 255, 0.1)',
								borderRadius: '4px',
								borderBottom: 'none',
							}}
							role="group"
						>
							<Text
								color="rgba(255, 255, 255, 0.8)"
								variant="semibold"
								borderBottom="1px dashed rgba(255, 255, 255, 0.8)"
								_groupHover={{
									borderBottomColor: 'transparent',
								}}
							>
								{cluster.amount}
							</Text>
						</Box>
					</AppPopover>
				</Flex>
			</SimpleGrid>
		</Fade>
	);
};
