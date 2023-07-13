import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: '#000000',
				color: '#ffffff',
			},
		},
	},
	components: {
		Text: {
			sizes: {
				'h30/48': {
					fontSize: '30px',
					lineHeight: '48px',
					letterSpacing: '-0.01em',
				},
				'h24/32': {
					fontSize: '24px',
					lineHeight: '32px',
				},
				'sub20/28': {
					fontSize: '20px',
					lineHeight: '28px',
				},
				'sub18/24': {
					fontSize: '18px',
					lineHeight: '24px',
				},
				'body16/24': {
					fontSize: '16px',
					lineHeight: '24px',
				},
				'body14/24': {
					fontSize: '14px',
					lineHeight: '24px',
					letterSpacing: '0.01em',
				},
				'body14/20': {
					fontSize: '14px',
					lineHeight: '20px',
					letterSpacing: '0.01em',
				},
				'caption12/16': {
					fontSize: '12px',
					lineHeight: '16px',
					letterSpacing: '0.01em',
				},
				'caption10/16': {
					fontSize: '10px',
					lineHeight: '16px',
					letterSpacing: '0.01em',
				},
				'caption8/16': {
					fontSize: '8px',
					lineHeight: '16px',
					letterSpacing: '0.01em',
				},
			},
			variants: {
				regular: {
					fontWeight: '400',
				},
				medium: {
					fontWeight: '500',
				},
				semibold: {
					fontWeight: '600',
				},
			},
			defaultProps: {
				size: 'body16/24',
				variant: 'regular',
				color: '#FFFFFF',
			},
		},
	},
});
