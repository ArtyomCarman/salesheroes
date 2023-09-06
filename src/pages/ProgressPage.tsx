import { Flex } from "@chakra-ui/react";
import {
  GreetingsContainer,
  ProgressNewLevelContainer,
  ProgressRatingContainer,
  ProgressTournamentContainer,
} from "../containers";

export const ProgressPage = () => {
  return (
    <Flex direction="column" gap="16px">
      <GreetingsContainer />
      <ProgressNewLevelContainer />
      <ProgressRatingContainer />
      <ProgressTournamentContainer />
    </Flex>
  );
};
