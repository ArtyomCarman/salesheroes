import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import { progressRating } from "../models";
import { DivisionLevel, Reward, TimePeriod } from "../interfaces";
import { useNavigate } from "react-router-dom";

export const ProgressRatingContainer = () => {
  const navigate = useNavigate();
  const goToRating = (divisionLevel: DivisionLevel) => () => {
    navigate(
      `/rating?divisionLevel=${divisionLevel}&timePeriod=${TimePeriod["Текущий квартал"]}`,
    );
  };
  return (
    <Flex
      direction="column"
      gap="24px"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
      backgroundColor="rgba(87, 92, 112, 0.3)"
      borderRadius="16px"
      padding="24px"
      _before={{
        content: "''",
        position: "absolute",
        width: "403px",
        height: "403px",
        bottom: "118px",
        filter: "blur(76px)",
        background: `radial-gradient(66.32% 66.32% at 50% 10%, rgba(255, 181, 59, 0.48) 30.03%, rgba(255, 108, 12, 0.48) 100%)`,
        borderRadius: "50%",
      }}
    >
      <Text size="sub20/28" zIndex="1">
        У вас новое место в рейтинге
      </Text>
      <SimpleGrid
        gap="8px"
        gridTemplateColumns={{
          base: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        width="100%"
        zIndex="1"
      >
        {progressRating.map((item) => (
          <Flex
            direction="column"
            gap="4px"
            backgroundColor="rgba(87, 92, 112, 0.3)"
            padding="12px 16px"
            borderRadius="8px"
            width="100%"
            cursor="pointer"
            _hover={{ bgColor: "rgba(87, 92, 112, 0.5)" }}
            _active={{ bgColor: "rgba(87, 92, 112, 0.5)" }}
            onClick={goToRating(item.divisionLevelCode)}
          >
            <Flex justifyContent="space-between">
              <Text variant="semibold">{item.divisionLevel}</Text>
              {item.updateNumber ? (
                <Box
                  padding="2px 4px"
                  backgroundColor="rgba(20, 188, 136, 0.1)"
                  color="rgb(20, 188, 136)"
                  borderRadius="4px"
                >
                  {item.updateNumber}
                </Box>
              ) : null}
            </Flex>
            <Text color="rgba(255, 255, 255, 0.6)" size="sub20/28">
              <Box
                as="span"
                fontWeight="600"
                color={
                  item.reward === Reward.gold
                    ? "rgba(255, 191, 62)"
                    : item.reward === Reward.silver
                    ? "rgb(255, 255, 255)"
                    : "rgba(255, 255, 255, 0.6)"
                }
              >
                {item.placeInRating}
              </Box>{" "}
              {item.divisionLevelResult}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Flex>
  );
};
