import { Fade } from '@chakra-ui/react';

import { ProfileInfo } from '../components';
import { profileContestant, progress } from "../models";

export const ProfileIdInfoContainer = () => {

	return (
		<Fade in>
			<ProfileInfo
				profile={profileContestant}
				progress={progress}
				text="Раньше пользователь участвовал в турнирах и получал награды за лучшие результаты. В профиле сохранены его достижения"
			/>
		</Fade>
	);
};
