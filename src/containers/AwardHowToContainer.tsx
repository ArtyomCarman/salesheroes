import { Box, Fade, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { badgeID } from "../models";
import { useParams } from "react-router-dom";
import {IProfileBadgesIdBody} from "../interfaces";

export const AwardHowToContainer = () => {
	const { badgeId } = useParams()
	const badge = badgeID.find((item) => item.badgeId === badgeId) as IProfileBadgesIdBody

	return (
		<Fade in>
			<Flex
				p={{
					base: '24px 16px',
					lg: '24px',
				}}
				bgColor="rgba(87, 92, 112, 0.3)"
				borderRadius="16px"
				gap="16px"
				color="rgba(255, 255, 255, 0.8)"
				direction="column"
			>
				<Text size="h24/32" variant="semibold" color="#fff">
					Как получить бейдж
				</Text>
				<Text whiteSpace="pre-wrap">{badge.specification.description}</Text>
				{badge.specification.features && (
					<Box>
						<Text variant="semibold">Особенности</Text>
						<UnorderedList>
							{badge.specification.features.map((item) => (
								<ListItem key={item.feature}>{item.feature}</ListItem>
							))}
						</UnorderedList>
					</Box>
				)}
			</Flex>
		</Fade>
	);
};
