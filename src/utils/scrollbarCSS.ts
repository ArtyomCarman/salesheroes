import { SystemStyleObject } from '@chakra-ui/react';

export const scrollbarCSS: SystemStyleObject = {
	scrollbarGutter: 'stable',

	'&::-webkit-scrollbar': {
		width: '12px',
	},

	'&::-webkit-scrollbar-track': {
		background: 'rgba(255, 255, 255, 0.01)',
	},

	'&::-webkit-scrollbar-thumb': {
		background: 'hsla(227, 18%, 75%, 0.7)',
		backgroundClip: 'content-box',

		borderRadius: '8px',
		borderLeft: '4px solid transparent',
		borderRight: '2px solid transparent',
	},
};
