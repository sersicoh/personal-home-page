import { ThemeProvider } from "styled-components";
import { WorkInProgressComponent } from "./WorkInProgressComponent.styles";
import { Header } from "./features/Header/Header";
import { CurrentSkills } from "./features/CurrentSkills/CurrentSkills";
import { FutureSkills } from "./features/FutureSkills/FutureSkills";
import { PortfolioSection } from "./features/PortfolioSection/PortfolioSection";
import { Footer } from "./features/Footer/Footer";
import { theme } from "./theme";
import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  const [currentTheme, setTheme] = useState("lightMode");
  const isDarkTheme = currentTheme === "darkMode";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "lightMode" : "darkMode");
  };
  const selectedTheme = isDarkTheme ? theme.darkMode : theme.lightMode;

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle backgroundColor={selectedTheme.colors.background} />
      <WorkInProgressComponent>
        Page still work in progress <br /> Strona nadal w budowie
      </WorkInProgressComponent>
      <Header
        margin="120px auto 72px"
        color={selectedTheme.colors.background}
      />
      <CurrentSkills
        align={"flex-start"}
        shadow={`0px 16px 58px 0px ${selectedTheme.colors.shadow}`}
        padding="32px"
        margin="0px auto 72px"
      />
      <FutureSkills
        align={"flex-start"}
        shadow={`0px 16px 58px 0px ${selectedTheme.colors.shadow}`}
        padding="32px"
        margin="0px auto 72px"
      />
      <PortfolioSection
        shadow={`0px 16px 58px 0px ${selectedTheme.colors.shadow}`}
        padding="56px"
        border={`6px solid ${selectedTheme.colors.border}`}
        transition
        hoverColor={selectedTheme.colors.projectTileOnHover}
      />
      <Footer color={selectedTheme.colors.background} />
    </ThemeProvider>
  );
};
