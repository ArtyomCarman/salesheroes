import { Box, Text, Grid, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { ButtonComponent } from "./ButtonComponent";
import ShopTreePng from "../assets/images/shop-tree.png";
import { ReactComponent as DiamondIcon } from "../assets/icons/diamond.svg";

export const ShopCard: FC<Props> = ({ card, canBuy }) => {
  return (
    <Box
      borderRadius="16px"
      bgColor="#1A1C22"
      p="24px"
      bg={`url(${ShopTreePng})`}
      bgSize="cover"
      backdropFilter="opacity(.54)"
    >
      <Text mb="16px">{card.title}</Text>
      <Grid gap="24px">
        <Flex gap="8px">
          <Text>{card.price}</Text>
          <DiamondIcon width="24px" height="24px" />
        </Flex>
        {canBuy && (
          <ButtonComponent
            text="Приобрести"
            onClick={() => {}}
            w="min-content"
          />
        )}
      </Grid>
    </Box>
  );
};

interface Props {
  card: {
    title: string;
    price: number;
    icon: number;
  };
  canBuy?: boolean;
}
