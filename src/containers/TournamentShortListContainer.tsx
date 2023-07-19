import { useMemo } from "react";
import { Fade, Flex, Text } from "@chakra-ui/react";

import { AppTabs } from "../components";
import { TournamentShortListProfilesContainer } from "./TournamentShortListProfilesContainer";
import {tournamentShortList, tournamentShortListT2} from "../models";
import {useParams} from "react-router-dom";

export const TournamentShortListContainer = () => {
    const { tournamentId } = useParams();
    const leaders = useMemo(() => {
        if (tournamentId === 'T2') {
            return tournamentShortListT2
        }

        return tournamentShortList
    }, [])

  const tabs = useMemo(
    () =>
        leaders?.map((item) => ({
        label: item.divisionLevelName,
        component: (
          <TournamentShortListProfilesContainer divisionLevel={item} />
        ),
      })),
    [tournamentShortList]
  );

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
        <Text size="h24/32" variant="semibold" color="white">
          Лидеры турнира
        </Text>
        <AppTabs tabs={tabs} />
      </Flex>
    </Fade>
  );
};
