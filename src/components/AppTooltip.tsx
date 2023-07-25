import { FC, ReactNode } from "react";
import { BoxProps, Text } from "@chakra-ui/react";

import { AppPopoverContainer } from "./AppPopoverContainer";

export const AppTooltip: FC<Props> = ({
  children,
  text,
  header = "Дополнительная информация",
  ...boxProps
}) => {
  return (
    <AppPopoverContainer
      header={header}
      content={
        text ? (
          <Text
            size="caption12/16"
            variant="medium"
            p={{
              base: "0px 16px 22px",
              lg: "8px 12px",
            }}
          >
            {text}
          </Text>
        ) : null
      }
      cursor="help"
      {...boxProps}
    >
      {children}
    </AppPopoverContainer>
  );
};

interface Props extends BoxProps {
  text?: ReactNode;
  header?: string;
}
