import { FC, MouseEvent, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Divider, Flex, Grid, Text } from "@chakra-ui/react";

import { AppPopover, CommunityNewsCard, ProfileAvatar } from "../components";
import { INews } from "../interfaces";
import { CommunityLikesContainer } from "./CommunityLikesContainer";

export const CommunityTabsNewsContainer: FC<Props> = ({ news }) => {
  const navigate = useNavigate();
  const goToProfile = (id: string) => (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    navigate(`/profile/${id}`);
  };

  const handleCommunityId = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    navigate(news.newsId);
  };

  const MAX_LEADERS = 5;
  const showMoreLeaders = useMemo(
    () => news.leaders.length > MAX_LEADERS,
    [news]
  );

  const leadersList = useMemo(() => {
    if (showMoreLeaders) return news.leaders.slice(0, 5);

    return news.leaders;
  }, [news, showMoreLeaders]);

  return (
    <CommunityNewsCard
      isTournamentNews={!!news.tournamentId}
      cursor="pointer"
      onClick={handleCommunityId}
    >
      <Flex gap="12px" justifyContent="space-between">
        {news.tournamentId ? (
          <Flex>
            {leadersList.map((leader, index) => (
              <Box
                key={leader.employeeNumber}
                _notFirst={{
                  marginLeft: "-8px",
                  // transform: `translateX(-${index * 8}px)`,
                }}
                sx={{
                  "&:not(:first-of-type)": {
                    WebkitMaskImage:
                      "radial-gradient(circle at -16px center, #0000 24px, #000 0)",
                  },
                }}
              >
                {showMoreLeaders && index === news.leaders.length - 1 ? (
                  <AppPopover
                    header="Победители"
                    content={news.leaders.map((item, itemIndex) => (
                      <Grid
                        p="12px 16px"
                        key={item.employeeNumber}
                        gap="12px"
                        gridTemplateColumns="auto 1fr"
                      >
                        <ProfileAvatar
                          profile={item}
                          size="md"
                          onClick={goToProfile(leader.employeeNumber)}
                        />
                        <Box
                          position="relative"
                          _before={{
                            content:
                              !(itemIndex === news.leaders.length - 1) && "''",
                            position: "absolute",
                            bottom: "-11px",
                            width: "100%",
                            height: "1px",
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                          }}
                        >
                          <Text>
                            {item.firstName} {item.lastName}
                          </Text>
                          <Text>{item.terDivisionName}</Text>
                        </Box>
                      </Grid>
                    ))}
                  >
                    <Flex
                      w="48px"
                      h="48px"
                      borderRadius="50%"
                      border="3px solid rgba(255, 255, 255, 0.2)"
                      bgColor="rgba(255, 255, 255, 0.2)"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text
                        color="rgba(255, 255, 255, 0.8)"
                        size="body14/24"
                        variant="semibold"
                      >
                        +{news.leaders.slice(MAX_LEADERS).length}
                      </Text>
                    </Flex>
                  </AppPopover>
                ) : (
                  <ProfileAvatar
                    profile={leader}
                    size="md"
                    onClick={goToProfile(leader.employeeNumber)}
                  />
                )}
              </Box>
            ))}
          </Flex>
        ) : (
          <>
            {news.leaders.map((leader) => (
              <Flex
                key={leader.employeeNumber}
                gap="12px"
                onClick={goToProfile(leader.employeeNumber)}
              >
                <ProfileAvatar profile={leader} size="md" />
                <Flex flexDirection="column" flexGrow={1}>
                  <Text size="body16/24" variant="semibold">
                    {leader.firstName} {leader.lastName}
                  </Text>
                  <Text
                    fontSize="14px"
                    lineHeight="24px"
                    color="rgba(255, 255, 255, 0.8)"
                  >
                    {leader.terDivisionName}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </>
        )}

        <Text size="body14/24" color="rgba(255, 255, 255, 0.6)">
          {news.date}
        </Text>
      </Flex>
      <Text
        size={{
          base: "sub18/24",
          lg: "sub20/28",
        }}
        variant="medium"
        overflow="hidden"
        textOverflow="ellipsis"
        display="-webkit-box"
        whiteSpace="pre-line"
        sx={{
          WebkitLineClamp: "14",
          WebkitBoxOrient: "vertical",
        }}
      >
        {news.newsText}
        {news.newsId === "news2" && (
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
      <Divider borderColor="rgba(255, 255, 255, 0.2)" />
      <CommunityLikesContainer newsId={news.newsId} />
    </CommunityNewsCard>
  );
};

interface Props {
  news: INews;
}
