import { Fade, Flex, Text } from "@chakra-ui/react";

import { AppTabs } from "../components";
import { TournamentShortListProfilesContainer } from "./TournamentShortListProfilesContainer";
import { tournamentShortList } from "../models";

export const TournamentArchiveShortListContainer = () => {
  const tabs = tournamentShortList.map((item) => ({
    label: item.divisionLevelName,
    component: <TournamentShortListProfilesContainer divisionLevel={item} />,
  }));

  return (
    <Fade in>
      <Flex
        direction="column"
        gap="16px"
        p={{
          base: "24px 16px",
          lg: "24px",
        }}
        borderRadius="16px"
        bgColor="rgba(87, 92, 112, 0.3)"
      >
        <Text size="h24/32" variant="semibold">
          Лидеры турнира
        </Text>
        <AppTabs tabs={tabs} />
      </Flex>
    </Fade>
  );
};
