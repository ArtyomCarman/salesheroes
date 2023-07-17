import { Link } from 'react-router-dom';
import { Box, Fade, Flex, Text } from '@chakra-ui/react';

import newsEmptyLeaders from '../assets/images/newsEmptyLeaders.png';
import { Empty } from './Empty';

export const EmptyRatingBlock = () => {
	return (
		<Fade in>
			<Flex
				bgImage={newsEmptyLeaders}
				bgRepeat="no-repeat"
				bgSize="cover"
				bgPosition="center"
				backgroundColor="rgba(87, 92, 112, 0.3)"
				p="24px"
				borderRadius="16px"
				justifyContent="center"
				sx={{
					'@media (pointer: fine)': {
						'&:hover': {
							backgroundColor: 'rgba(87, 92, 112, 0.5)',
						},
					},
				}}
				_active={{
					backgroundColor: 'rgba(87, 92, 112, 0.5)',
				}}
				position="relative"
			>
				<Empty icon="lightning">
						<Text
							size="sub18/24"
							color="rgba(255, 255, 255, 0.6)"
							textAlign="center"
							whiteSpace="pre-wrap"
						>
							Пока нет участников в общем рейтинге.{'\n'}Получите{' '}
							<Box
								as="span"
								fontWeight="600"
								sx={{
									'@media (pointer: fine)': {
										'&:hover': {
											backgroundColor: 'rgba(255, 255, 255, 0.1)',
											borderRadius: '4px',
											borderBottom: 'none',
										},
									},
								}}
								_active={{
									backgroundColor: 'rgba(255, 255, 255, 0.1)',
									borderRadius: '4px',
									borderBottom: 'none',
								}}
								borderBottom="1px dashed rgba(255, 255, 255, 0.8)"
							>
								<Link to="/awards">награды</Link>
							</Box>{' '}
							и станьте первым!
						</Text>
				</Empty>
			</Flex>
		</Fade>
	);
};
