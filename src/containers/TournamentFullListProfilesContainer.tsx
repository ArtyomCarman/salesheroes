import { Box, Fade, SimpleGrid, Text } from "@chakra-ui/react";

import { Empty, Leaders } from "../components";
import { FC, useMemo } from "react";
import { DivisionLevel } from "../interfaces";
import {
  tournamentFullListCountry,
  tournamentFullListCountryT2,
  tournamentFullListGOSBT2,
  tournamentFullListTerb,
  tournamentFullListGOSB,
  tournamentFullListTerbT2,
} from "../models";
import { useParams } from "react-router-dom";

interface Props {
  divisionLevel: DivisionLevel;
}

export const TournamentFullListProfilesContainer: FC<Props> = ({
  divisionLevel,
}) => {
  const { tournamentId } = useParams();
  const leaders = useMemo(() => {
    if (divisionLevel === DivisionLevel.Тербанк) {
      return tournamentId === "T2"
        ? tournamentFullListTerbT2
        : tournamentFullListTerb;
    }
    if (divisionLevel === DivisionLevel.Кластер) {
      return tournamentId === "T2"
        ? tournamentFullListTerbT2
        : tournamentFullListTerb;
    }
    if (divisionLevel === DivisionLevel.Подразделение) {
      return tournamentId === "T2"
        ? tournamentFullListGOSBT2
        : tournamentFullListGOSB;
    }
    // if countru
    return tournamentId === "T2"
      ? tournamentFullListCountryT2
      : tournamentFullListCountry;
  }, [divisionLevel, tournamentId]);

  if (!leaders.leaders.length) {
    return (
      <Empty>
        <Text
          size="sub18/24"
          color="rgba(255, 255, 255, 0.6)"
          textAlign="center"
          whiteSpace="pre-wrap"
        >
          Пока в вашем{" "}
          {divisionLevel === DivisionLevel.Тербанк ? "тербанке" : "ГОСБ"} нет
          участников турнира. Вы можете стать первым!
        </Text>
      </Empty>
    );
  }

  return (
    <Fade in>
      <Box>
        <SimpleGrid
          padding="16px 16px 0"
          margin="0 -16px"
          gridTemplateColumns="auto auto"
          justifyContent="space-between"
          boxShadow="0px 1px 0px rgba(255, 255, 255, 0.2)"
          position="sticky"
          top="69px"
          bgColor="black"
          zIndex="2"
        >
          <Text size="body14/20" color="rgba(255, 255, 255, 0.8)" mb="12px">
            {leaders.contestants}
          </Text>
          <Text
            size="body14/20"
            color="rgba(255, 255, 255, 0.8)"
            mb="12px"
            pr={{ base: "0", lg: "56px" }}
          >
            Сумма УС
          </Text>
        </SimpleGrid>
        {leaders.leaders.map((item) => (
          <Leaders key={item.profileNumber} leader={item} />
        ))}
      </Box>
    </Fade>
  );
};
