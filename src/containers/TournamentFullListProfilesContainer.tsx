import { Box, Fade, SimpleGrid, Text } from "@chakra-ui/react";

import {Empty, Leaders} from "../components";
import {FC, useMemo} from "react";
import {DivisionLevel} from "../interfaces";
import {
  tournamentFullListCountry,
  tournamentFullListCountryT2,
  tournamentFullListGOSBT2,
  tournamentFullListTerb,
  tournamentFullListGOSB, tournamentFullListTerbT2,
} from "../models";
import {useParams} from "react-router-dom";

interface Props {
  divisionLevel: DivisionLevel;
}

export const TournamentFullListProfilesContainer: FC<Props> = ({ divisionLevel }) => {
  const { tournamentId } = useParams();
  const leaders = useMemo(() => {
    if (divisionLevel === DivisionLevel.Тербанк && tournamentId !== 'T2') {
      return tournamentFullListTerb
    }
    if (divisionLevel === DivisionLevel.Кластер && tournamentId !== 'T2') {
      return tournamentFullListTerb
    }
    if (divisionLevel === DivisionLevel.Подразделение && tournamentId !== 'T2') {
      return tournamentFullListGOSB
    }
    if (tournamentId === 'T2' && divisionLevel === DivisionLevel.Тербанк) {
      return tournamentFullListTerbT2
    }
    if (tournamentId === 'T2' && divisionLevel === DivisionLevel.Подразделение) {
      return tournamentFullListGOSBT2
    }if (tournamentId === 'T2' && divisionLevel === DivisionLevel.Страна) {
      return tournamentFullListCountryT2
    }

    return tournamentFullListCountry;
  }, [divisionLevel]);

  if (!leaders.leaders.length) {
    return (<Empty>
      <Text size="sub18/24"
            color="rgba(255, 255, 255, 0.6)"
            textAlign="center"
            whiteSpace="pre-wrap">Пока в вашем {divisionLevel === DivisionLevel.Тербанк ? 'тербанке' : 'ГОСБ'} нет участников турнира. Вы можете стать первым!</Text>
    </Empty>)
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
          <Leaders key={item.employeeNumber} leader={item} />
        ))}
      </Box>
    </Fade>
  );
}
