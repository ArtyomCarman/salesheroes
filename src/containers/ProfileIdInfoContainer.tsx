import { Fade } from '@chakra-ui/react';

import { ProfileInfo } from '../components';
import { progress } from "../models";
import { leaders } from "../models/tournamen-leaders";
import { useParams } from 'react-router-dom';
import { IProfileBody } from '../interfaces';

export const ProfileIdInfoContainer = () => {
	const { employeeNumber } = useParams();

	const profile = leaders.find((leader) => leader.employeeNumber === employeeNumber) as IProfileBody

	console.log('profile', employeeNumber)

	return (
		<Fade in>
			<ProfileInfo
				profile={profile}
				progress={progress}
				text="Раньше пользователь участвовал в турнирах и получал награды за лучшие результаты. В профиле сохранены его достижения"
			/>
		</Fade>
	);
};
