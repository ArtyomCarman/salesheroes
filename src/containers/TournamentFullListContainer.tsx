import {useParams, useSearchParams} from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";

import { Filters } from "../components";
import { DivisionLevel } from "../interfaces";
import { TournamentFullListProfilesContainer } from "./TournamentFullListProfilesContainer";

export const TournamentFullListContainer = () => {
  const [searchParams] = useSearchParams();
  const searchParamsValue = searchParams.get("divisionLevel") as DivisionLevel;
  const { tournamentId } = useParams()
  const filters = [
    {
      label: "Страна",
      value: DivisionLevel["Страна"],
    },
    {
      label: tournamentId === 'T3' ? 'Кластер' :  "Тербанк",
      value: tournamentId === 'T3' ? DivisionLevel["Кластер"] :  DivisionLevel["Тербанк"],
    },
    {
      label: tournamentId === 'T3' ? 'Аппарат ТБ' :  "ГОСБ",
      value: DivisionLevel["Подразделение"],
    },
  ];

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
          Лидеры турнира
        </Text>
        <Filters
          filters={filters}
          searchParam="divisionLevel"
          backgroundColor="black"
          left="0"
          right="0"
          position="sticky"
          top="0px"
          zIndex="2"
          margin="0 -16px"
          width="auto"
          padding="16px"
        />
        <TournamentFullListProfilesContainer
          key={searchParamsValue}
          divisionLevel={searchParamsValue}
        />
      </Flex>
    </Box>
  );
};
