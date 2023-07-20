import { FC, Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Fade, Flex, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";

import { BadgeIcon, ButtonComponent, Empty } from "../components";
import { EmployeeStatus, IProfileBody } from "../interfaces";
import { badges } from "../models";
import { leaders } from "../models/tournamen-leaders";

export const ProfileIdAwardsContainer: FC = () => {
  const navigate = useNavigate();
  const { employeeNumber } = useParams();
  const goToBadge = (id: string) => () => {
    navigate(`/awards/${id}`);
  };
  const goToAllBadges = () => {
    navigate(`/profile/${employeeNumber}/awards`);
  };
  const goToBadges = () => {
    navigate("/awards");
  };

  const leader = leaders.find((leader) => leader.employeeNumber === employeeNumber) as IProfileBody

  return (
    <Fade in>
      {badges.badgesType.length !== 0 &&
      leader.employeeStatus !== EmployeeStatus.Non_Contestant ? (
        <Flex
          borderRadius="16px"
          bgColor="rgba(87, 92, 112, 0.3)"
          p="24px"
          gap="16px"
          direction="column"
        >
          <Flex gap="12px">
            <Text size="h24/32" variant="semibold">
              Полученные награды
            </Text>
            {badges.badgesUserHas !== 0 && (
              <Text size="h24/32" color="rgba(255, 255, 255, 0.6)">
                {badges.badgesUserHas}
              </Text>
            )}
          </Flex>
          {badges.badgesType.length !== 0 ? (
            <>
              <SimpleGrid
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                }}
                columnGap="8px"
              >
                {badges.badgesType.map((badgeType) => (
                  <Fragment key={badgeType.badgeTypeName}>
                    {badgeType.badges.slice(0, 3).map((badge) => (
                      <Flex
                        direction="column"
                        key={badge.badgeId}
                        cursor="pointer"
                        onClick={goToBadge(badge.badgeId)}
                        minW="0"
                        sx={{
                          "@media (pointer: fine)": {
                            "&:hover": {
                              bgColor: "rgba(87, 92, 112, 0.3)",
                            },
                          },
                        }}
                        _active={{
                          bgColor: "rgba(87, 92, 112,0.3)",
                        }}
                        borderRadius="8px"
                        position="relative"
                      >
                        <Flex
                          position="relative"
                          alignSelf="center"
                          padding="12px"
                          _before={
                            badge.badgeAmount > 1
                              ? {
                                  content: `'${badge.badgeAmount}'`,
                                  position: "absolute",
                                  bottom: "16px",
                                  left: "24px",
                                  bgColor: "rgba(255, 255, 255, 0.8)",
                                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
                                  fontSize: "12px",
                                  fontWeight: "500",
                                  color: "black",
                                  display: "flex",
                                  width: "24px",
                                  height: "24px",
                                  zIndex: 1,
                                  borderRadius: "50%",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }
                              : undefined
                          }
                        >
                          <BadgeIcon imageId={badge.imageId} maxH="176px" />
                        </Flex>
                        <Flex direction="column" gap="4px">
                          <Tooltip
                            label={badge.badgeName}
                            placement="top"
                            backgroundColor="rgba(87, 92, 112, 1)"
                            color="rgba(255, 255, 255, 1)"
                          >
                            <Text
                              color="rgba(255, 255, 255, 0.8)"
                              minW="0"
                              title={badge.badgeName}
                              size="caption12/16"
                              variant="semibold"
                              justifyContent="center"
                              textAlign="center"
                              display="-webkit-box"
                              textOverflow="ellipsis"
                              overflow="hidden"
                              sx={{
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: "2",
                              }}
                            >
                              {badge.hasNftMark && (
                                <Text
                                  size="caption12/16"
                                  as="span"
                                  display="inline-block"
                                  marginRight="4px"
                                  variant="semibold"
                                  bgClip="text"
                                  color="transparent"
                                  bgImage="linear-gradient(103.74deg, #875AC0 0.85%, #B675AF 47.94%, #875AC0 94.39%), linear-gradient(49.6deg, #875AC0 26.29%, #B675AF 50.86%, #875AC0 74.59%)"
                                >
                                  NFT
                                </Text>
                              )}
                              {badge.badgeName}
                            </Text>
                          </Tooltip>
                        </Flex>
                      </Flex>
                    ))}
                  </Fragment>
                ))}
              </SimpleGrid>

              <ButtonComponent onClick={goToAllBadges} text="Посмотреть все" />
            </>
          ) : (
            <Empty
              buttonText="Перейти к списку всех наград"
              onClick={goToBadges}
            >
              <Text
                size="sub18/24"
                color="rgba(255, 255, 255, 0.6)"
                textAlign="center"
              >
                У пользователя пока нет наград
              </Text>
            </Empty>
          )}
        </Flex>
      ) : null}
    </Fade>
  );
};
