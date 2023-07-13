import { FC, ReactNode } from 'react';

import { AppPopoverContainer } from './AppPopoverContainer';

export const AppPopover: FC<Props> = ({ children, content, header }) => (
	<AppPopoverContainer content={content} header={header}>
		{children}
	</AppPopoverContainer>
);

interface Props {
	children: ReactNode;
	content: ReactNode;
	header: string;
}
