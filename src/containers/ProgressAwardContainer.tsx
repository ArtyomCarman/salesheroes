import { IProgressAwards } from "../interfaces";
import { FC } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BadgeIcon } from "../components";
import { ReactComponent as DiamondIcon } from "../assets/icons/diamond.svg";
import { useNavigate } from "react-router-dom";

interface Props {
  award: IProgressAwards;
}
export const ProgressAwardContainer: FC<Props> = ({ award }) => {
  const navigate = useNavigate();
  const goToBadge = (id: string) => () => {
    navigate(`/awards/${id}`);
  };
  return (
    <Flex
      direction="column"
      gap="24px"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
      backgroundColor="rgba(87, 92, 112, 0.3)"
      borderRadius="16px"
      padding="24px"
      cursor="pointer"
      _before={{
        content: "''",
        position: "absolute",
        width: "512px",
        height: "512px",
        bottom: "310px",
        filter: "blur(76px)",
        background: `radial-gradient(66.32% 66.32% at 50% 10%, ${award.award.colorCode.primary} 30.03%, ${award.award.colorCode.secondary} 100%)`,
        borderRadius: "50%",
      }}
      onClick={goToBadge(award.award.awardId)}
    >
      <Text size="sub20/28" color="rgba(255, 255, 255, 0.8)" zIndex="1">
        {award?.infoText}
      </Text>
      <Flex direction="column" gap="8px" alignItems="center">
        <BadgeIcon
          imageId={award.award.awardName}
          width="176px"
          height="176px"
          isActive={!award?.progressBarValue}
        />
        {!award?.progressBarValue && (
          <Flex
            direction="row"
            gap="8px"
            border="1px solid rgba(255, 255, 255, 0.2)"
            borderRadius="80px"
            padding="8px 16px"
            width="max-content"
          >
            <Text size="sub18/24">{award.crystalEarned}</Text>
            <DiamondIcon width="24px" height="24px" />
          </Flex>
        )}
      </Flex>
      <Flex direction="column" gap="12px" alignItems="center">
        <Text
          size="sub20/28"
          textAlign="center"
          color="rgba(255, 255, 255, 0.8)"
          zIndex="1"
          dangerouslySetInnerHTML={{ __html: award.text }}
        />
        {award.progressBarValue && (
          <Flex position="relative" alignItems="center">
            <Box
              as="progress"
              value={award.progressBarValue}
              max={100}
              height="12px"
              width="230px"
              sx={{
                "&::-webkit-progress-bar": {
                  borderRadius: "100px",
                  bgColor: "rgba(255, 255, 255, 0.2)",
                },
                "&::-webkit-progress-value": {
                  borderRadius: "100px",
                  background: "var(--blue-30)",
                },
              }}
            />
            <Flex
              position="absolute"
              padding="2px 8px"
              gap="4px"
              border="2px solid rgb(29, 37, 50)"
              borderRadius="100px"
              left="60%"
              background="var(--blue-30)"
            >
              <Text
                size="caption12/16"
                variant="semibold"
                color="rgb(29, 37, 50)"
              >
                +27 090
              </Text>
            </Flex>
          </Flex>
        )}
      </Flex>
      <Text
        size="caption14/24"
        color="rgba(255, 255, 255, 0.6)"
        textAlign="center"
      >
        {award?.leftToEarnText}
      </Text>
    </Flex>
  );
};
