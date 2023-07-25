import { FC, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Fade, Flex, Text } from "@chakra-ui/react";

import { BadgeIcon, AppTabs } from "../components";
import { ProfileTournamentsReward } from "../interfaces";
import { ReactComponent as DiamondIcon } from "../assets/icons/diamond.svg";
import { archiveTournamentId } from "../models";

const TournamentAwardBadge: FC<Props> = ({ item }) => {
  const navigate = useNavigate();
  const goToBadge = (id: string) => () => {
    navigate(`/awards/${id}`);
  };

  return (
    <Flex direction="column" gap="24px">
      <Text size="body14/20" color="rgba(255, 255, 255, 0.6)">
        {item.rewardRule}
      </Text>
      <Flex
        bgColor=" rgba(87, 92, 112, 0.3)"
        borderRadius="8px"
        direction="column"
        alignItems="center"
        p={{
          base: "16px 16px 24px",
          lg: "16px 24px 24px",
        }}
        onClick={goToBadge(item.badgeId)}
        cursor="pointer"
        _hover={{
          backgroundColor: "rgba(87, 92, 112, 0.5)",
        }}
      >
        <BadgeIcon imageId={item.imageId} width="176px" height="176px" />
        <Flex direction="column" gap="8px" alignItems="center">
          <Flex gap="4px">
            <Text
              size="sub18/24"
              variant="semibold"
              overflow="hidden"
              display="-webkit-box"
              sx={{
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "2",
                wordBreak: "break-word",
                textAlign: "center",
              }}
            >
              {item.hasNftMark && (
                <Text
                  as="span"
                  variant="semibold"
                  bgClip="text"
                  size="sub18/24"
                  color="transparent"
                  bgImage="linear-gradient(103.74deg, #875AC0 0.85%, #B675AF 47.94%, #875AC0 94.39%), linear-gradient(49.6deg, #875AC0 26.29%, #B675AF 50.86%, #875AC0 74.59%)"
                >
                  NFT{" "}
                </Text>
              )}
              {item.badgeName}
            </Text>
          </Flex>
          <Flex gap="8px">
            <Text size="sub18/24" color="white">
              {item.rewardCrystalCount}
            </Text>
            <DiamondIcon width="24px" height="24px" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export const TournamentArchiveAwardContainer = () => {
  const tabs = useMemo(
    () =>
      archiveTournamentId?.rewards?.map((item) => ({
        label: item.divisionLevelName,
        component: <TournamentAwardBadge item={item} />,
      })) || [],
    []
  );

  return (
    <Fade in>
      <Flex
        direction="column"
        gap="16px"
        p={{
          base: "24px 16px",
          lg: "24px",
        }}
        borderRadius="16px"
        bgColor="rgba(87, 92, 112, 0.3)"
      >
        <Text size="h24/32" variant="semibold">
          Награда
        </Text>
        <AppTabs tabs={tabs} />
      </Flex>
    </Fade>
  );
};

interface Props {
  item: ProfileTournamentsReward;
}
