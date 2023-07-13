import { FC, TouchEvent, useState } from 'react';
import { Box, BoxProps, Tooltip } from '@chakra-ui/react';

import { ReactComponent as InfoIcon } from '../assets/icons/info.svg';

interface Props extends BoxProps {
	updateTooltip: string;
}

export const UpdateTooltip: FC<Props> = ({ updateTooltip, ...otherProps }) => {
	const [open, setOpen] = useState(false);

	const handleClick = (event: TouchEvent<HTMLDivElement>) => {
		event.preventDefault();
		setOpen((prev) => !prev);
	};

	return (
		<Tooltip
			label={updateTooltip}
			placement="top-end"
			bgColor="rgba(87, 92, 112, 1)"
			color="rgba(255, 255, 255, 1)"
			borderRadius="8px"
			p="8px 12px"
			isOpen={open}
			zIndex="10"
			position="relative"
		>
			<Box
				zIndex="1"
				onTouchEnd={handleClick}
				onMouseEnter={() => setOpen(true)}
				onMouseLeave={() => setOpen(false)}
				{...otherProps}
			>
				<InfoIcon />
			</Box>
		</Tooltip>
	);
};
