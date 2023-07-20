import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Divider, Flex, Show, Text } from "@chakra-ui/react";

import { CommunityNewsCard, ProfileAvatar } from "../components";
import { CommunityLikesContainer } from "../containers";
import { ReactComponent as ArrowRightIcon } from "../assets/icons/arrow-right.svg";
import { ReactComponent as CalendarIcon } from "../assets/icons/calendar.svg";
import { ReactComponent as TournamentsIcon } from "../assets/icons/tournaments-24.svg";
import { news } from "../models";
import { INews } from "../interfaces";

export const CommunityIdPage = () => {
  const navigate = useNavigate();
  const goToProfileId = (employeeNumber: string) => () => {
    navigate(`/profile/${employeeNumber}`);
  };

  const handleTournamentId = () => navigate(`/awards/00013`);

  const { id } = useParams();

  const newsId = news.timePeriod
    .flatMap(({ news }) => news)
    .find(({ newsId }) => newsId === id) as INews;

  return (
    <CommunityNewsCard isTournamentNews={!!newsId.tournamentId}>
      <Flex flexDirection="column" gap="16px">
        <Text
          size={{
            base: "sub18/24",
            lg: "sub20/28",
          }}
          variant="semibold"
          whiteSpace="pre-line"
        >
          {newsId.newsText}
          {newsId.newsId === "news2" && (
            <Link
              to="https://dfa.sber.ru/nft/tokens/view/2cDe52F4H3ixbxXeknmDWiEkopFNYV6WQ8oT1aTPutDAjWNJQGVxw8mKsiifqMALhF28vUqFHkxSHoejuiAHZd6iLef8D6u"
              target="_blank"
            >
              <Box
                as="span"
                borderBottom="1px dashed #fff"
                _hover={{ background: "rgba(87, 92, 112, 0.3)" }}
              >
                NFT на платформе ЦФА Сбера.
              </Box>
            </Link>
          )}
        </Text>
        <Flex color="rgba(255, 255, 255, 0.8)" gap="24px">
          <Flex gap="8px">
            <CalendarIcon width="24px" height="24px" />
            <Text size="body16/24">{newsId.date}</Text>
          </Flex>
          {newsId.tournamentId && (
            <Flex gap="8px" cursor="pointer" onClick={handleTournamentId}>
              <TournamentsIcon width="24px" height="24px" />
              <Text size="body16/24">{newsId.date}</Text>
              <ArrowRightIcon width="24px" height="24px" />
            </Flex>
          )}
        </Flex>
      </Flex>

      <Divider borderColor="rgba(255, 255, 255, 0.2)" />
      {newsId.newsId === "news2" && (
        <>
          <Flex direction="column" gap="8px">
            <Flex gap="12px">
              <Text size="sub20/28">
                {newsId.tournamentId ? "Победители" : "Получили бейдж"}
              </Text>
              <Text size="sub20/28" color="rgba(255, 255, 255, 0.6)">
                {newsId.leaders.length}
              </Text>
            </Flex>
            <Flex direction="column">
              {newsId.leaders.map((leader) => (
                <Flex
                  key={leader.employeeNumber}
                  gap="12px"
                  padding="12px 0 12px"
                  border="2px solid transparent"
                  cursor="pointer"
                  _hover={{
                    backgroundColor: "rgba(47, 52, 61, 1)",
                    margin: "0 -16px",
                    px: "16px",
                    borderRadius: "8px",
                    _notLast: { boxShadow: "none" },
                  }}
                  _active={{
                    backgroundColor: "rgba(47, 52, 61, 1)",
                    margin: "0 -16px",
                    px: "16px",
                    borderRadius: "8px",
                    _notLast: { boxShadow: "none" },
                  }}
                  _notLast={{
                    boxShadow: "28px 29px 0px -28px rgb(255 255 255 / 20%)",
                  }}
                  onClick={goToProfileId(leader.employeeNumber)}
                >
                  <ProfileAvatar profile={leader} size="md" />
                  <Flex flexGrow={1} alignItems="center">
                    <Box flexGrow={1}>
                      <Text variant="semibold">{`${leader.firstName} ${leader.lastName}`}</Text>
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
            </Flex>
          </Flex>
          <Divider borderColor="rgba(255, 255, 255, 0.2)" />
        </>
      )}
      <CommunityLikesContainer newsId={newsId.newsId} />
    </CommunityNewsCard>
  );
};
