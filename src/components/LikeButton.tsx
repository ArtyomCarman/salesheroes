import { FC } from 'react';
import {
	Button,
	ButtonProps,
	Icon as ChakraIcon,
	Text,
	usePrefersReducedMotion,
} from '@chakra-ui/react';

import { likeAnimation } from '../utils';
import { ReactComponent as LikeIcon24 } from '../assets/icons/like.svg';

export const LikeButton: FC<Props> = ({ isLiked, ...otherProps }) => {
	const prefersReducedMotion = usePrefersReducedMotion();
	const animation = isLiked && !prefersReducedMotion ? `${likeAnimation} 1s ease-out` : undefined;

	const color = isLiked ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 0.8)';
	const bgColor = isLiked ? 'rgba(255, 191, 62, 1)' : 'rgba(255, 255, 255, 0.1)';
	const bgColorActive = isLiked ? 'rgba(255, 181, 59, 1)' : 'rgba(255, 255, 255, 0.2)';

	return (
		<Button
			borderRadius="8px"
			padding="8px 16px"
			bgColor={bgColor}
			_hover={{ bgColor: bgColorActive }}
			_active={{ bgColor: bgColorActive }}
			gap="8px"
			color={color}
			_focus={{
				boxShadow: 'none',
			}}
			{...otherProps}
		>
			<ChakraIcon width="24px" height="24px" as={LikeIcon24} animation={animation} />
			<Text size="body14/24" variant="medium">
				Лайк
			</Text>
		</Button>
	);
};

interface Props extends ButtonProps {
	isLiked: boolean;
}
