import { CustomButtonIconComponent } from "./CustomButtonIconComponent";
import { ButtonContainer, ButtonTextStyled } from "./customButton.styles";

export const CustomButton = ({ icon, content, href }) => (
  <ButtonContainer href={href}>
    {icon ? <CustomButtonIconComponent /> : null}
    <ButtonTextStyled>{content}</ButtonTextStyled>
  </ButtonContainer>
);
