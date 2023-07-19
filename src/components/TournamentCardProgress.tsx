import { FC } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";

import { Tournament } from "../interfaces";
import { ReactComponent as InfoIcon } from "../assets/icons/info.svg";
import { AppTooltip } from "./AppTooltip";
import { ProgressBar } from "./ProgressBar";

export const TournamentCardProgress: FC<Props> = ({ tournament }) => (
  <SimpleGrid gridTemplateColumns="156px 1fr auto" gap="8px" mb="16px">
    {(tournament.progressBarValue || tournament.progressBarValue === 0) && (
      <ProgressBar
        value={tournament.progressBarValue}
        color="light-blue-50"
        text={tournament.tournamentDurationName}
        height="16px"
      />
    )}
    <Text
      color="rgba(255, 255, 255, 0.8)"
      size="caption10/16"
      variant="medium"
      whiteSpace="nowrap"
      overflow="hidden"
      textOverflow="ellipsis"
    >
      {tournament.tournamentInfo}
    </Text>
    {/* {tournament.updateTooltip && (
			<AppTooltip
				text={tournament.updateTooltip}
				_before={{
					content: "''",
					width: '32px',
					height: '32px',
					position: 'absolute',
					top: '16px',
					right: '16px',
				}}
			>
				<InfoIcon width="16px" />
			</AppTooltip>
		)} */}
  </SimpleGrid>
);

interface Props {
  tournament: Tournament;
}
