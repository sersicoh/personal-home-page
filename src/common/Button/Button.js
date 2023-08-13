import {
  ButtonIconStyled,
  ButtonStyled,
  ButtonTextStyled,
} from "./button.styles";

export const Button = ({ children }) => (
  <ButtonStyled>
    <ButtonIconStyled />
    <ButtonTextStyled>{children}</ButtonTextStyled>
  </ButtonStyled>
);
