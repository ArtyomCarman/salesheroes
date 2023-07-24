import { FC } from "react";
import { Box, Fade, Flex, Text } from "@chakra-ui/react";
import { news } from "../models";

import { CommunityLikesButtonAndAmountContainer as LikesButtonAndAmount } from "./CommunityLikesButtonAndAmountContainer";
import { INews } from "../interfaces";

export const CommunityLikesContainer: FC<Props> = ({ newsId }) => {
  const { likes } = news.timePeriod
    .flatMap(({ news }) => news)
    .find((item) => item.newsId === newsId) as INews;
  return (
    <Fade in>
      <Flex flexDirection="column" gap="16px">
        {likes.bossNames?.length && (
          <Box>
            <Text as="span" size="body14/20" variant="regular">
              Нравится руководителям:
            </Text>{" "}
            <Text as="span" size="body14/20" variant="semibold">
              {likes.bossNames.join(", ")}
            </Text>
          </Box>
        )}

        <LikesButtonAndAmount result={likes} newsId={newsId} />
      </Flex>
    </Fade>
  );
};

interface Props {
  newsId: string;
}
