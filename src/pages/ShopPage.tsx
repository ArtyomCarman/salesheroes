import { Grid, Text } from "@chakra-ui/react";
import { AppTabs, InfoBlock, ShopCard } from "../components";
import { ReactComponent as ShopTreeSVG } from "../assets/icons/shop-tree.svg";
import { ReactComponent as ShopFlowerSVG } from "../assets/icons/shop-flower.svg";
import { ReactComponent as ShopDinnerSVG } from "../assets/icons/shop-dinner.svg";
import { ReactComponent as ShopCarSVG } from "../assets/icons/shop-car.svg";

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
      <AppTabs tabs={tabs} />
    </Grid>
  );
};

const shopCards = [
  {
    title: "Выходной день",
    price: 560,
    icon: <ShopTreeSVG />,
    hasBg: true,
  },
  {
    title: "Абонемент на тренинг «Счастье и искусство жить»",
    price: 500,
    icon: <ShopFlowerSVG />,
  },
  {
    title: "Обед с Председателем",
    price: 430,
    icon: <ShopDinnerSVG />,
  },
  {
    title: "Машина из автопарка Сбера на неделю",
    price: 250,
    icon: <ShopCarSVG />,
  },
];

const tabs = [
  {
    label: "Доступные товары",
    component: (
      <Grid gap="16px">
        {shopCards.map((card) => (
          <ShopCard card={card} canBuy />
        ))}
      </Grid>
    ),
  },
  {
    label: "Мои заказы",
    component: (
      <Grid gap="16px">
        {shopCards.slice(3, 4).map((card) => (
          <ShopCard card={card} />
        ))}
      </Grid>
    ),
  },
];
