import { Box, Text, Grid } from "@chakra-ui/react";
import { FC } from "react";
import { ButtonComponent } from "./ButtonComponent";

export const ShopCard: FC<Props> = ({ card, canBuy }) => {
  return (
    <Box borderRadius="16px" bgColor="#1A1C22" p="24px">
      <Text mb="16px">{card.title}</Text>
      <Grid gap="24px">
        <Box>
          <Text>{card.price}</Text>
        </Box>
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
