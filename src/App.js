import { WorkInProgressComponent } from "./WorkInProgressComponent.styles";
import { CurrentSkills } from "./features/CurrentSkills/CurrentSkills";
import { Footer } from "./features/Footer/Footer";
import { FutureSkills } from "./features/FutureSkills/FutureSkills";
import { Header } from "./features/Header/Header";
import { PortfolioSection } from "./features/PortfolioSection/PortfolioSection";
import { theme } from "./theme";

export const App = () => {
  return (
    <>
      <WorkInProgressComponent>
        Page still work in progress <br /> Strona nadal w budowie
      </WorkInProgressComponent>
      <Header margin="120px auto 72px" />
      <CurrentSkills
        align={"flex-start"}
        backgroundColor={theme.colors.white}
        shadow={`0px 16px 58px 0px ${theme.colors.shadow}`}
        padding="32px"
        margin="0px auto 72px"
      />
      <FutureSkills
        align={"flex-start"}
        backgroundColor={theme.colors.white}
        shadow={`0px 16px 58px 0px ${theme.colors.shadow}`}
        padding="32px"
        margin="0px auto 72px"
      />
      <PortfolioSection
        backgroundColor={theme.colors.white}
        shadow={`0px 16px 58px 0px ${theme.colors.shadow}`}
        padding="56px"
        border={`6px solid ${theme.colors.border}`}
        hoverColor={theme.colors.projectTileOnHover}
      />
      <Footer />
    </>
  );
};
