import { Grid, Text } from "@chakra-ui/react";
import { AppTabs, InfoBlock, ShopCard } from "../components";

export const ShopPage = () => {
  return (
    <Grid gap="24px">
      <Text
        size="h30/48"
        variant="medium"
        paddingX={{
          base: "16px",
          lg: 0,
        }}
      >
        Магазин
      </Text>
      <InfoBlock text="Мы готовимся к открытию, а пока вы можете посмотреть примеры товаров и прислать нам свои идеи" />
      <AppTabs
        tabs={[
          {
            label: "Доступные товары",
            component: (
              <Grid gap="16px">
                <ShopCard />
              </Grid>
            ),
          },
          {
            label: "Мои заказы",
            component: (
              <Grid gap="16px">
                <ShopCard />
              </Grid>
            ),
          },
        ]}
      />
    </Grid>
  );
};

// const shopCards = [
//   {
//     title: "Выходной день",
//     price: 500,
//     icon: 1,
//   },
// ];
