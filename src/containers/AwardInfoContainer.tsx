import {
  Box,
  Fade,
  Flex,
  SimpleGrid,
  Text,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

import { BadgeIcon, InfoBlock, ProgressBar } from "../components";
import { gradient } from "../utils";
import { ReactComponent as DiamondIcon } from "../assets/icons/diamond.svg";
import { badgeID } from "../models";
import { useParams } from "react-router-dom";
import { IProfileBadgesIdBody } from "../interfaces";

export const AwardInfoContainer = () => {
  const { badgeId } = useParams();
  const badge = badgeID.find(
    (item) => item.badgeId === badgeId
  ) as IProfileBadgesIdBody;

  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = (delay = 0) =>
    prefersReducedMotion ? undefined : `${gradient} 8s ease ${delay}s infinite`;

  return (
    <Fade in>
      <SimpleGrid gap="24px">
        {badge.updateTooltip && <InfoBlock text={badge.updateTooltip} />}
        <Box
          position="relative"
          p={{
            base: "24px 16px",
            lg: "24px",
          }}
          borderRadius="16px"
          bgColor="rgba(87, 92, 112, 0.3)"
          overflow="hidden"
          _before={{
            content: "''",
            position: "absolute",
            width: "512px",
            height: "512px",
            top: "32px",
            left: "-194px",
            background: `${
              badge.hasNftMark
                ? "radial-gradient(66.32% 66.32% at 50% 50%, rgba(67, 103, 206, 0.9) 0%, rgba(0, 0, 0, 0) 100%)"
                : "radial-gradient(66.32% 66.32% at 50% 50%, rgba(80, 177, 247, 0.9) 0%, rgba(52, 98, 136, 0) 100%)"
            }`,
            borderRadius: "50%",
            filter: "blur(76px)",
            animation: `${animation(3)}`,
          }}
          _after={{
            content: "''",
            position: "absolute",
            width: "512px",
            height: "512px",
            background: `${
              badge.hasNftMark
                ? "radial-gradient(66.32% 66.32% at 50% 50%, rgba(135, 90, 192, 0.7) 0%, rgba(0, 0, 0, 0) 100%)"
                : "radial-gradient(66.32% 66.32% at 50% 50%, rgba(62, 96, 191, 0.7) 0%, rgba(42, 66, 134, 0) 100%)"
            }`,
            borderRadius: "50%",
            bottom: "-40px",
            left: "180px",
            filter: "blur(76px)",
            animation: `${animation()}`,
          }}
        >
          <SimpleGrid
            gap="0 24px"
            gridTemplateColumns={{
              base: "auto",
              lg: "176px 1fr",
            }}
            gridTemplateRows={{
              base: "176px 1fr",
            }}
            alignItems={{ base: "initial", lg: "center" }}
            display={{
              base: "flex",
              lg: "grid",
            }}
            flexDirection="column"
            position="relative"
            zIndex="1"
          >
            <Flex
              position="relative"
              alignSelf="center"
              padding="12px"
              _before={
                badge.badgeAmount > 1
                  ? {
                      content: `'${badge.badgeAmount}'`,
                      position: "absolute",
                      bottom: "16px",
                      left: "24px",
                      bgColor: "rgba(255, 255, 255, 0.8)",
                      boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "black",
                      display: "flex",
                      width: "24px",
                      height: "24px",
                      zIndex: 1,
                      borderRadius: "50%",
                      alignItems: "center",
                      justifyContent: "center",
                    }
                  : undefined
              }
            >
              <BadgeIcon
                imageId={badge.imageId}
                isActive={badge.imageIsActive}
                width="152px"
                height="152px"
              />
            </Flex>
            <Box>
              <Flex
                gap="4px"
                mb="16px"
                justifyContent={{ base: "center", lg: "flex-start" }}
              >
                <Text
                  variant="semibold"
                  size="body16/24"
                  textAlign={{ base: "center", lg: "initial" }}
                >
                  {badge.hasNftMark && (
                    <Text
                      as="span"
                      variant="semibold"
                      bgClip="text"
                      size="body16/24"
                      color="transparent"
                      bgImage="linear-gradient(103.74deg, #875AC0 0.85%, #B675AF 47.94%, #875AC0 94.39%), linear-gradient(49.6deg, #875AC0 26.29%, #B675AF 50.86%, #875AC0 74.59%)"
                    >
                      NFT{" "}
                    </Text>
                  )}
                  {badge.badgeName}
                </Text>
              </Flex>

              <Flex
                gap="8px"
                mb="24px"
                justifyContent={{ base: "center", lg: "flex-start" }}
              >
                <Text size="sub18/24">{badge.rewardCrystalCount}</Text>
                <DiamondIcon width="24px" height="24px" />
              </Flex>
              {badge.progressBarValue && (
                <>
                  <Flex justifyContent="space-between" mb="8px" gap="24px">
                    <Text
                      size="body14/24"
                      color="rgba(255, 255, 255, 0.8)"
                      whiteSpace="nowrap"
                    >
                      {badge?.progress?.current}
                    </Text>
                    <Text
                      size="body14/24"
                      color="rgba(255, 255, 255, 0.6)"
                      whiteSpace="nowrap"
                      overflow="hidden"
                      textOverflow="ellipsis"
                    >
                      {badge?.progress?.condition}
                    </Text>
                  </Flex>
                  <ProgressBar
                    value={badge.progressBarValue}
                    color="light-blue-50"
                  />
                </>
              )}
              {badge.receivingDate && (
                <Text
                  size="body14/24"
                  color="rgba(255, 255, 255, 0.6)"
                  textAlign={{
                    base: "center",
                    lg: "left",
                  }}
                >
                  Получен {badge.receivingDate}
                </Text>
              )}
            </Box>
          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </Fade>
  );
};
