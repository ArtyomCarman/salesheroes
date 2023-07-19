import { Box, Fade, Flex, SimpleGrid, Text } from "@chakra-ui/react";

import { AwardsListItem } from "../components";
import { badges } from "../models";

export const AwardsContainer = () => {
  return (
    <Fade in>
      <Flex direction="column" gap="48px">
        {badges.badgesType.map((award) => (
          <Box key={award.badgeTypeName}>
            <Text
              size="h24/32"
              variant="semibold"
              mb="24px"
              paddingX={{
                base: "16px",
                lg: "0",
              }}
            >
              {award.badgeTypeName}
            </Text>
            <SimpleGrid gridTemplateColumns="repeat(2, 1fr)" gap="10px">
              {award.badges.map((badge) => (
                <AwardsListItem
                  key={badge.badgeId}
                  badge={badge}
                  status="ALL"
                />
              ))}
            </SimpleGrid>
          </Box>
        ))}
      </Flex>
    </Fade>
  );
};
