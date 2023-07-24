import { Fade } from "@chakra-ui/react";

import { ProfileInfo } from "../components";
import { leaders } from "../models/tournamen-leaders";
import { useParams } from "react-router-dom";
import { IProfileBody } from "../interfaces";
import { topManagers } from "../models/topManagers";

export const ProfileIdInfoContainer = () => {
  const { profileNumber } = useParams();
  const profile = leaders
    .concat(topManagers)
    .find((leader) => leader.profileNumber === profileNumber) as IProfileBody;

  return (
    <Fade in>
      <ProfileInfo
        profile={profile}
        text="Раньше пользователь участвовал в турнирах и получал награды за лучшие результаты. В профиле сохранены его достижения"
      />
    </Fade>
  );
};
