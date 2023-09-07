import { Flex } from "@chakra-ui/react";
import {
  GreetingsContainer,
  ProgressTournamentAwardContainer,
  ProgressCrystalEarnedContainer,
  ProgressNewLevelContainer,
  ProgressRatingContainer,
  ProgressTournamentContainer,
  ProgressAwardContainer,
  ProgressCompareContainer,
} from "../containers";
import { progressAwards, progressTournamentAwards } from "../models";

export const ProgressPage = () => {
  return (
    <Flex direction="column" gap="16px">
      <GreetingsContainer />
      <ProgressNewLevelContainer />
      <ProgressRatingContainer />
      <ProgressTournamentContainer />
      {progressTournamentAwards.map((item) => (
        <ProgressTournamentAwardContainer award={item} />
      ))}
      <ProgressCrystalEarnedContainer />
      {progressAwards.map((item) => (
        <ProgressAwardContainer award={item} />
      ))}
      <ProgressCompareContainer />
    </Flex>
  );
};
