import { Fade } from "@chakra-ui/react";

import { ProfileInfo } from "../components";
import { leaders } from "../models/tournamen-leaders";
import { useParams } from "react-router-dom";
import { IProfileBody, IProfileProgressBody } from "../interfaces";
import { topManagers } from "../models/topManagers";

export const ProfileIdInfoContainer = () => {
  const { profileNumber } = useParams();
  const profile = leaders
    .concat(topManagers)
    .find((leader) => leader.profileNumber === profileNumber) as IProfileBody;

  const progress = profile.progress as unknown as IProfileProgressBody;

  return (
    <Fade in>
      <ProfileInfo
        profile={profile as IProfileBody}
        progress={progress}
        text="Раньше пользователь участвовал в турнирах и получал награды за лучшие результаты. В профиле сохранены его достижения"
      />
    </Fade>
  );
};
