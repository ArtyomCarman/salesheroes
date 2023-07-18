import { useRef, useMemo, useEffect } from "react";
import { Outlet, useLocation, useNavigationType } from "react-router-dom";
import { Grid, Flex, Box, useBreakpointValue } from "@chakra-ui/react";
import { AppSidebar } from "./AppSidebar";
import { AppHeader } from "./AppHeader";
import { scrollbarCSS, throttle } from "../utils";
import { useIsFirstRender } from "../hooks";

export const AppTemplate = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const isFirst = useIsFirstRender();

  const mainRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const scrollContainer = useMemo(
    () => (isMobile ? contentRef : mainRef),
    [isMobile]
  );

  const scrollTop = useRef(0);
  const prevScrollTop = useRef(0);

  useEffect(() => {
    if (scrollContainer.current) {
      if (navigationType === "POP" && !isFirst) {
        scrollContainer.current.scrollTo(0, prevScrollTop.current);
        return;
      }

      prevScrollTop.current = scrollTop.current;

      scrollContainer.current.scrollTo({
        top: 0,
        left: 0,
        behavior: navigationType === "PUSH" ? "auto" : "smooth",
      });
    }
  }, [location, navigationType]);

  useEffect(() => {
    if (scrollContainer.current) {
      const handleScroll = throttle(() => {
        scrollTop.current = scrollContainer.current?.scrollTop || 0;
      }, 1000);

      scrollContainer.current.addEventListener("scroll", handleScroll);

      return () =>
        scrollContainer.current?.removeEventListener("scroll", handleScroll);
    }
  }, [scrollContainer]);

  return (
    <Flex height="100dvh" flexDirection="column" sx={sx}>
      <AppHeader />
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
          <Box pt="16px" pb={{ base: "56px", lg: "64px" }}>
            <Outlet />
          </Box>
        </Box>
      </Grid>
    </Flex>
  );
};

const commonPadding = {
  base: "0px",
  lg: "16px",
};

const sx = {
  "@supports not (height: 100dvh)": {
    height: "100vh",
  },
};
