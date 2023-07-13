import { Fragment } from 'react';
import { Fade, Flex, Text } from '@chakra-ui/react';

import { CommunityTabsNewsContainer } from './CommunityTabsNewsContainer';
import {news} from "../models";

export const CommunityNewsContainer = () => {
	return (
		<Fade in>
			{news.timePeriod.map((item) => (<Fragment key={item.name}>
				{item.name && (
					<Text
						size="h24/32"
						variant="semibold"
						paddingX={{
							base: '16px',
							lg: 0,
						}}
						marginBottom="24px"
						_notFirst={{
							marginTop: '48px',
						}}
					>
						{item.name}
					</Text>
				)}
				<Flex
					flexDirection="column"
					gap="16px"
					_notFirst={{
						marginTop: item.name ? '0px' : '16px',
					}}
				>
					{item.news.map((news) => (
						<CommunityTabsNewsContainer key={news.newsId} news={news} />
					))}
				</Flex>
			</Fragment>))}
		</Fade>
	);
};
