import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "motion/react";

import { AppRoutes } from "@routes/Routes.tsx";

import { SplashScreen } from "@components/SplashScreen";

import { theme } from "@theme/theme.ts";
import { GlobalStyle } from "@theme/global.ts";

export const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const initialSplash = document.getElementById("initial-splash");

    if (initialSplash) {
      initialSplash.classList.add("initial-splash-hidden");
      setTimeout(() => {
        initialSplash.style.display = "none";
      }, 300);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && <AppRoutes />}
    </ThemeProvider>
  );
};
