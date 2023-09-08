import { FC, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Show, Text } from "@chakra-ui/react";

import { ILeader } from "../interfaces";
import { ReactComponent as ArrowRightIcon } from "../assets/icons/arrow-right.svg";
import { ReactComponent as DiamondIcon } from "../assets/icons/diamond.svg";
import { PlaceInRating } from "./PlaceInRating";
import { ProfileAvatar } from "./ProfileAvatar";

interface Props {
  leader: ILeader;
  index?: number;
}

export const Leaders: FC<Props> = ({ leader, index }) => {
  const navigate = useNavigate();

  const goToProfileId = (id: string) => () => {
    navigate(`/profile/${id}`);
  };

  const top = useMemo(() => {
    if (leader.placeInRating && leader.crystalsEarned) return "158px";
    if (leader.placeInRating) return "117px";

    return "69px";
  }, [leader]);

  return (
    <Flex
      gap="8px"
      pt="12px"
      border="2px solid transparent"
      cursor="pointer"
      role="group"
      sx={
        leader.isMarked
          ? {
              bgColor: "rgb(27 28 33)",
              margin: "0 -16px",
              px: "16px",
              borderColor: "rgba(255, 191, 62, 0.6)",
              borderRadius: "8px",
              position: "sticky",
              bottom: leader.placeInRating && "0",
              top,
              zIndex: 2,
              _notLast: { boxShadow: "none" },
              "@media (pointer: fine)": {
                "&:hover": { backgroundColor: "rgba(44, 46, 56, 1)" },
              },
            }
          : {
              "@media (pointer: fine)": {
                "&:hover": {
                  backgroundColor: "rgba(27, 28, 33, 1)",
                  margin: "0 -16px",
                  px: "16px",
                  borderRadius: "8px",
                  _notLast: { boxShadow: "none" },
                },
              },
            }
      }
      _active={
        leader.isMarked
          ? {
              backgroundColor: "rgba(44, 46, 56, 1)",
            }
          : {
              backgroundColor: "rgba(27, 28, 33, 1)",
              margin: "0 -16px",
              px: "16px",
              borderRadius: "8px",
              _notLast: { boxShadow: "none" },
            }
      }
      _notLast={{ boxShadow: "28px 29px 0px -28px rgb(255 255 255 / 20%)" }}
      onClick={goToProfileId(leader.profileNumber)}
    >
      <Flex gap="8px">
        <PlaceInRating
          reward={leader.reward}
          placeInRating={
            index || index === 0 ? index + 1 : leader.placeInRating
          }
          crystallEarned={leader.crystalsEarned}
          hasReward={leader.hasReward}
        />
        <ProfileAvatar profile={leader} size="md" />
      </Flex>
      <Flex flexGrow={1} alignItems="center" pb="11px">
        <Box flexGrow={1}>
          <Text variant="semibold">
            {leader.firstName} {leader.lastName}
          </Text>
          <Text size="body14/24" color="rgba(255, 255, 255, 0.8)">
            {leader.terDivisionName}
          </Text>
        </Box>
        {leader.indicatorValue ? (
          <Text mr={{ base: "0", lg: "24px" }}>{leader.indicatorValue}</Text>
        ) : null}
        {leader.crystalsEarned ? (
          <Flex mr={{ base: "0", lg: "24px" }} gap="8px">
            <Text>{leader.crystalsEarned}</Text>
            <DiamondIcon width="24px" height="24px" />
          </Flex>
        ) : null}
        <Show above="md">
          <ArrowRightIcon width="24px" height="24px" />
        </Show>
      </Flex>
    </Flex>
  );
};
