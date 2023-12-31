import type { FC } from "react";
import { useMemo } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { Flex, Link, Show, SimpleGrid, Text } from "@chakra-ui/react";

import { ProfileAvatar } from "./ProfileAvatar";
import { ReactComponent as SalesHerosIcon } from "../assets/icons/sales-heros-logo.svg";
import { ReactComponent as ArrowThickLeftIcon } from "../assets/icons/arrow-thick-left.svg";
import { profileContestant } from "../models";
// import { InstallPWAButton } from "./InstallPWAButton";

export const AppHeader: FC = () => {
  const navigate = useNavigate();
  const { profileNumber } = useParams();

  const { pathname, state } = useLocation();
  const isOurProfile = "22" === profileNumber;
  const allAwardsPage = pathname === `/profile/${profileNumber}/awards`;

  const showBackButton = useMemo(
    () =>
      (!/\/(awards|community|tournaments|progress)$/gi.test(pathname) &&
        !state?.hideBackButton) ||
      isOurProfile ||
      allAwardsPage,
    [pathname, state],
  );

  const goBack = () => navigate(-1);

  return (
    <SimpleGrid
      as="header"
      justifyItems="center"
      boxShadow="inset 0px -1px 0px rgba(255, 255, 255, 0.2)"
      padding="12px 16px"
    >
      <SimpleGrid
        maxWidth="840px"
        width="100%"
        templateColumns={{
          base: "1fr auto",
          lg: "196px 1fr auto ",
        }}
        gap="24px"
        alignItems="center"
        paddingLeft={{
          base: "0",
          lg: "16px",
        }}
      >
        <Flex
          display={{ base: showBackButton ? "none" : "initial", lg: "flex" }}
        >
          <Link
            as={NavLink}
            to="/"
            _hover={{
              textDecoration: "none",
            }}
          >
            <Flex gap="12px" alignItems="center">
              <SalesHerosIcon />
              <Show above="md">
                <Text>Герои продаж</Text>
              </Show>
            </Flex>
          </Link>
        </Flex>
        <Flex
          visibility={showBackButton ? "visible" : "hidden"}
          display={{ base: showBackButton ? "flex" : "none", lg: "flex" }}
        >
          <Flex cursor="pointer" gap="8px" onClick={goBack}>
            <ArrowThickLeftIcon />
            <Show above="md">
              <Text>Назад</Text>
            </Show>
          </Flex>
        </Flex>
        <Link
          as={NavLink}
          to="profile/22"
          state={{
            hideBackButton: true,
          }}
          _hover={{
            textDecoration: "none",
          }}
          cursor="pointer"
        >
          <ProfileAvatar profile={profileContestant} />
        </Link>
      </SimpleGrid>
    </SimpleGrid>
  );
};
