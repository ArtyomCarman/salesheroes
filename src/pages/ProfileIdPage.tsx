import { Flex } from "@chakra-ui/react";

import {
  ProfileIdAwardsContainer,
  ProfileIdInfoContainer,
  ProfileIdRatingContainer,
} from "../containers";
import { EmployeeStatus, IProfileBody } from "../interfaces";
import { useParams } from "react-router-dom";
import { leaders } from "../models/tournamen-leaders";
import { topManagers } from "../models/topManagers";

export const ProfileIdPage = () => {
  const { profileNumber } = useParams();
  const profile = leaders
    .concat(topManagers)
    .find((leader) => leader.profileNumber === profileNumber) as IProfileBody;
  const showRatingAndAwards =
    profile.employeeStatus !== EmployeeStatus.Top_Manager;

  return (
    <Flex direction="column" gap="16px">
      <ProfileIdInfoContainer />
      {showRatingAndAwards ? (
        <>
          <ProfileIdRatingContainer />
          <ProfileIdAwardsContainer />
        </>
      ) : null}
    </Flex>
  );
};
