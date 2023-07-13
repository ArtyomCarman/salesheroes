import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Flex, Link, Text, FlexProps } from "@chakra-ui/react";
import { ReactComponent as AboutUsIcon } from "../assets/icons/about-us.svg";
import { ReactComponent as AwardsIcon } from "../assets/icons/awards.svg";
// import { CommunityIcon } from "../assets/icons/";
// import { TournamentsIcon } from "../assets/icons/";

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
        <Icon />
        <Text fontSize={{ base: "10px", lg: "16px" }}>{text}</Text>
      </Link>
    ))}
  </Flex>
);

const sidebarModules = [
  {
    to: "/about",
    icon: AboutUsIcon,
    text: "О проекте",
  },

  {
    to: "/awards",
    icon: AwardsIcon,
    text: "Награды",
  },
  //   {
  //     to: "/tournaments",
  //     icon: TournamentsIcon,
  //     text: "Турниры",
  //   },
  //   {
  //     to: "/community",
  //     icon: CommunityIcon,
  //     text: "Сообщество",
  //   },
];

interface Props extends FlexProps {}
