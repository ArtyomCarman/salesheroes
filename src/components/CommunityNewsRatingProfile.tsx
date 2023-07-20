import { FC, MouseEvent, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import { INewsRatingLeader } from "../interfaces";
import { ReactComponent as CrowIcon } from "../assets/icons/crown.svg";
import { ProfileAvatar, Size } from "./ProfileAvatar";

export const CommunityNewsRatingProfile: FC<Props> = ({ leader, total }) => {
  const { placeInRating } = leader;
  const navigate = useNavigate();

  const handleProfile = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    navigate(`/profile/${leader.employeeNumber}`);
  };

  const order = useMemo(() => {
    const mid = Math.floor(total / 2);
    const placeOnPodium =
      placeInRating % 2 === 0
        ? mid - (placeInRating - Math.floor(placeInRating / 2))
        : mid + (placeInRating - Math.floor(placeInRating / 2));

    return placeOnPodium;
  }, [total, placeInRating]);

  const size = useMemo<Size>(() => {
    switch (total) {
      case 5:
        if (placeInRating === 1) return "lg";

        if (placeInRating === 2 || placeInRating === 3) return "md";

        return "sm";
      case 4:
        if (placeInRating >= 3) return "md";

        return "lg";

      case 3:
        if (placeInRating >= 2) return "md";

        return "lg";

      default:
        return "lg";
    }
  }, [total, placeInRating]);

  return (
    <Flex
      key={leader.employeeNumber}
      flexDirection="column"
      alignItems="center"
      order={order}
    >
      {leader.placeInRating === 1 && <CrowIcon width="24px" height="24px" />}
      <ProfileAvatar profile={leader} size={size} onClick={handleProfile} />
    </Flex>
  );
};

interface Props {
  leader: INewsRatingLeader;
  total: number;
}
