import { FC, ReactNode, useState } from "react";
import { Box, BoxProps, Flex, Button } from "@chakra-ui/react";
import { css } from "@emotion/react";

export const AppTabs: FC<TabsProps> = ({ tabs, labelsStyles }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!tabs || !tabs.length) return null;

  return (
    <Box>
      <Flex
        overflow="hidden"
        marginBottom="24px"
        width="fit-content"
        {...labelsStyles}
      >
        {tabs.map(({ label }, index) => (
          <Button
            key={label}
            css={[styles.tab, activeTab === index && styles.activeTab]}
            type="button"
            onClick={() => setActiveTab(index)}
          >
            {label}
          </Button>
        ))}
      </Flex>
      <Box key={tabs[activeTab].label}>{tabs[activeTab].component}</Box>
    </Box>
  );
};

interface TabsProps {
  tabs: Array<{
    label: string;
    component: ReactNode;
  }>;
  labelsStyles?: BoxProps;
}

const styles = {
  tab: css({
    padding: "8px 16px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "14px",
    fontWeight: "500",
    borderRadius: "0",
    "&:first-of-type": {
      borderTopLeftRadius: "8px",
      borderBottomLeftRadius: "8px",
    },
    "&:last-child": {
      borderTopRightRadius: "8px",
      borderBottomRightRadius: "8px",
    },
    "&:hover, &:active": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      color: "white",
    },
  }),
  activeTab: css({
    backgroundColor: "#FFBF3E",
    color: "#1D2532",

    "&:hover, &:active": {
      backgroundColor: "#FFBF3E",
      color: "#1D2532",
      cursor: "default",
    },
  }),
};
