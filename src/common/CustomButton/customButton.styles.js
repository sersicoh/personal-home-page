import { styled } from "styled-components";
export const ButtonContainer = styled.a`
  color: ${(props) => props.theme.colors.buttonText};
  display: flex;
  background-color: ${(props) => props.theme.colors.backgroundButton};
  padding: 12px 16px;
  border: 1px solid ${(props) => props.theme.colors.buttonBorder};
  max-width: max-content;
  justify-content: center;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.25s ease;
  &:hover {
    box-shadow: 0px 0px 0px 2px ${(props) => props.theme.colors.buttonFocus};
    transform: scale(95%);
  }
  &:active {
    box-shadow: 0px 2px 0px 0px ${(props) => props.theme.colors.buttonSelected} inset;
  }
`;

export const ButtonTextStyled = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;
