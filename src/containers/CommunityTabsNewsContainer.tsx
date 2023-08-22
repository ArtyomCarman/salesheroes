import { FC, MouseEvent, useMemo } from "react";
import { useNavigate } from "react-router-dom";
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
                key={leader.profileNumber}
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
                {showMoreLeaders && index === leadersList.length - 1 ? (
                  <AppPopover
                    header="Победители"
                    content={news.leaders.map((item, itemIndex) => (
                      <Grid
                        p="12px 16px"
                        key={item.profileNumber}
                        gap="12px"
                        gridTemplateColumns="auto 1fr"
                      >
                        <Box
                          display="contents"
                          onClick={goToProfile(item.profileNumber)}
                          cursor="pointer"
                        >
                          <ProfileAvatar profile={item} size="md" />
                          <Box
                            position="relative"
                            _before={{
                              content:
                                !(itemIndex === news.leaders.length - 1) &&
                                "''",
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
                    onClick={goToProfile(leader.profileNumber)}
                  />
                )}
              </Box>
            ))}
          </Flex>
        ) : (
          <>
            {news.leaders.map((leader) => (
              <Flex
                key={leader.profileNumber}
                gap="12px"
                onClick={goToProfile(leader.profileNumber)}
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
      <Box>
        <Box
          onClick={(e) => {
            // @ts-ignore
            if (e.target.href) {
              e.stopPropagation();
            }
          }}
          dangerouslySetInnerHTML={{ __html: news.newsText }}
          overflow="hidden"
          textOverflow="ellipsis"
          display="-webkit-box"
          sx={{
            WebkitLineClamp: "8",
            WebkitBoxOrient: "vertical",
          }}
          css={{
            h3: {
              fontSize: "18px",
              lineHeight: "24px",
              fontWeight: "500",

              "&:not(last-of-type)": {
                marginBottom: "9px",
              },
            },
            p: {
              fontSize: "16px",
              lineHeight: "24px",

              "&:not(last-of-type)": {
                marginBottom: "8px",
              },
            },
          }}
        />
      </Box>
      <Divider borderColor="rgba(255, 255, 255, 0.2)" />
      <CommunityLikesContainer newsId={news.newsId} />
    </CommunityNewsCard>
  );
};

interface Props {
  news: INews;
}
