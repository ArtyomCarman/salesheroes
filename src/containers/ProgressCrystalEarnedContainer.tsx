import { Divider, Flex, Text } from "@chakra-ui/react";
import { ReactComponent as DiamondIcon } from "../assets/icons/diamond.svg";

export const ProgressCrystalEarnedContainer = () => {
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
    >
      <Flex direction="column" gap="16px">
        <Flex
          direction="row"
          gap="8px"
          justifyContent="center"
          alignItems="center"
        >
          <Text size="h30/48" variant="medium">
            +15
          </Text>
          <DiamondIcon width="32px" height="32px" />
        </Flex>
        <Text size="sub20/28" color="rgba(255, 255, 255, 0.6)">
          За участие в 5 турнирах
        </Text>
      </Flex>
      <Divider borderColor="rgba(255, 255, 255, 0.2)" />
      <Flex direction="column" gap="16px">
        <Flex
          direction="row"
          gap="8px"
          justifyContent="center"
          alignItems="center"
        >
          <Text size="h30/48" variant="medium">
            +2
          </Text>
          <DiamondIcon width="32px" height="32px" />
        </Flex>
        <Text size="sub20/28" color="rgba(255, 255, 255, 0.6)">
          За две закрытые сделки
        </Text>
      </Flex>
    </Flex>
  );
};
