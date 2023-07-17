import { useMemo } from "react";
import { Box, Fade, Flex, Text } from "@chakra-ui/react";

import { Ratings, AppTabs } from "../components";
import { ratingProfile } from "../models";

export const ProfileIdRatingContainer = () => {
  const tabs = useMemo(
    () =>
      ratingProfile.timePeriod.map((item) => ({
        label: item.periodName,
        component: (
          <Ratings divisions={item.divisions} timePeriod={item.periodName} />
        ),
      })),
    [ratingProfile.timePeriod]
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
            Рейтинг
          </Text>
          <AppTabs tabs={tabs} />
        </Flex>
      </Box>
    </Fade>
  );
};
