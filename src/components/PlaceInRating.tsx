import { FC } from "react";
import { Box, Text, Tooltip } from "@chakra-ui/react";

import { IRewardProfiles, Reward } from "../interfaces";
import { ReactComponent as LightningIcon } from "../assets/icons/lightning.svg";

interface Props {
  reward?: IRewardProfiles;
  placeInRating?: number;
  crystallEarned?: number;
  hasReward?: boolean;
}

export const PlaceInRating: FC<Props> = ({
  reward,
  placeInRating,
  hasReward,
}) => {
  if (!placeInRating) return null;
  if (hasReward) {
    return (
      <Tooltip
        label={reward?.tooltip}
        placement="top-start"
        bgColor="rgba(87, 92, 112, 1)"
        borderRadius="8px"
        color="white"
        p="8px 12px"
      >
        <Box mt="12px">
          <LightningIcon
            width="24px"
            height="24px"
            color={"rgba(245, 193, 59, 1)"}
          />
        </Box>
      </Tooltip>
    );
  }

  return (
    <Text
      size="caption12/16"
      variant="semibold"
      w={"24px"}
      textAlign="center"
      mt="15px"
    >
      {placeInRating}
    </Text>
  );
};
