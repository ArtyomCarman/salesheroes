import { FC, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Flex, Show, Text } from '@chakra-ui/react';

import { ButtonComponent, Empty, ProfileAvatar } from '../components';
import { DivisionLevel, DivisionLevelName, ILeader } from '../interfaces';
import { ReactComponent as ArrowRightIcon } from '../assets/icons/arrow-right.svg';

export const AwardShortListProfilesContainer: FC<Props> = ({ divisionLevel }) => {
	const navigate = useNavigate();

	const goToProfileId = (id: string) => () => {
		navigate(`/gamification/profile/${id}`);
	};
	// const goToFullList = () =>
	// 	navigate(
	// 		`/gamification/awards/${badgeId}/list?divisionLevel=${
	// 			DivisionLevel[divisionLevel.divisionLevelName]
	// 		}`,
	// 	);

	const numberOfContestants = Number(divisionLevel.contestants.replace(/[^0-9]/g, ''));

	const divisionName = useMemo(() => {
		if (divisionLevel.divisionLevelName === 'Тербанк') {
			return `Пока никто не получил бейдж в вашем тербанке.${'\n'} Вы можете стать первым!`;
		}
		if (divisionLevel.divisionLevelName === 'Подразделение') {
			return `Пока никто не получил бейдж в вашем подразделении .${'\n'} Вы можете стать первым!`;
		}

		return `Пока никто не получил бейдж.${'\n'} Вы можете стать первым!`;
	}, [divisionLevel.divisionLevelName]);

	if (!divisionLevel.leaders.length) {
		return (
			<Empty>
				<Text
					size="sub18/24"
					color="rgba(255, 255, 255, 0.6)"
					textAlign="center"
					whiteSpace="pre-wrap"
				>
					{divisionName}
				</Text>
			</Empty>
		);
	}

	return (
		<Flex direction="column" gap="12px">
			<Box>
				<Text
					size="body14/24"
					color="rgba(255, 255, 255, 0.8)"
					boxShadow="0px 1px 0px rgba(255, 255, 255, 0.2)"
					pb="12px"
				>
					{divisionLevel.contestants}
				</Text>
				{divisionLevel.leaders.map((leader) => (
					<Flex
						key={Math.random()}
						gap="8px"
						padding="12px 0 12px"
						border="2px solid transparent"
						sx={
							leader.isMarked
								? {
										bgColor: 'rgba(87, 92, 112, 0.3)',
										margin: '0 -16px',
										px: '16px',
										borderColor: 'rgba(255, 191, 62, 0.6)',
										borderRadius: '8px',
										_notLast: { boxShadow: 'none' },
										'@media (pointer: fine)': {
											'&:hover': { backgroundColor: 'rgba(87, 92, 112, 0.5)' },
										},
								  }
								: {
										'@media (pointer: fine)': {
											'&:hover': {
												backgroundColor: 'rgba(46, 48, 58, 1)',
												margin: '0 -16px',
												px: '16px',
												borderRadius: '8px',
												_notLast: { boxShadow: 'none' },
											},
										},
								  }
						}
						cursor="pointer"
						_active={
							leader.isMarked
								? {
										backgroundColor: 'rgba(87, 92, 112, 0.5)',
								  }
								: {
										backgroundColor: 'rgba(46, 48, 58, 1)',
										margin: '0 -16px',
										px: '16px',
										borderRadius: '8px',
										_notLast: { boxShadow: 'none' },
								  }
						}
						_notLast={{ boxShadow: '28px 29px 0px -28px rgb(255 255 255 / 20%)' }}
						onClick={goToProfileId(leader.employeeNumber)}
					>
						<ProfileAvatar profile={leader} size="md" />
						<Flex flexGrow={1} alignItems="center">
							<Box flexGrow={1}>
								<Text variant="semibold">
									{leader.firstName} {leader.lastName}
								</Text>
								<Text size="body14/24" color="rgba(255, 255, 255, 0.8)">
									{leader.terDivisionName}
								</Text>
							</Box>
							<Show above="md">
								<ArrowRightIcon width="24px" height="24px" />
							</Show>
						</Flex>
					</Flex>
				))}
			</Box>
			{/*{numberOfContestants > divisionLevel.leaders.length ? (*/}
			{/*	<ButtonComponent text="Показать всех" onClick={goToFullList} />*/}
			{/*) : null}*/}
		</Flex>
	);
};

interface Props {
	divisionLevel: {
		divisionLevelName: string;
		contestants: string;
		leaders: ILeader[];
	};
}
