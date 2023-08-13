import { HireButtonIconComponent } from "./HireButtonIconComponent";
import { ButtonContainer, ButtonTextStyled } from "./hirebutton.styles";

export const HireButton = ({ content }) => (
  <ButtonContainer>
    <HireButtonIconComponent />
    <ButtonTextStyled>{content}</ButtonTextStyled>
  </ButtonContainer>
);
