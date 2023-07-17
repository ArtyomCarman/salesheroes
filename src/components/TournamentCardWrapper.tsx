import { FC, ReactNode, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react';


export const TournamentCardWrapper: FC<Props> = ({ children, navigateTo }) => {
	const navigate = useNavigate();
	const goToTournamentId = useCallback(() => {
		navigate(`/tournaments/${navigateTo}`);
	}, [navigateTo, navigate]);

	return (
		<Box
			bgColor="var(--grey-50-30)"
			sx={{
				'@media (pointer: fine)': {
					'&:hover': {
						bgColor: 'var(--grey-50-50)',
						cursor: 'pointer',
					},
				},
			}}
			_active={{
				bgColor: 'var(--grey-50-50)',
			}}
			p={{
				base: '24px 16px',
				lg: '24px',
			}}
			borderRadius="16px"
			overflow="hidden"
			_before={{
				content: "''",
				width: '403px',
				height: '403px',
				position: 'absolute',
				top: '-341px',
				right: '21px',
				background:
					'radial-gradient(32.51% 32.51% at -27.54% 90.32%, rgba(135, 90, 192, 0.3) 0%, rgba(135, 90, 192, 0.3) 100%)',
				borderRadius: '50%',
				filter: 'blur(76px)',
			}}
			position="relative"
			onClick={goToTournamentId}
		>
			{children}
		</Box>
	);
};

interface Props {
	children: ReactNode;
	navigateTo: string;
}
