import { FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  keyframes,
  Text,
  Tooltip,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

import { IBagdes } from "../interfaces";
import { ReactComponent as InfoIcon } from "../assets/icons/info.svg";
import { AppTooltip } from "./AppTooltip";
import { BadgeIcon } from "./BadgeIcon";
import { ProgressBar } from "./ProgressBar";

export const AwardsListItem: FC<Props> = ({ badge, status }) => {
  const navigate = useNavigate();
  const prefersReducedMotion = usePrefersReducedMotion();
  const gradient = keyframes`
		to {
			background-position: 200% center;
		}
	`;
  const animation = prefersReducedMotion
    ? undefined
    : `${gradient} 3s ease infinite`;

  const goToBadge = () => {
    navigate(`/awards/${badge.badgeId}`);
  };

  return (
    <Box
      key={badge.badgeId}
      bgColor="rgba(87, 92, 112, 0.3)"
      borderRadius="16px"
      p={{
        base: "24px 16px",
        lg: "16px 24px 24px",
      }}
      minW="0"
      onClick={goToBadge}
      cursor="pointer"
      sx={{
        "@media (pointer: fine)": {
          "&:hover": {
            bgColor: "rgba(87, 92, 112, 0.5)",
          },
        },
      }}
      _active={{
        bgColor: "rgba(87, 92, 112, 0.5)",
      }}
      position="relative"
    >
      <Flex
        direction="column"
        alignItems="center"
        h="100%"
        justifyContent="space-between"
      >
        <Box textAlign="center">
          {badge.updateTooltip && status === "ALL" && (
            <AppTooltip
              text={badge.updateTooltip}
              position="absolute"
              zIndex="1"
              top={{ base: "16px", lg: "24px" }}
              right={{ base: "16px", lg: "24px" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              _before={{
                display: {
                  base: "inline-block",
                  lg: "none",
                },
                content: "''",
                position: "absolute",
                width: "48px",
                height: "48px",
              }}
            >
              <InfoIcon width="16px" />
            </AppTooltip>
          )}
          <Flex
            display="inline-flex"
            position="relative"
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
                    borderRadius: "50%",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1,
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
          <Tooltip
            label={badge.badgeName}
            placement="top"
            backgroundColor="rgba(87, 92, 112, 1)"
            color="rgba(255, 255, 255, 1)"
          >
            <Box minWidth="0px">
              <Text
                textOverflow="ellipsis"
                overflow="hidden"
                variant="medium"
                title={badge.badgeName}
                textAlign="center"
                size="body16/24"
                display="-webkit-box"
                sx={{
                  "-webkit-box-orient": "vertical",
                  "-webkit-line-clamp": "2",
                }}
              >
                {badge.hasNftMark && (
                  <Text
                    display="inline-block"
                    marginRight="4px"
                    size="body16/24"
                    variant="semibold"
                    bgClip="text"
                    color="transparent"
                    animation={animation}
                    backgroundSize="200% auto"
                    bgImage="linear-gradient(103.74deg, #875AC0 0.85%, #B675AF 47.94%, #875AC0 94.39%), linear-gradient(49.6deg, #875AC0 26.29%, #B675AF 50.86%, #875AC0 74.59%)"
                  >
                    NFT
                  </Text>
                )}
                {badge.badgeName}
              </Text>
            </Box>
          </Tooltip>
        </Box>
        <Flex direction="column" w="100%" gap="8px">
          {badge.progressBarValue && (
            <Box py="4px">
              <ProgressBar
                value={badge.progressBarValue}
                color="light-blue-50"
              />
            </Box>
          )}
          {badge.receivingDate && (
            <Text
              textAlign="center"
              color="rgba(255, 255, 255, 0.6)"
              size="body14/20"
            >
              {badge.receivingDate}
            </Text>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

interface Props {
  badge: IBagdes;
  status: "ALL" | "EARNED";
}
