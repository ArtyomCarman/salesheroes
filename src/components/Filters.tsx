import { FC, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Button, Flex, FlexProps } from "@chakra-ui/react";
import { css } from "@emotion/react";

const styles = {
  filter: css({
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
    "&:last-of-type": {
      borderTopRightRadius: "8px",
      borderBottomRightRadius: "8px",
    },
    "&:hover, &:active": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      color: "white",
    },
  }),
  activeFilter: css({
    backgroundColor: "#FFBF3E",
    color: "#1D2532",

    "&:hover, &:active": {
      backgroundColor: "#FFBF3E",
      color: "#1D2532",
      cursor: "default",
    },
  }),
};

export const Filters: FC<FiltersProps> = ({
  filters,
  searchParam,
  ...otherProps
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = useMemo(() => {
    const searchParamValue = searchParams.get(searchParam);
    const isSearchParamValid = filters.some(
      ({ value }) => value === searchParamValue
    );

    return isSearchParamValid ? searchParamValue : filters[0].value;
  }, [filters, searchParams, searchParam]);

  const handleFilterClick = (value: string) => () => {
    setSearchParams(
      (params) => {
        params.set(searchParam, value);

        return params;
      },
      {
        replace: true,
      }
    );
  };

  return (
    <Flex overflow="hidden" width="fit-content" {...otherProps}>
      {filters.map(({ label, value }) => (
        <Button
          key={label}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line react/no-unknown-property
          css={[styles.filter, activeFilter === value && styles.activeFilter]}
          type="button"
          onClick={handleFilterClick(value)}
        >
          {label}
        </Button>
      ))}
    </Flex>
  );
};

interface FiltersProps extends FlexProps {
  searchParam: string;
  filters: Array<{
    label: string;
    value: string;
  }>;
}
