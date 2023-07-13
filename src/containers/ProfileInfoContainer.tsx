import { Fade } from '@chakra-ui/react';

import { ProfileInfo } from '../components';
import { profileContestant } from "../models";

export const ProfileInfoContainer = () => {
	return (
		<Fade in>
			<ProfileInfo
				profile={profileContestant}
				text="Раньше вы участвовали в турнирах и получали награды за лучшие результаты. В профиле сохранены ваши достижения"
			/>
		</Fade>
	);
};
