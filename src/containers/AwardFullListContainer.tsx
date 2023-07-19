import { useSearchParams } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";

import { Filters } from "../components";
import { DivisionLevel } from "../interfaces";
import { AwardFullListProfilesContainer } from "./AwardFullListProfilesContainer";

export const AwardFullListContainer = () => {
  const [searchParams] = useSearchParams();
  const filters = [
    {
      label: "Страна",
      value: DivisionLevel["Страна"],
    },
    {
      label: "Тербанк",
      value: DivisionLevel["Тербанк"],
    },
    {
      label: "ГОСБ",
      value: DivisionLevel["Подразделение"],
    },
  ];
  const searchParamsValue = searchParams.get("divisionLevel") as DivisionLevel;

  return (
    <Box>
      <Flex
        direction="column"
        gap="8px"
        paddingX={{
          base: "16px",
          lg: "0",
        }}
      >
        <Text size="h30/48" variant="medium">
          Получили бейдж
        </Text>
        <Filters
          filters={filters}
          searchParam="divisionLevel"
          position="sticky"
          top="0px"
          backgroundColor="black"
          left="0"
          right="0"
          zIndex="2"
          margin="0 -16px"
          width="auto"
          padding="16px"
        />
        <AwardFullListProfilesContainer key={searchParamsValue} />
      </Flex>
    </Box>
  );
};
