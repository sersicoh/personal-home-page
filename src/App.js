import { CurrentSkills } from "./features/CurrentSkills/CurrentSkills";
import { FutureSkills } from "./features/FutureSkills/FutureSkills";
import { Header } from "./features/Header/Header";
import { theme } from "./theme";

export const App = () => {
  return (
    <>
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
    </>
  );
};
