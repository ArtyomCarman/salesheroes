import { useNavigate } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";

import { ButtonComponent, TournamentCard } from "../components";
import { Reward } from "../interfaces";
import { ReactComponent as LightningIcon } from "../assets/icons/lightning.svg";
import { tournaments } from "../models";

export const TournamentContainer = () => {
  const navigate = useNavigate();
  const goToArchive = () => navigate("/tournaments/archive");

  return (
    <Flex direction="column" gap={"48px"}>
      {tournaments.ratingCategories.map((ratingCategory) => (
        <Flex
          direction="column"
          gap="24px"
          key={ratingCategory.ratingCategoryName}
        >
          <Flex gap="8px">
            <Flex
              gap="12px"
              fontSize="24px"
              lineHeight="32px"
              paddingX={{
                base: "16px",
                lg: "0",
              }}
            >
              <Flex gap="8px">
                {ratingCategory.tournaments.some((item) => item.reward) && (
                  <LightningIcon
                    width="32px"
                    height="32px"
                    fill={
                      ratingCategory.tournaments.some(
                        (item) => item.reward === Reward.gold
                      )
                        ? "var(--primary-30)"
                        : "white"
                    }
                  />
                )}
                <Text variant="semibold" size="h24/32">
                  {ratingCategory.ratingCategoryName}
                </Text>
              </Flex>
              <Text color="rgba(255, 255, 255, 0.6)" size="h24/32">
                {ratingCategory.tournaments.length}
              </Text>
            </Flex>
          </Flex>
          <TournamentCard category={ratingCategory} />
        </Flex>
      ))}
      {tournaments.isArchiveButtonNeeds && (
        <ButtonComponent
          text="Посмотреть архив"
          design="outlined"
          onClick={goToArchive}
          margin={{ base: "0 16px", lg: "0" }}
        />
      )}
    </Flex>
  );
};
