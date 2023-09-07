import { Flex, Text } from "@chakra-ui/react";

export const ProgressCompareContainer = () => {
  return (
    <Flex
      direction="column"
      gap="8px"
      padding="24px"
      borderRadius="16px"
      border="2px solid rgba(255, 255, 255, 0.2)"
    >
      <Text
        size="sub20/28"
        variant="semibold"
        textAlign="center"
        color="rgba(255, 255, 255, 0.6)"
        whiteSpace="pre-wrap"
      >
        Ваш прогресс выше,{"\n"} чем у 70% участников
      </Text>
      <Text size="sub20/28" color="rgba(255, 255, 255, 0.6)" textAlign="center">
        Так держать!
      </Text>
    </Flex>
  );
};
