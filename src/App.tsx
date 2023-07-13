import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { AppRoutes } from "./AppRoutes";
import { theme } from "./utils";

const emotionCache = createCache({
  key: "emotion-css-cache",
  prepend: true,
});

const App = () => {
  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={theme}>
        <AppRoutes />
      </ChakraProvider>
    </CacheProvider>
  );
};

export default App;
