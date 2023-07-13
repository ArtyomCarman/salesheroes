import { FC, ReactNode } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';

export const CommunityNewsCard: FC<Props> = ({ children, isTournamentNews, ...otherProps }) => (
	<Flex
		bgColor="rgba(87, 92, 112, 0.3)"
		flexDirection="column"
		borderRadius="16px"
		p={{
			base: '16px 24px',
			lg: '24px',
		}}
		gap="24px"
		overflow="hidden"
		position="relative"
		zIndex={1}
		_before={
			isTournamentNews
				? {
						content: "''",
						width: '403px',
						height: '403px',
						position: 'absolute',
						top: '-255px',
						left: '-78px',
						background: 'radial-gradient(66.32% 66.32% at 50% 50%, #2A4286 0%, #2A4286 100%)',
						borderRadius: '50%',
						filter: 'blur(76px)',
						zIndex: -1,
				  }
				: {
						content: "''",
						width: '403px',
						height: '403px',
						position: 'absolute',
						top: '-259px',
						right: '-55px',
						background:
							'radial-gradient(32.51% 32.51% at -27.54% 90.32%, rgba(62, 96, 191, 0.3) 0%, rgba(62, 96, 191, 0.3) 100%)',
						borderRadius: '50%',
						filter: 'blur(76px)',
						zIndex: -1,
				  }
		}
		_after={
			isTournamentNews
				? {
						content: "''",
						width: '409px',
						height: '409px',
						position: 'absolute',
						top: '-98px',
						left: '133px',
						background:
							'radial-gradient(64.48% 64.21% at 50% 50%, rgba(35, 149, 116, 0.7) 0%, rgba(35, 149, 116, 0) 100%)',
						borderRadius: '50%',
						filter: 'blur(76px)',
						zIndex: -1,
				  }
				: undefined
		}
		{...otherProps}
	>
		{children}
	</Flex>
);

interface Props extends FlexProps {
	children: ReactNode;
	isTournamentNews: boolean;
}
