import { IProgressAwards } from "../interfaces";
import { FC } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { BadgeIcon } from "../components";
import { ReactComponent as DiamondIcon } from "../assets/icons/diamond.svg";

interface Props {
  award: IProgressAwards;
}
export const ProgressAwardContainer: FC<Props> = ({ award }) => {
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
      <Text
        size="sub20/28"
        textAlign="center"
        color="rgba(255, 255, 255, 0.8)"
        zIndex="1"
        dangerouslySetInnerHTML={{ __html: award.text }}
      />
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
