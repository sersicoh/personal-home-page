import { useState } from "react";
import {
  SunIconStyled,
  SwitcherButton,
  SwitcherButtonDot,
  SwitcherContainer,
  SwitcherText,
} from "./switchTheme.styles";

export const SwitchTheme = ({ toggleTheme, isDarkTheme }) => {
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <SwitcherContainer>
      <SwitcherText
        tag={"crumb"}
        content={`dark mode ${isDarkTheme ? `on` : `off`}`}
      />
      <SwitcherButton onClick={onToggle}>
        <SwitcherButtonDot onSwitch={isDarkTheme}>
          <SunIconStyled />
        </SwitcherButtonDot>
      </SwitcherButton>
    </SwitcherContainer>
  );
};
