import { Box, Text, Grid, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { ReactComponent as AboutUsIcon } from "../assets/icons/about-us.svg";
import { ReactComponent as ShopIcon } from "../assets/icons/shop.svg";

export const MorePage = () => {
  return (
    <Box>
      <Text
        size="h30/48"
        variant="medium"
        paddingX={{
          base: "16px",
          lg: "0",
        }}
        mb="16px"
      >
        Ещё
      </Text>
      <Grid>
        {menu.map(({ to, text, icon: Icon }) => (
          <Link
            key={to}
            as={NavLink}
            alignItems="center"
            display="flex"
            borderRadius="8px"
            padding="22px 16px"
            gap="8px"
            textDecoration="none"
            color={{
              base: "rgba(255, 255, 255, 0.6)",
              lg: "#fff",
            }}
            _hover={{
              lg: {
                textDecoration: "none",
                color: "#FFBF3E",
                background: "rgba(87, 92, 112, 0.3)",
                svg: {
                  fill: "#FFBF3E",
                },
              },
            }}
            _active={{
              base: {
                textDecoration: "none",
                color: "#FFBF3E",
                background: "rgba(87, 92, 112, 0.3)",
                svg: {
                  fill: "#FFBF3E",
                },
              },
            }}
            _activeLink={{
              "&.active": {
                color: "#FFBF3E",
                svg: {
                  fill: "#FFBF3E",
                },

                "@media screen and (min-width: 62em)": {
                  background: "rgba(87, 92, 112, 0.3)",
                },
              },
            }}
            to={to}
            transition="all 0.2s"
          >
            <Icon width="24px" />
            <Text variant="semibold" color="white">
              {text}
            </Text>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

const menu = [
  {
    to: "/shop",
    icon: ShopIcon,
    text: "Магазин",
  },
  {
    to: "/about",
    icon: AboutUsIcon,
    text: "О проекте",
  },
];
