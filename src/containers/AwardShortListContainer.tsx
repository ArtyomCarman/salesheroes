import { useMemo } from "react";
import { Box, Fade, Flex, Grid, Text } from "@chakra-ui/react";

import { AppTabs, AppTooltip } from "../components";
import { AwardShortListProfilesContainer } from "./AwardShortListProfilesContainer";
import { badgeShortList } from "../models";
import { ReactComponent as InfoIcon } from "../assets/icons/info.svg";

export const AwardShortListContainer = () => {
  const tabs = useMemo(
    () =>
      badgeShortList.map((item) => ({
        label: item.divisionLevelName,
        component: <AwardShortListProfilesContainer divisionLevel={item} />,
      })),
    []
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
          <Grid
            gridTemplateColumns="max-content max-content"
            alignItems="baseline"
            gap="10px"
          >
            <Text size="h24/32" variant="semibold">
              Получили бейдж
            </Text>
            <AppTooltip
              header="Отсортировано по дате получения бейджа"
              text=""
              _before={{
                content: "''",
                width: "32px",
                height: "32px",
                position: "absolute",
                top: "16px",
                right: "16px",
              }}
            >
              <InfoIcon width="16px" />
            </AppTooltip>
          </Grid>

          <AppTabs tabs={tabs} />
        </Flex>
      </Box>
    </Fade>
  );
};
