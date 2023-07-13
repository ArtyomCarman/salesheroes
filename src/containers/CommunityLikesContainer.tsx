import { FC } from 'react';
import { Box, Fade, Flex, Text } from '@chakra-ui/react';
import { likes } from '../models'

import { CommunityLikesButtonAndAmountContainer as LikesButtonAndAmount } from './CommunityLikesButtonAndAmountContainer';

export const CommunityLikesContainer: FC<Props> = ({ newsId }) => {
	return (
		<Fade in>
			<Flex flexDirection="column" gap="16px">
				{likes.bossNames?.length && (
					<Box>
						<Text as="span" size="body14/20" variant="regular">
							Нравится руководителям:
						</Text>{' '}
						<Text as="span" size="body14/20" variant="semibold">
							{likes.bossNames.join(', ')}
						</Text>
					</Box>
				)}

				<LikesButtonAndAmount result={likes} newsId={newsId} />
			</Flex>
		</Fade>
	);
};

interface Props {
	newsId: string;
}
