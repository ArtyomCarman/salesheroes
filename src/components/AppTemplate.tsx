import { useRef, useMemo, useLayoutEffect } from "react";
import { Outlet, useLocation, useNavigationType } from "react-router-dom";
import { Grid, Flex, Box, useBreakpointValue, css } from "@chakra-ui/react";
import { AppSidebar } from "./AppSidebar";

export const scrollbarCSS = css({
  scrollbarGutter: "stable",

  "&::-webkit-scrollbar": {
    width: "12px",
  },

  "&::-webkit-scrollbar-track": {
    background: "rgba(255, 255, 255, 0.01)",
  },

  "&::-webkit-scrollbar-thumb": {
    background: "hsla(227, 18%, 75%, 0.7)",
    backgroundClip: "content-box",

    borderRadius: "8px",
    borderLeft: "4px solid transparent",
    borderRight: "2px solid transparent",
  },
});

export const AppTemplate = () => {
  const commonPadding = {
    base: "0px",
    lg: "16px",
  };

  const sx = {
    "@supports not (height: 100dvh)": {
      height: "100vh",
    },
  };

  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  const mainRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const isMobile = useBreakpointValue({ base: true, lg: false });
  const scrollContainer = useMemo(() => {
    return isMobile ? contentRef : mainRef;
  }, [isMobile]);

  useLayoutEffect(() => {
    if (scrollContainer.current) {
      if (navigationType === "POP") {
        const scrollTop = Number(sessionStorage.getItem("scrollToTop")) || 0;
        scrollContainer.current.scrollTo(0, scrollTop);

        return;
      }

      sessionStorage.setItem(
        "scrollToTop",
        JSON.stringify(scrollContainer.current?.scrollTop)
      );
      scrollContainer.current.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <Flex height="100dvh" flexDirection="column" sx={sx}>
      {/* <Header /> */}
      <Grid
        ref={mainRef}
        as="main"
        gridTemplateAreas={{
          base: `"content" 
						   "sidebar"`,
          lg: `"sidebar content"`,
        }}
        gridTemplateColumns={{
          base: "1fr",
          lg: "216px minmax(auto, 600px)",
        }}
        gridTemplateRows={{
          base: "1fr auto",
          lg: "1fr",
        }}
        gap={{
          base: "0",
          lg: "24px",
        }}
        justifyContent="center"
        alignItems="start"
        px={commonPadding}
        overflowY={{
          base: "initial",
          lg: "auto",
        }}
        overscrollBehavior="none"
        css={scrollbarCSS}
        minHeight="0"
        flexGrow={1}
      >
        <AppSidebar
          gridArea="sidebar"
          position={{
            base: "static",
            lg: "sticky",
          }}
          top="0px"
          pt={commonPadding}
        />
        <Box
          ref={contentRef}
          gridArea="content"
          overscrollBehavior="none"
          overflowY={{
            base: "auto",
            lg: "initial",
          }}
          height="100%"
          css={scrollbarCSS}
        >
          <Outlet />
        </Box>
      </Grid>
    </Flex>
  );
};
