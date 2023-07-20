import { FC } from "react";
import {Link, useParams} from "react-router-dom";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";

import {IDivisions, IProfileBody} from "../interfaces";
import { Empty } from "./Empty";
import {leaders} from "../models/tournamen-leaders";

export const Ratings: FC<Props> = ({ divisions, timePeriod, profileId }) => {
  // const navigate = useNavigate();
  // const goToRating = (divisionLevel: keyof typeof DivisionLevel) => () => {
  //   if (timePeriod === "Текущий квартал") {
  //     navigate(
  //       `/rating?divisionLevel=${DivisionLevel[divisionLevel]}&timePeriod=${TimePeriod["Текущий квартал"]}`
  //     );
  //   }
  //   if (timePeriod === "За всё время") {
  //     navigate(
  //       `/rating?divisionLevel=${DivisionLevel[divisionLevel]}&timePeriod=${TimePeriod["За всё время"]}`
  //     );
  //   }
  // };
  const { employeeNumber } = useParams()

  if (divisions.length === 0 && timePeriod === "За всё время") {
    return (
      <Empty>
        {profileId ? (
          <Text
            size="sub18/24"
            color="rgba(255, 255, 255, 0.6)"
            textAlign="center"
            whiteSpace="pre-wrap"
          >
            Пользователя пока нет в общем рейтинге участников.
          </Text>
        ) : (
          <Text
            size="sub18/24"
            color="rgba(255, 255, 255, 0.6)"
            textAlign="center"
            whiteSpace="pre-wrap"
          >
            Вас пока нет в общем рейтинге участников.{"\n"} Получите ваши первые{" "}
            <Box
              as="span"
              color="rgba(255, 255, 255, 0.8)"
              fontWeight="600"
              _hover={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "4px",
              }}
              _active={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "4px",
              }}
            >
              <Link to="/awards">награды</Link>
            </Box>
            !
          </Text>
        )}
      </Empty>
    );
  }

  if (divisions.length === 0 && timePeriod === "Текущий квартал") {
    return (
      <Empty>
        {profileId ? (
          <Text
            size="sub18/24"
            color="rgba(255, 255, 255, 0.6)"
            textAlign="center"
            whiteSpace="pre-wrap"
          >
            Пользователя пока нет в рейтинге участников за текущий квартал.
          </Text>
        ) : (
          <Text
            size="sub18/24"
            color="rgba(255, 255, 255, 0.6)"
            textAlign="center"
            whiteSpace="pre-wrap"
          >
            Вас пока нет в рейтинге участников за квартал.{"\n"} Получите ваши
            первые{" "}
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
          </Text>
        )}
      </Empty>
    );
  }

  return (
    <SimpleGrid
      gap="16px"
      gridTemplateColumns={{
        base: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
    >
      {divisions.map((item) => (
        <Flex
          key={item.divisionName}
          direction="column"
          gap="8px"
          bgColor="rgba(87, 92, 112, 0.3)"
          borderRadius="8px"
          p="16px"
          pos="relative"
          cursor="pointer"
          _hover={{ bgColor: "rgba(87, 92, 112, 0.5)" }}
          _active={{ bgColor: "rgba(87, 92, 112, 0.5)" }}
          // onClick={goToRating(item.divisionName)}
        >
          <Text variant="semibold">{item.divisionName}</Text>
          <Text color="rgba(255, 255, 255, 0.6)" size="sub18/24">
            <Text as="span" color="white" size="sub20/28" variant="semibold">
              {item.placeInRating}
            </Text>{" "}
            из {item.contestants}
          </Text>
        </Flex>
      ))}
    </SimpleGrid>
  );
};

interface Props {
  divisions: IDivisions[];
  timePeriod?: string;
  profileId?: string;
}
