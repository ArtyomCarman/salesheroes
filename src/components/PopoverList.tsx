import { FC, ReactNode } from 'react';
import { Flex, Popover, PopoverBody, PopoverContent, PopoverTrigger, Text } from '@chakra-ui/react';

import { IGetClusterList } from '../interfaces';

interface Props {
	children: ReactNode;
	divisions?: IGetClusterList['divisions'];
}

export const PopoverList: FC<Props> = ({ children, divisions }) => {
	return (
		<Popover trigger="hover" placement="bottom-start">
			<PopoverTrigger>{children}</PopoverTrigger>
			<PopoverContent
				backgroundColor="rgba(87, 92, 112, 1)"
				borderRadius="8px"
				width="415px"
				maxHeight="384px"
				border="0"
			>
				<PopoverBody overflowY="scroll" paddingX="8px" paddingY="0">
					<Flex direction="column" overflow="auto">
						{divisions?.map((division) => (
							<Flex key={division} borderBottom="1px solid rgb(255 255 255 / 10%)">
								<Text size="caption12/16" padding="8px">
									{division}
								</Text>
							</Flex>
						))}
					</Flex>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
};
