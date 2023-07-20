import { Fade } from '@chakra-ui/react';

import { ProfileInfo } from '../components';
import { leaders } from "../models/tournamen-leaders";
import { useParams } from 'react-router-dom';
import { IProfileBody } from '../interfaces';
import {topManagers} from "../models/topManagers";

export const ProfileIdInfoContainer = () => {
	const { employeeNumber } = useParams();
	const profile = leaders.concat(topManagers).find((leader) => leader.employeeNumber === employeeNumber) as IProfileBody

	return (
		<Fade in>
			<ProfileInfo
				profile={profile}
				text="Раньше пользователь участвовал в турнирах и получал награды за лучшие результаты. В профиле сохранены его достижения"
			/>
		</Fade>
	);
};
