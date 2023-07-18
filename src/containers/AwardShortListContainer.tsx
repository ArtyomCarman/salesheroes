import { useMemo } from "react";
import { Box, Fade, Flex, Text } from "@chakra-ui/react";

import { AppTabs } from "../components";
import { AwardShortListProfilesContainer } from "./AwardShortListProfilesContainer";
import { badgeShortList } from "../models";

export const AwardShortListContainer = () => {
  const tabs = useMemo(
    () =>
        badgeShortList.map((item) => ({
        label: item.divisionLevelName,
        component: <AwardShortListProfilesContainer divisionLevel={item} />,
      })),
    [badgeShortList]
  );

  return (
    <Fade in>
      <Box
        borderRadius="16px"
        bgColor="rgba(87, 92, 112, 0.3)"
        p={{
          base: "24px 16px",
          lg: "24px",
        }}
      >
        <Flex direction="column" gap="24px">
          <Text size="h24/32" variant="semibold">
            Получили бейдж
          </Text>
          <AppTabs tabs={tabs} />
        </Flex>
      </Box>
    </Fade>
  );
};
