import {CacheProvider} from "@emotion/react";
import {theme, ChakraProvider} from "@chakra-ui/react";
import {AppRoutes} from "./AppRoutes";
import createCache from '@emotion/cache';

const emotionCache = createCache({
  key: 'emotion-css-cache',
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
}

export default App;
