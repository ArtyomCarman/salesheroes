import { Fade, Flex, Grid, Icon as ChakraIcon, Text } from "@chakra-ui/react";

import { Empty } from "../components";
import { DivisionLevel, Reward, Status } from "../interfaces";
import { ReactComponent as LightningIcon } from "../assets/icons/lightning.svg";
import { archiveTournamentId } from "../models";
import { useNavigate, useParams } from "react-router-dom";

export const TournamentArchiveResultContainer = () => {
  const navigate = useNavigate();
  const { tournamentId } = useParams();

  const goToRating = (divisionLevel: DivisionLevel) => () => {
    navigate(
      `/tournaments/${tournamentId}/leaders?divisionLevel=${divisionLevel}`
    );
  };
  return (
    <Fade in>
      <Flex
        direction="column"
        gap="24px"
        p={{
          base: "24px 16px",
          lg: "24px",
        }}
        borderRadius="16px"
        bgColor="rgba(87, 92, 112, 0.3)"
      >
        <Text color="white" size="h24/32" variant="semibold">
          Ваш результат
        </Text>
        {archiveTournamentId.rating.length !== 0 ? (
          <Grid
            gridTemplateColumns={{
              base: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap="16px"
          >
            {archiveTournamentId.rating.map((item) => (
              <Flex
                key={item.divisionLevelName}
                p="16px"
                borderRadius="8px"
                gap="8px"
                bgColor="rgba(87, 92, 112, 0.3)"
                direction="column"
                position="relative"
                onClick={goToRating(
                  DivisionLevel[
                    item.divisionLevelName as keyof typeof DivisionLevel
                  ]
                )}
                cursor="pointer"
                _hover={{ bgColor: "rgba(87, 92, 112, 0.5)" }}
                _active={{ bgColor: "rgba(87, 92, 112, 0.5)" }}
              >
                <Text variant="semibold">{item.divisionLevelName}</Text>
                <Text size="sub20/28" color="rgba(255, 255, 255, 0.6)">
                  <Text
                    as="span"
                    size="h24/32"
                    variant="semibold"
                    color={
                      // eslint-disable-next-line no-nested-ternary
                      item.reward
                        ? item.reward.icon === Reward.gold
                          ? "var(--primary-40)"
                          : "white"
                        : "inherit"
                    }
                  >
                    {item.placeInRating}
                  </Text>{" "}
                  из {item.contestants}
                </Text>
                {item.reward && (
                  <ChakraIcon
                    as={LightningIcon}
                    width="32px"
                    height="32px"
                    fill={
                      item.reward.icon === Reward.gold
                        ? "var(--primary-30)"
                        : "white"
                    }
                    position="absolute"
                    right="8px"
                    top="-8px"
                    filter="drop-shadow(0px 0px 8px rgba(255, 233, 187, 0.6))"
                  />
                )}
              </Flex>
            ))}
          </Grid>
        ) : archiveTournamentId.status === Status.end ||
          archiveTournamentId.status === Status.summarizing ? (
          <Empty>
            <Text
              size="sub18/24"
              color="rgba(255, 255, 255, 0.6)"
              textAlign="center"
            >
              Вы не участвовали в турнире
            </Text>
          </Empty>
        ) : (
          <Empty>
            <Text
              size="sub18/24"
              color="rgba(255, 255, 255, 0.6)"
              textAlign="center"
            >
              Вы пока не участвуете в турнире. Самое время начать
            </Text>
          </Empty>
        )}
      </Flex>
    </Fade>
  );
};
