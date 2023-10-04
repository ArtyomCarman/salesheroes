import { Button, ChakraProvider, FormControl, Input } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { AppRoutes } from "./AppRoutes";
import { theme } from "./utils";
import { useState } from "react";

const emotionCache = createCache({
  key: "emotion-css-cache",
  prepend: true,
});

const App = () => {
  const [isVerified, setIsVerified] = useState(false);

  const checkPw = () => {
    const answer = (document.getElementById("password") as HTMLInputElement)
      ?.value;

    if (answer === "q12345678") {
      setIsVerified(true);
    } else {
      alert("Неверный пароль");
    }
  };

  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={theme}>
        {isVerified ? (
          <AppRoutes />
        ) : (
          <form onSubmit={checkPw}>
            <Input
              placeholder="Введите пароль"
              type="password"
              id="password"
              name="password"
              width="300px"
            />
            <Button width="300px" type="submit">
              Войти
            </Button>
          </form>
        )}
      </ChakraProvider>
    </CacheProvider>
  );
};

export default App;
