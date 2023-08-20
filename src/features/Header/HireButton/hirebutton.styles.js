import { styled } from "styled-components";
import { theme } from "../../../theme";
export const ButtonContainer = styled.button`
  color: ${theme.colors.white};
  display: flex;
  background-color: ${theme.colors.mainBlue};
  padding: 12px 16px;
  border: 1px solid ${theme.colors.buttonBorder};
  max-width: max-content;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 4px;
  &:hover {
    box-shadow: 0px 0px 0px 2px ${theme.colors.buttonFocus};
  }
  &:active {
    box-shadow: 0px 2px 0px 0px ${theme.colors.buttonSelected} inset;
  }
`;

export const ButtonTextStyled = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;
