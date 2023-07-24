import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, Fade, Text } from "@chakra-ui/react";

import { Empty, Leaders } from "../components";
import { DivisionLevel } from "../interfaces";
import {
  badgeFullLeadersGOSB,
  badgeFullLeadersTerb,
  badgeFullList,
} from "../models";

export const AwardFullListProfilesContainer = () => {
  const [searchParams] = useSearchParams();

  const searchParamsValue = searchParams.get("divisionLevel") as DivisionLevel;
  const isSearchParamValid =
    Object.values(DivisionLevel).includes(searchParamsValue);
  const divisionLevel = isSearchParamValid
    ? searchParamsValue
    : DivisionLevel["Страна"];

  const badgeLeaders = useMemo(() => {
    if (divisionLevel === DivisionLevel.Тербанк) {
      return badgeFullLeadersTerb;
    }
    if (divisionLevel === DivisionLevel.Подразделение) {
      return badgeFullLeadersGOSB;
    }

    return badgeFullList;
  }, [divisionLevel]);

  const divisionName = useMemo(() => {
    if (divisionLevel === DivisionLevel.Тербанк) {
      return `Пока никто в вашем тербанке не получил бейдж.${"\n"} Вы можете стать первым!`;
    }
    if (divisionLevel === DivisionLevel.Подразделение) {
      return `Пока никто в вашем подразделении не получил бейдж.${"\n"} Вы можете стать первым!`;
    }

    return `Пока никто не получил бейдж.${"\n"} Вы можете стать первым!`;
  }, [divisionLevel]);

  if (!badgeLeaders.badge.leaders.length) {
    return (
      <Empty>
        <Text
          size="sub18/24"
          color="rgba(255, 255, 255, 0.6)"
          textAlign="center"
          whiteSpace="pre-wrap"
        >
          {divisionName}
        </Text>
      </Empty>
    );
  }

  return (
    <Fade in>
      <Box mt="8px">
        <Text
          size="body14/24"
          color="rgba(255, 255, 255, 0.8)"
          pb="12px"
          boxShadow="rgba(255, 255, 255, 0.2) 0px 1px 0px"
        >
          {badgeLeaders.badge.contestants}
        </Text>
        {badgeLeaders.badge.leaders.map((item) => (
          <Leaders key={item.profileNumber} leader={item} />
        ))}
      </Box>
    </Fade>
  );
};
