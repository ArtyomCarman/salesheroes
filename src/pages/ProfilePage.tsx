import { useParams } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import {
  ProfileAwardsContainer,
  ProfileInfoContainer,
  ProfileProgressContainer,
  ProfileRatingContainer,
} from "../containers";
import { ProfileIdPage } from "./ProfileIdPage";

export const ProfilePage = () => {
  const { employeeNumber } = useParams();
  // if (profile?.employee?.employeeNumberFull !== employeeNumber) {
  // 	return <ProfileIdPage />;
  // }

  return (
    <Flex direction="column" gap="16px">
      <ProfileInfoContainer />
      <ProfileProgressContainer />
      <ProfileRatingContainer />
      <ProfileAwardsContainer />
    </Flex>
  );
};
