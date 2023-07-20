import React, { FC, ReactNode, useMemo } from 'react';
import { Flex } from '@chakra-ui/react';

import { ReactComponent as Avatar} from '../assets/icons/avatar.svg';
import { ReactComponent as Lightning} from '../assets/icons/community-lightning.svg';
import { ReactComponent as NoAwardsIcon} from '../assets/icons/no-awards.svg';
import { ButtonComponent } from './ButtonComponent';

export const Empty: FC<Props> = ({ children, icon, buttonText, onClick }) => {
	const Icon = useMemo(() => {
		if (icon === 'lightning') {
			return <Lightning width="64px" height="64px" />;
		}
		if (icon === 'avatar') {
			return <Avatar width="64px" height="64px" />;
		}

		return <NoAwardsIcon width="64px" height="64px" />;
	}, [icon]);

	return (
		<Flex borderRadius="16px" p="8px 0 8px" gap="16px" direction="column">
			<Flex direction="column" gap="16px" alignItems="center">
				{Icon}
				{children}
			</Flex>
			{onClick && buttonText ? (
				<ButtonComponent text={buttonText} onClick={onClick} marginTop="16px" />
			) : null}
		</Flex>
	);
};

interface Props {
	children?: ReactNode;
	icon?: 'avatar' | 'lightning';
	buttonText?: string;
	onClick?: () => void;
}
