import useDesktop from "../../hooks/useDesktop";
import { CustomButtonIconComponent } from "./CustomButtonIconComponent";
import { ButtonContainer, ButtonTextStyled } from "./customButton.styles";

export const CustomButton = ({ icon, content, href, rel, target }) => {
  const isDesktop = useDesktop();
  return (
    <ButtonContainer href={href} rel={rel} target={target}>
      {icon ? (
        <CustomButtonIconComponent
          width={isDesktop ? 24 : 20}
          height={isDesktop ? 24 : 20}
        />
      ) : null}
      <ButtonTextStyled>{content}</ButtonTextStyled>
    </ButtonContainer>
  );
};
