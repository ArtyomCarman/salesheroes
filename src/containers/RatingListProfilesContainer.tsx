import { FC, useMemo } from "react";
import { Link } from "react-router-dom";
import { Box, Fade, SimpleGrid, Text } from "@chakra-ui/react";

import { Empty, Leaders } from "../components";
import { DivisionLevel, TimePeriod } from "../interfaces";
import {
  ratingList,
  ratingListTB,
  ratingListGOSB,
  ratingListQuarter,
  ratingListTBQuarter,
  ratingListGOSBQuarter,
} from "../models";

interface Props {
  divisionLevel: DivisionLevel;
  timePeriod: TimePeriod;
}

export const RatingListProfilesContainer: FC<Props> = ({
  divisionLevel,
  timePeriod,
}) => {
  const rating = useMemo(() => {
    if (
      divisionLevel === DivisionLevel.Тербанк &&
      timePeriod === TimePeriod["За всё время"]
    ) {
      return ratingListTB;
    }
    if (
      divisionLevel === DivisionLevel.Подразделение &&
      timePeriod === TimePeriod["За всё время"]
    ) {
      return ratingListGOSB;
    }
    if (
      divisionLevel === DivisionLevel.Страна &&
      timePeriod === TimePeriod["Текущий квартал"]
    ) {
      return ratingListQuarter;
    }
    if (
      divisionLevel === DivisionLevel.Тербанк &&
      timePeriod === TimePeriod["Текущий квартал"]
    ) {
      return ratingListTBQuarter;
    }
    if (
      divisionLevel === DivisionLevel.Подразделение &&
      timePeriod === TimePeriod["Текущий квартал"]
    ) {
      return ratingListGOSBQuarter;
    }

    return ratingList;
  }, [divisionLevel, timePeriod]);

  if (rating.leaders.length === 0) {
    return (
      <Empty>
        <Text
          size="sub18/24"
          color="rgba(255, 255, 255, 0.6)"
          textAlign="center"
          whiteSpace="pre-wrap"
        >
          {divisionLevel === DivisionLevel.Тербанк
            ? "Пока нет участников рейтинга в вашем тербанке."
            : "Пока нет участников рейтинга в вашем подразделении."}
          {"\n"}Получите{" "}
          <Box
            as="span"
            color="rgba(255, 255, 255, 0.8)"
            fontWeight="600"
            _hover={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "4px",
              borderBottom: "none",
            }}
            _active={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "4px",
              borderBottom: "none",
            }}
            borderBottom="1px dashed rgba(255, 255, 255, 0.8)"
          >
            <Link to="/awards">награды</Link>
          </Box>{" "}
          и станьте первым!
        </Text>
      </Empty>
    );
  }

  return (
    <Fade in>
      <Box>
        <SimpleGrid
          padding="16px 16px 12px"
          margin="0 -16px"
          gridTemplateColumns="auto auto"
          justifyContent="space-between"
          boxShadow="0px 1px 0px rgba(255, 255, 255, 0.2)"
          position="sticky"
          top="112px"
          bgColor="black"
          zIndex="2"
        >
          <Text size="body14/24" color="rgba(255, 255, 255, 0.8)">
            {rating.contestants}
          </Text>
          <Text
            size="body14/24"
            color="rgba(255, 255, 255, 0.8)"
            pr={{
              base: "0",
              lg: "56px",
            }}
          >
            Кристаллы
          </Text>
        </SimpleGrid>
        {rating.leaders
          .sort((profile1, profile2) =>
            profile1.placeInRating > profile2.placeInRating ? 1 : -1
          )
          .map((item) => (
            <Leaders key={item.profileNumber} leader={item} />
          ))}
      </Box>
    </Fade>
  );
};
