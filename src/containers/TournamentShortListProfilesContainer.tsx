import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Flex, Show, SimpleGrid, Text } from "@chakra-ui/react";

import {
  ButtonComponent,
  Empty,
  PlaceInRating,
  ProfileAvatar,
} from "../components";
import { ReactComponent as ArrowRightIcon } from "../assets/icons/arrow-right.svg";
import { archiveTournamentId } from "../models";
import {
  DivisionLevel,
  ITournamentIdProfilesShortListBody,
  Status,
} from "../interfaces";

export const TournamentShortListProfilesContainer: FC<Props> = ({
  divisionLevel,
}) => {
  const navigate = useNavigate();
  const { tournamentId } = useParams();

  const goToFullList = () =>
    navigate(`/tournaments/${tournamentId}/leaders?divisionLevel=123`);

  const goToProfileId = (id: string) => () => {
    navigate(`/profile/${id}`);
  };

  if (divisionLevel.leaders.length === 0) {
    if (
      archiveTournamentId.status === Status.end ||
      archiveTournamentId.status === Status.canceled ||
      archiveTournamentId.status === Status.summarizing
    ) {
      return (
        <Flex direction="column" gap="12px">
          <Box>
            <Empty>
              <Text
                size="sub18/24"
                color="rgba(255, 255, 255, 0.6)"
                textAlign="center"
                whiteSpace="pre-wrap"
              >
                В турнире не было участников
              </Text>
            </Empty>
          </Box>
        </Flex>
      );
    }

    return (
      <Flex direction="column" gap="12px">
        <Box>
          <Empty>
            <Text
              size="sub18/24"
              color="rgba(255, 255, 255, 0.6)"
              textAlign="center"
              whiteSpace="pre-wrap"
            >
              Пока в вашем{" "}
              {divisionLevel.divisionLevelName === DivisionLevel.Тербанк
                ? "тербанке"
                : "ГОСБ"}{" "}
              нет участников турнира. Вы можете стать первым!
            </Text>
          </Empty>
        </Box>
      </Flex>
    );
  }

  const numberOfContestants = Number(
    divisionLevel.contestants.replace(/[^0-9]/g, "")
  );

  return (
    <Flex direction="column" gap="12px">
      <Box>
        <SimpleGrid
          gridTemplateColumns="auto auto"
          justifyContent="space-between"
          boxShadow="0px 1px 0px rgba(255, 255, 255, 0.2)"
          pb="12px"
        >
          <Text size="body14/24" color="rgba(255, 255, 255, 0.8)">
            {divisionLevel.contestants}
          </Text>
          <Text
            size="body14/24"
            color="rgba(255, 255, 255, 0.8)"
            pr={{ base: "0", lg: "56px" }}
          >
            Сумма УС
          </Text>
        </SimpleGrid>
        {divisionLevel.leaders.map((item, index) => (
          <Flex
            key={item.profileNumber}
            gap="8px"
            padding="12px 0 12px"
            border="2px solid transparent"
            cursor="pointer"
            sx={
              item.isMarked
                ? {
                    bgColor: "rgba(87, 92, 112, 0.3)",
                    margin: "0 -16px",
                    px: "16px",
                    borderColor: "rgba(255, 191, 62, 0.6)",
                    borderRadius: "8px",
                    _notLast: { boxShadow: "none" },
                    "@media (pointer: fine)": {
                      "&:hover": { backgroundColor: "rgba(87, 92, 112, 0.5)" },
                    },
                  }
                : {
                    "@media (pointer: fine)": {
                      "&:hover": {
                        backgroundColor: "rgba(46, 48, 58, 1)",
                        margin: "0 -16px",
                        px: "16px",
                        borderRadius: "8px",
                        _notLast: { boxShadow: "none" },
                      },
                    },
                  }
            }
            _active={
              item.isMarked
                ? {
                    backgroundColor: "rgba(87, 92, 112, 0.5)",
                  }
                : {
                    backgroundColor: "rgba(46, 48, 58, 1)",
                    margin: "0 -16px",
                    px: "16px",
                    borderRadius: "8px",
                    _notLast: { boxShadow: "none" },
                  }
            }
            _notLast={{
              boxShadow: "28px 29px 0px -28px rgb(255 255 255 / 20%)",
            }}
            onClick={goToProfileId(item.profileNumber)}
          >
            <PlaceInRating
              reward={item.reward}
              placeInRating={index + 1}
              hasReward={item?.hasReward}
            />
            <ProfileAvatar profile={item} size="md" />
            <Flex flexGrow={1} alignItems="center">
              <Box flexGrow={1}>
                <Text variant="semibold">{`${item.firstName} ${item.lastName}`}</Text>
                <Text size="body14/24" color="rgba(255, 255, 255, 0.8)">
                  {item.terDivisionName}
                </Text>
              </Box>
              <Text mr="24px">{item.indicatorValue}</Text>
              <Show above="md">
                <ArrowRightIcon width="24px" height="24px" />
              </Show>
            </Flex>
          </Flex>
        ))}
      </Box>
      {numberOfContestants > divisionLevel.leaders.length ? (
        <ButtonComponent text="Показать всех" onClick={goToFullList} />
      ) : null}
    </Flex>
  );
};

interface Props {
  divisionLevel: ITournamentIdProfilesShortListBody;
}
