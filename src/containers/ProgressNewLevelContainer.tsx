import { Flex, Text } from "@chakra-ui/react";
import { LevelProgressIcon } from "../components";

export const ProgressNewLevelContainer = () => {
  return (
    <Flex
      direction="column"
      gap="16px"
      backgroundColor="rgba(87, 92, 112, 0.3)"
      borderRadius="16px"
      alignItems="center"
      justifyContent="center"
      padding="24px"
      position="relative"
      overflow="hidden"
      _before={{
        content: "''",
        position: "absolute",
        width: "403px",
        height: "403px",
        bottom: "118px",
        filter: "blur(76px)",
        background: `radial-gradient(66.32% 66.32% at 50% 10%, var(--blue-60) 30.03%, var(--blue-30) 100%)`,
        borderRadius: "50%",
      }}
    >
      <Text size="sub20/28" color="rgba(255, 255, 255, 0.8)" zIndex="1">
        Вы получили новый уровень
      </Text>
      <Flex direction="row" gap="12px" zIndex="1">
        <LevelProgressIcon
          colorCode={{ primary: "blue-60", secondary: "blue-30" }}
          size={40}
        />
        <Text size="h24/32" variant="semibold">
          Мастер
        </Text>
      </Flex>
      <Text size="caption14/24" color="rgba(255, 255, 255, 0.8)">
        Достигли 1% пользователей
      </Text>
    </Flex>
  );
};
