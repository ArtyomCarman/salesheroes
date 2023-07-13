import { FC, useMemo } from 'react';
import { Button, ButtonProps, Spinner, Text } from '@chakra-ui/react';

interface Props extends ButtonProps {
	text: string;
	design?: 'filled' | 'outlined' | 'transparent';
	onClick: () => void;
	isLoading?: boolean;
}

export const ButtonComponent: FC<Props> = ({
	text,
	design = 'filled',
	onClick,
	isLoading,
	...otherProps
}) => {
	const buttons = useMemo(() => {
		if (design === 'outlined') {
			return {
				button: {
					border: '2px solid rgba(255, 255, 255, 0.2)',
					bgColor: 'transparent',
					hover: { bgColor: 'rgba(255, 255, 255, 0.1)' },
					active: { bgColor: 'rgba(255, 255, 255, 0.1)' },
				},
			};
		}

		if (design === 'transparent') {
			return {
				button: {
					bgColor: 'transparent',
					hover: { bgColor: 'rgba(255, 255, 255, 0.1)' },
					active: { bgColor: 'rgba(255, 255, 255, 0.1)' },
				},
			};
		}

		return {
			button: {
				bgColor: 'rgba(255, 255, 255, 0.1)',
				hover: { bgColor: 'rgba(255, 255, 255, 0.2)' },
				active: { bgColor: 'rgba(255, 255, 255, 0.2)' },
			},
		};
	}, [design]);

	return (
		<Button
			border-radius="8px"
			padding="12px 20px"
			bgColor={buttons.button.bgColor}
			height="auto"
			sx={{
				'@media (pointer: fine)': {
					'&:hover': buttons.button.hover,
				},
			}}
			_active={buttons.button.active}
			border={buttons.button?.border}
			onClick={onClick}
			disabled={isLoading}
			_focus={{
				boxShadow: 'none',
			}}
			{...otherProps}
		>
			{isLoading ? (
				<Spinner />
			) : (
				<Text color="rgba(255, 255, 255, 0.8)" size="body14/24" variant="medium">
					{text}
				</Text>
			)}
		</Button>
	);
};
