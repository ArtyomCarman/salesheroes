import { FC, useEffect, useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

import { ReactComponent as CheckIcon } from '../assets/icons/check-16.svg';

interface Props {
	color: string;
	value: number;
	height?: string;
	text?: string;
}

export const ProgressBar: FC<Props> = ({ color, value, height = '12px', text }) => {
	const [minValue, setMinValue] = useState(0);
	useEffect(() => {
		const width = document.querySelector('progress')?.offsetWidth;
		if (width) {
			const minVal = Number(((parseInt(height, 10) / width) * 100).toFixed(1));
			setMinValue(minVal);
		}
	}, [height]);

	return (
		<Flex position="relative" alignItems="center">
			<Box
				as="progress"
				value={value > 0 ? value : minValue}
				max={100}
				height={height}
				width="100%"
				sx={{
					'&::-webkit-progress-bar': {
						borderRadius: '100px',
						bgColor: 'rgba(255, 255, 255, 0.2)',
					},
					'&::-webkit-progress-value': {
						borderRadius: '100px',
						background: `var(--${color})`,
					},
				}}
			/>
			{text && (
				<Flex position="absolute" paddingX="8px" gap="4px">
					{value === 100 && <CheckIcon width="16px" height="16px" />}
					<Text
						size="caption8/16"
						variant="semibold"
						textShadow="1px 0px 0px rgba(87, 92, 112, 0.6)"
					>
						{text.toUpperCase()}
					</Text>
				</Flex>
			)}
		</Flex>
	);
};
