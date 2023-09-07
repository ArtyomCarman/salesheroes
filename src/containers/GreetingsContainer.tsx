import { Flex, Text } from "@chakra-ui/react";
import { ReactComponent as HelloIcon } from "../assets/icons/hello.svg";

export const GreetingsContainer = () => {
  return (
    <Flex
      direction="column"
      gap="8px"
      alignItems="center"
      justifyContent="center"
      marginBottom="16px"
    >
      <HelloIcon width="112px" height="112px" />
      <Text size="h24/32" variant="semibold">
        Привет, Роман!
      </Text>
      <Text size="sub20/28" color="rgba(255, 255, 255, 0.6)" textAlign="center">
        Это ваш прогресс с 4 августа по 10 сентября
      </Text>
    </Flex>
  );
};
