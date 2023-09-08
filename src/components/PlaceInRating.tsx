import { FC } from "react";
import { Text } from "@chakra-ui/react";

import { IRewardProfiles } from "../interfaces";

interface Props {
  reward?: IRewardProfiles;
  placeInRating?: number;
  crystallEarned?: number;
}

export const PlaceInRating: FC<Props> = ({ placeInRating }) => {
  return (
    <Text
      size="caption12/16"
      variant="semibold"
      w="24px"
      textAlign="center"
      mt="15px"
    >
      {placeInRating}
    </Text>
  );
};
