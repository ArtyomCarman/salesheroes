import { FC, MouseEvent, ReactNode, useMemo, useRef, useState } from 'react';
import { Box, useBreakpointValue } from '@chakra-ui/react';

import { AppPopoverContext } from '../contexts';
import { AppPopoverContent } from './AppPopoverContent';

export const AppPopoverContainer: FC<Props> = ({ children, content, header, ...boxProps }) => {
	const ref = useRef<HTMLDivElement>(null);

	const [targetRect, setTargetRect] = useState<DOMRect | null>(null);

	const getRect = () => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setTargetRect(rect);
		}
	};

	const resetRect = () => setTargetRect(null);
	const isMobile = useBreakpointValue({ base: true, lg: false });

	const handleMouseLeave = () => {
		if (isMobile) return;
		resetRect();
	};

	const handleMouseEnter = () => {
		if (isMobile) return;
		getRect();
	};

	const handleClick = (event: MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();

		if (!isMobile) return;
		getRect();
	};

	const value = useMemo(() => {
		return {
			content,
			header,
		};
	}, [content, header]);

	return (
		<AppPopoverContext.Provider value={value}>
			<Box
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onClick={handleClick}
				{...boxProps}
			>
				<Box ref={ref}>{children}</Box>
				{targetRect && <AppPopoverContent targetRect={targetRect} resetRect={resetRect} />}
			</Box>
		</AppPopoverContext.Provider>
	);
};

interface Props {
	children: ReactNode
	header: string;
	content: ReactNode;
}
