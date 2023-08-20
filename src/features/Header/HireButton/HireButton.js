import { HireButtonIconComponent } from "./HireButtonIconComponent";
import { ButtonContainer, ButtonTextStyled } from "./hirebutton.styles";

export const HireButton = ({ content }) => (
  <ButtonContainer href={`mailto: ${"sersicoh@gmail.com"}`}>
    <HireButtonIconComponent />
    <ButtonTextStyled>{content}</ButtonTextStyled>
  </ButtonContainer>
);
