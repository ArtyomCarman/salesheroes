import {Flex, Text} from '@chakra-ui/react';

import {TournamentArchiveCard, TournamentCard,} from '../components';
import {Reward} from '../interfaces';

const tournaments = {
	tournamentName: 'Регата эффективности',
	activityTypes: [
		{
			activityTypeName: 'Активные',
			tournaments: [
				{
					tournamentId: 'Т1_06',
					employee: {
						employeeNumber: '343536',
						photoData: '',
						firstName: 'Ильшат',
						lastName: 'Изотов',
						colorCode: {
							primary: 'blue-30',
							secondary: 'blue-60',
						},
					},

					tournamentInfo: 'осталось 2 дня',
					tournamentDurationName: 'ТУРНИР НЕДЕЛИ',
					progressBarValue: 70,
					updateTooltip: 'Данные обновляются каждые 2 недели',
					reward: Reward.silver,
					rating: [
						{
							divisionLevelResult: 'из 1250 в стране',
							placeInRating: 12,
							reward: {
								icon: Reward.silver,
								tooltip: 'Претендент на победу',
							},
						},
						{
							divisionLevelResult: 'из 128 в кластере',
							placeInRating: 7,
							reward: {
								icon: Reward.gold,
								tooltip: 'Победитель турнира',
							},
						},
						{
							divisionLevelResult: 'из 15 в подразделении',
							placeInRating: 5,
						},
					],
				},
			],
		},
		{
			activityTypeName: 'Завершенные',
			tournaments: [
				{
					tournamentId: 'Т1_04',
					employee: {
						employeeNumber: '343536',
						photoData: '',
						firstName: 'Ильшат',
						lastName: 'Изотов',
						colorCode: {
							primary: 'blue-30',
							secondary: 'blue-60',
						},
					},
					tournamentInfo: 'Турнир недели завершён • 17.02–23.02.23',
					updateTooltip: 'Данные обновляются каждые 2 недели',
					reward: Reward.silver,
					rating: [
						{
							divisionLevelResult: 'из 1250 в стране',
							placeInRating: 12,
							reward: {
								icon: Reward.silver,
								tooltip: 'Претендент на победу',
							},
						},
						{
							divisionLevelResult: 'из 128 в кластере',
							placeInRating: 7,
							reward: {
								icon: Reward.gold,
								tooltip: 'Победитель турнира',
							},
						},
						{
							divisionLevelResult: 'из 15 в подразделении',
							placeInRating: 5,
						},
					],
				},
			],
		},
	],
};

export const AwardTournamentsFullListContainer = () => {

	return (
		<Flex direction="column" gap="48px">
				{tournaments.activityTypes.map((activityType) => (
					<Flex direction="column" gap="24px" key={activityType.activityTypeName}>
						<Text size="h24/32" variant="semibold">
							{activityType.activityTypeName}
						</Text>
						{activityType.activityTypeName === 'Активные' ? (
							<TournamentCard category={activityType} />
						) : (
							<TournamentArchiveCard category={activityType} />
						)}
					</Flex>
				))}
		</Flex>
	);
};
