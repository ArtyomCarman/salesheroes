import { keyframes } from '@chakra-ui/react';

export const gradient = keyframes`
	0% {
		transform: scale(0.75);
	}
	50% {
		transform: scale(1.25);
	}
	100% {
		transform: scale(0.75);
	}
`;

export const likeAnimation = keyframes`
	0%, 30% {
		transform: rotate(0deg);
		filter: drop-shadow(0px 0px 0px rgba(255, 255, 255, 0));
	}
	15% {
		transform: rotate(-45deg);
		filter: drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.6));
	}
	45% {
		transform: rotate(-15deg);
	}
	60%, 100% {
		transform: rotate(0deg);
	}
	75% {
		transform: rotate(-5deg);
	}
`;
