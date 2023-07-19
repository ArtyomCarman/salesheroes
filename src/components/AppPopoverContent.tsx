import { FC, MouseEvent, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  Box,
  Grid,
  SlideFade,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useAppPopoverContext } from "../contexts";
import { useClickOutside } from "../hooks";
import { scrollbarCSS } from "../utils";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";

export const AppPopoverContent: FC<Props> = ({ targetRect, resetRect }) => {
  const { header, content } = useAppPopoverContext();

  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    if (ref.current) {
      const { height, width } = ref.current.getBoundingClientRect();

      const SCROLLBAR_WIDTH = 12;
      const CLIENT_WIDTH = window.innerWidth - SCROLLBAR_WIDTH;

      let coordY = targetRect.top - height;
      if (coordY < 0) {
        coordY = targetRect.bottom;
      }

      let coordX = targetRect.left;
      if (targetRect.left + width > CLIENT_WIDTH) {
        coordX = targetRect.right - width;
      }

      setPosition({
        x: coordX,
        y: coordY,
      });
    }
  }, [targetRect]);

  const isMobile = useBreakpointValue({ base: true, lg: false });
  const contentRef = useRef(null);

  useClickOutside({
    enabled: isMobile,
    ref: contentRef,
    handler: resetRect,
  });

  const handleClose = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    resetRect();
  };

  return createPortal(
    <Grid
      ref={ref}
      position="fixed"
      // use variable instaed number
      zIndex="2"
      left={{ base: 0, lg: `${position.x}px` }}
      top={{ base: 0, lg: `${position.y}px` }}
      bottom={{ base: 0, lg: "auto" }}
      right={{ base: 0, lg: "auto" }}
      paddingY={{
        base: "0px",
        lg: "8px",
      }}
      paddingTop={{
        base: "56px",
        lg: "8px",
      }}
      backdropFilter={{ base: "blur(4px)", lg: "blur(0)" }}
      bgColor={{
        base: "rgba(87, 92, 112, 0.5)",
        lg: "transparent",
      }}
      alignItems="flex-end"
    >
      <SlideFade
        in
        ref={contentRef}
        // css={{
        //   display: "flex",
        //   minHeight: 0,
        //   maxHeight: "450px",
        // }}
      >
        <Box
          width={{
            base: "100%",
            lg: "280px",
          }}
          maxH={{
            base: "450px",
            lg: "384px",
          }}
          bg={{
            base: "linear-gradient(0deg, rgba(87, 92, 112, 0.3), rgba(87, 92, 112, 0.3)), #000000",
            lg: "rgba(87, 92, 112, 1)",
          }}
          color="rgba(255, 255, 255, 1)"
          borderRadius={{
            base: "16px 16px 0 0",
            lg: "8px",
          }}
          display="flex"
          flexDirection="column"
        >
          <Grid
            display={{
              base: "grid",
              lg: "none",
            }}
            templateColumns="1fr 72px"
            p="24px 16px"
          >
            <Text size="sub20/28" variant="medium">
              {header}
            </Text>
            <Grid
              justifyContent="end"
              alignContent="center"
              onClick={handleClose}
              cursor="pointer"
            >
              <CloseIcon width="24px" />
            </Grid>
          </Grid>
          <Box overflowY="auto" css={scrollbarCSS}>
            {content}
          </Box>
        </Box>
      </SlideFade>
    </Grid>,
    document.body
  );
};

interface Props {
  targetRect: DOMRect;
  resetRect: () => void;
}
