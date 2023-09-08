import { Box, Text, Grid, Flex, Spinner, Button } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { ButtonComponent } from "./ButtonComponent";
import ShopTreePng from "../assets/images/shop-tree.png";
import { ReactComponent as DiamondIcon } from "../assets/icons/diamond.svg";

export const ShopCard: FC<Props> = ({ card, canBuy }) => {
  return (
    <Box
      borderRadius="16px"
      overflow="hidden"
      bgColor="#1A1C22"
      bg={card.hasBg ? `url(${ShopTreePng})` : undefined}
      bgSize="cover"
    >
      <Box
        p={{
          base: "24px 16px",
          lg: "24px",
        }}
        bg={
          card.hasBg
            ? "linear-gradient(0deg, rgba(91, 67, 6, 0.54) 0%, rgba(0, 0, 0, 0.00) 74.47%), linear-gradient(0deg, rgba(0, 0, 0, 0.29) 0%, rgba(0, 0, 0, 0.29) 100%), linear-gradient(270deg, rgba(104, 11, 78, 0.64) 0%, rgba(6, 14, 84, 0.72) 78.65%)"
            : undefined
        }
      >
        <Text mb="16px" size="sub20/28" variant="semibold">
          {card.title}
        </Text>
        <Grid templateColumns="1fr auto" gap="8px" alignItems="start">
          <Grid gap="24px">
            <Flex gap="8px">
              <Text>{card.price}</Text>
              <DiamondIcon width="24px" height="24px" />
            </Flex>
            {canBuy && (
              <Button
                border-radius="8px"
                padding="12px 20px"
                bgColor="rgba(255, 255, 255, 0.1)"
                height="auto"
                width="min-content"
                cursor="auto"
                _hover={{
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <Text
                  color="rgba(255, 255, 255, 0.8)"
                  size="body14/24"
                  variant="medium"
                >
                  Приобрести
                </Text>
              </Button>
            )}
          </Grid>
          <Box mb="-12px">{card.icon}</Box>
        </Grid>
      </Box>
    </Box>
  );
};

interface Props {
  card: {
    title: string;
    price: number;
    icon: ReactNode;
    hasBg?: boolean;
  };
  canBuy?: boolean;
}
