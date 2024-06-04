import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme, CSSReset, ColorModeScript, useColorMode } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

const Main = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [mode, setMode] = useState(localStorage.getItem("colorMode") || "light");

  useEffect(() => {
    localStorage.setItem("colorMode", mode);
  }, [mode]);

  useEffect(() => {
    if (colorMode !== mode) {
      toggleColorMode();
    }
  }, [colorMode, mode, toggleColorMode]);

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
