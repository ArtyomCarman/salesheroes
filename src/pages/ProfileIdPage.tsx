import { Flex } from '@chakra-ui/react';

import { profileContestant } from "../models";
import {
	ProfileIdAwardsContainer,
	ProfileIdInfoContainer,
	ProfileIdRatingContainer,
} from '../containers';
import { EmployeeStatus } from '../interfaces';


export const ProfileIdPage = () => {
	const showRating = profileContestant.employeeStatus === EmployeeStatus.Contestant;

	return (
		<Flex direction="column" gap="16px">
				<ProfileIdInfoContainer  />
			{showRating ? (
					<ProfileIdRatingContainer />
			) : null}
				<ProfileIdAwardsContainer />
		</Flex>
	);
};
