import { IProgressAwards } from "../interfaces";
import { FC } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BadgeIcon } from "../components";
import { ReactComponent as DiamondIcon } from "../assets/icons/diamond.svg";
import { ReactComponent as ArrowRight } from "../assets/icons/arrow-right.svg";
import Confetti from "../assets/images/confetti.png";
import { useNavigate } from "react-router-dom";

interface Props {
  award: IProgressAwards;
}
export const ProgressTournamentAwardContainer: FC<Props> = ({ award }) => {
  const navigate = useNavigate();
  const goToTournament = (id: string) => () => {
    navigate(`/tournaments/${id}`);
  };
  return (
    <Flex
      direction="column"
      gap="24px"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
      backgroundColor="rgba(87, 92, 112, 0.3)"
      borderRadius="16px"
      padding="24px"
      _before={{
        content: "''",
        position: "absolute",
        width: "512px",
        height: "512px",
        bottom: "383px",
        filter: "blur(76px)",
        background: `radial-gradient(66.32% 66.32% at 50% 10%, ${award.award.colorCode.primary} 30.03%, ${award.award.colorCode.secondary} 100%)`,
        borderRadius: "50%",
      }}
      _after={{
        content: "''",
        position: "absolute",
        width: "512px",
        height: "512px",
        bottom: "383px",
        left: "180px",
        filter: "blur(76px)",
        background: `radial-gradient(66.32% 66.32% at 50% 10%, ${award.award.colorCode.tertiary} 30.03%, ${award.award.colorCode.tertiary} 100%)`,
        borderRadius: "50%",
      }}
    >
      <Text size="sub20/28" color="rgba(255, 255, 255, 0.8)">
        {award?.infoText}
      </Text>
      {award.tournament && <Image src={Confetti} position="absolute" top="0" />}
      <Flex direction="column" gap="8px" alignItems="center">
        <BadgeIcon
          imageId={award.award.awardName}
          width="176px"
          height="176px"
        />
        <Flex
          direction="row"
          gap="8px"
          border="1px solid rgba(255, 255, 255, 0.2)"
          borderRadius="80px"
          padding="8px 16px"
          width="max-content"
        >
          <Text size="sub18/24">{award.crystalEarned}</Text>
          <DiamondIcon width="24px" height="24px" />
        </Flex>
      </Flex>
      <Text
        size="sub20/28"
        textAlign="center"
        color="rgba(255, 255, 255, 0.8)"
        zIndex="1"
        dangerouslySetInnerHTML={{ __html: award.text }}
      />
      {award.tournament && (
        <Flex
          direction="row"
          width="100%"
          justifyContent="space-between"
          backgroundColor="rgba(87, 92, 112, 0.3)"
          padding="12px 16px"
          borderRadius="8px"
          alignItems="center"
          cursor="pointer"
          _hover={{
            backgroundColor: "rgba(87, 92, 112, 0.5)",
          }}
          onClick={goToTournament(award.tournament.tournamentId)}
        >
          <Box>
            <Text variant="semibold">{award.tournament.tournamentName}</Text>
            <Text color="rgba(255, 255, 255, 0.6)">
              {award.tournament.tournamentDate}
            </Text>
          </Box>
          <ArrowRight width="24px" height="24px" />
        </Flex>
      )}
    </Flex>
  );
};
