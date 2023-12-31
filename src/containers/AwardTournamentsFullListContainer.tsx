import { Flex, Text } from "@chakra-ui/react";

import { TournamentArchiveCard, TournamentCard } from "../components";
import { Reward } from "../interfaces";
import ГайнРоман from "../assets/images/romanGayn.png";

const formatter = new Intl.DateTimeFormat("ru", {
  month: "long",
  day: "numeric",
});

const d = new Date();
d.setDate(d.getDate() - 1);

const date = formatter.format(d);

const tournaments = {
  tournamentName: "Марафон по условным сделкам",
  activityTypes: [
    {
      activityTypeName: "Активные",
      tournaments: [
        {
          tournamentId: "T1",
          employee: {
            profileNumber: "22",
            photoData: ГайнРоман,
            firstName: "Роман",
            lastName: "Гайн",
            colorCode: {
              primary: "blue-60",
              secondary: "blue-30",
            },
          },

          tournamentInfo: "осталось 2 дня",
          tournamentDurationName: "ТУРНИР НЕДЕЛИ",
          progressBarValue: 70,
          updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
          reward: Reward.gold,
          rating: [
            {
              divisionLevelResult: "из 33 в стране",
              placeInRating: 12,
            },
            {
              divisionLevelResult: "из 3 в ТБ",
              placeInRating: 2,
              reward: {
                icon: Reward.silver,
                tooltip: "Претендент на победу",
              },
            },
            {
              divisionLevelResult: "из 1 в ГОСБ",
              placeInRating: 1,
              reward: {
                icon: Reward.gold,
                tooltip: "Претендент на победу",
              },
            },
          ],
        },
        {
          tournamentId: "T2",
          employee: undefined,
          tournamentInfo: "Осталось 4 дня",
          tournamentDurationName: "ТУРНИР НЕДЕЛИ",
          progressBarValue: 50,
          updateTooltip: `Обновление информации об участниках и их достижениях происходит каждый день. Последнее обновление — ${date}`,
          reward: undefined,
          rating: [
            {
              divisionLevelResult: "33 в стране",
            },
            {
              divisionLevelResult: "3 в ТБ",
            },
          ],
        },
      ],
    },
    {
      activityTypeName: "Завершенные",
      tournaments: [
        {
          tournamentId: "T3",
          employee: {
            profileNumber: "22",
            photoData: ГайнРоман,
            firstName: "Роман",
            lastName: "Гайн",
            colorCode: {
              primary: "blue-60",
              secondary: "blue-30",
            },
          },
          tournamentInfo: "Турнир недели завершён • 07.03–07.09.23",
          reward: Reward.gold,
          rating: [
            {
              divisionLevelResult: "из 33 в стране",
              placeInRating: 5,
            },
            {
              divisionLevelResult: "из 3 в Тербанке",
              placeInRating: 2,
              reward: {
                icon: Reward.silver,
                tooltip: "Победитель турнира",
              },
            },
            {
              divisionLevelResult: "из 1 в ГОСБ",
              placeInRating: 1,
              reward: {
                icon: Reward.gold,
                tooltip: "Победитель турнира",
              },
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
          <Text
            size="h24/32"
            variant="semibold"
            px={{
              base: "16px",
              lg: 0,
            }}
          >
            {activityType.activityTypeName}
          </Text>
          {activityType.activityTypeName === "Активные" ? (
            <TournamentCard category={activityType} />
          ) : (
            <TournamentArchiveCard category={activityType} />
          )}
        </Flex>
      ))}
    </Flex>
  );
};
