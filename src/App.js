import { ThemeProvider } from "styled-components";
import { WorkInProgressComponent } from "./WorkInProgressComponent.styles";
import { Header } from "./features/Header/Header";
import { PortfolioSection } from "./features/PortfolioSection/PortfolioSection";
import { Footer } from "./features/Footer/Footer";
import { theme } from "./theme";
import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { content } from "./content";
import { SkillsContainer } from "./common/SkillsContainer/SkillsContainer";

export const App = () => {
  const [currentTheme, setTheme] = useState("darkMode");
  const isDarkTheme = currentTheme === "darkMode";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "lightMode" : "darkMode");
  };
  const selectedTheme = isDarkTheme ? theme.darkMode : theme.lightMode;
  //TODO ogarnac breakpointy
  //TODO zrobic mobile
  //TODO uzupelnic tresci
  //TODO posprzatac po sobie, przerzec tak by ewentualnie poprzenosic w bardziej odpowiednie miejsca
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle backgroundColor={selectedTheme.colors.background} />
      <WorkInProgressComponent>
        Page still work in progress <br /> Strona nadal w budowie
      </WorkInProgressComponent>
      <Header
        margin="120px auto 72px"
        color={selectedTheme.colors.background}
        isDarkTheme={isDarkTheme}
        toggleTheme={toggleTheme}
        transition
        content={content.person}
      />
      {content.skillsTypes.map((skillType) => (
        <SkillsContainer
          key={skillType}
          align={"flex-start"}
          shadow={`0px 16px 58px 0px ${selectedTheme.colors.shadow}`}
          margin="0px auto 72px"
          transition
          content={skillType}
        />
      ))}
      <PortfolioSection
        shadow={`0px 16px 58px 0px ${selectedTheme.colors.shadow}`}
        padding="56px"
        border={`6px solid ${selectedTheme.colors.border}`}
        transition
        hoverColor={selectedTheme.colors.projectTileOnHover}
      />
      <Footer
        content={content.footer}
        color={selectedTheme.colors.background}
        transition
      />
    </ThemeProvider>
  );
};
