import { CustomButtonIconComponent } from "./CustomButtonIconComponent";
import { ButtonContainer, ButtonTextStyled } from "./customButton.styles";

export const CustomButton = ({ icon, content, href, rel, target }) => (
  <ButtonContainer href={href} rel={rel} target={target}>
    {icon ? <CustomButtonIconComponent /> : null}
    <ButtonTextStyled>{content}</ButtonTextStyled>
  </ButtonContainer>
);
