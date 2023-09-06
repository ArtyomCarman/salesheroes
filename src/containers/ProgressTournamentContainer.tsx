import { Box, Flex, Text } from "@chakra-ui/react";
import { LightningInHexagon } from "../components";
import { ReactComponent as ArrowRight } from "../assets/icons/arrow-right.svg";

export const ProgressTournamentContainer = () => {
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
        bottom: "290px",
        filter: "blur(76px)",
        background: `radial-gradient(43.01% 43.01% at -27.54% 90.32%, rgba(135, 90, 192, 0.30) 0%, rgba(135, 90, 192, 0.30) 100%)`,
        borderRadius: "50%",
      }}
    >
      <LightningInHexagon color="rgba(135, 90, 192)" />
      <Text size="sub20/28" color="rgba(255, 255, 255, 0.8)">
        Вы в числе лидеров в турнире
      </Text>
      <Flex
        direction="row"
        width="100%"
        justifyContent="space-between"
        backgroundColor="rgba(87, 92, 112, 0.3)"
        padding="12px 16px"
        borderRadius="8px"
        alignItems="center"
        cursor="pointer"
        _hover={{
          backgroundColor: "rgba(87, 92, 112, 0.5)",
        }}
      >
        <Box>
          <Text variant="semibold">Максимальный прирост условных сделок</Text>
          <Text color="rgba(255, 255, 255, 0.6)">До окончания 2 дня</Text>
        </Box>
        <ArrowRight width="24px" height="24px" />
      </Flex>
      <Text size="body14/24" color="rgba(255, 255, 255, 0.6)">
        Ваш результат выше, чем у 80% участников
      </Text>
    </Flex>
  );
};
