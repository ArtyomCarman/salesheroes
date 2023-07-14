import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Flex, Link, Text, FlexProps } from "@chakra-ui/react";
import { ReactComponent as AboutUsIcon } from "../assets/icons/about-us.svg";
import { ReactComponent as AwardsIcon } from "../assets/icons/awards.svg";
import { ReactComponent as CommunityIcon } from "../assets/icons/community.svg";
import { ReactComponent as TournamentsIcon } from "../assets/icons/tournaments-24.svg";

export const AppSidebar: FC<Props> = ({ ...otherProps }) => (
  <Flex
    as="nav"
    direction={{
      base: "row",
      lg: "column",
    }}
    justifyContent="space-evenly"
    {...otherProps}
  >
    {sidebarModules.map(({ to, text, icon: Icon }) => (
      <Link
        as={NavLink}
        alignItems="center"
        display="flex"
        borderRadius="8px"
        padding={{
          base: "8px",
          lg: "12px 16px",
        }}
        flexDirection={{
          base: "column",
          lg: "row",
        }}
        gap={{
          base: "4px",
          lg: "12px",
        }}
        textDecoration="none"
        color={{
          base: "rgba(255, 255, 255, 0.6)",
          lg: "#fff",
        }}
        _hover={{
          textDecoration: "none",
          color: "#FFBF3E",
          background: "rgba(87, 92, 112, 0.3)",
          svg: {
            fill: "#FFBF3E",
          },
        }}
        _activeLink={{
          "&.active": {
            color: "#FFBF3E",
            svg: {
              fill: "#FFBF3E",
            },

            "@media screen and (min-width: 48em)": {
              background: "rgba(87, 92, 112, 0.3)",
            },
          },
        }}
        to={to}
        transition="all 0.2s"
      >
        <Icon width="24px" />
        <Text fontSize={{ base: "10px", lg: "16px" }}>{text}</Text>
      </Link>
    ))}
  </Flex>
);

const sidebarModules = [
  {
    to: "/community",
    icon: CommunityIcon,
    text: "Сообщество",
  },
  {
    to: "/tournaments",
    icon: TournamentsIcon,
    text: "Турниры",
  },
  {
    to: "/awards",
    icon: AwardsIcon,
    text: "Награды",
  },
  {
    to: "/about",
    icon: AboutUsIcon,
    text: "О проекте",
  },
];

interface Props extends FlexProps {}
