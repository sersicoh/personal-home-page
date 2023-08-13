import { styled } from "styled-components";
import { theme } from "../../theme";
import { ButtonIconComponent } from "./ButtonIconComponent";

export const ButtonStyled = styled.div`
  display: flex;
  width: 154px;
  height: 49px;
  background-color: ${theme.colors.button};
  color: ${theme.colors.white};
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
export const ButtonIconStyled = styled(ButtonIconComponent)``;
export const ButtonTextStyled = styled.div`
//TODO zamienić div na typography i ostylowac jak w przypadku headera
`;
