import { Fade, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import {archiveTournamentId} from "../models";

export const TournamentDescriptionContainer = () => {
	return (
		<Fade in>
			<Flex
				direction="column"
				gap="16px"
				p={{
					base: '24px 16px',
					lg: '24px',
				}}
				borderRadius="16px"
				bgColor="rgba(87, 92, 112, 0.3)"
			>
				<Text size="h24/32" variant="semibold" color="white">
					Описание турнира
				</Text>
				<Text color="rgba(255, 255, 255, 0.8)">{archiveTournamentId.specification.description}</Text>
				{archiveTournamentId.specification.features ? (
					<Flex gap="8px" direction="column">
						<Text variant="semibold">Особенности</Text>
						<UnorderedList>
							{archiveTournamentId.specification.features.map((item) => (
								<ListItem key={item.number} color="rgba(255, 255, 255, 0.8)">
									{item.feature}
								</ListItem>
							))}
						</UnorderedList>
					</Flex>
				) : null}
			</Flex>
		</Fade>
	);
};
