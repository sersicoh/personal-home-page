import { styled } from "styled-components";
import { theme } from "../../theme";

export const ContainerStyled = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color || theme.colors.background};
  max-width: ${theme.breakpoint.maxContentSize}px;

  @media (max-width: ${theme.breakpoint.tabletMax}px) {
    align-items: flex-start;
  }
  @media (max-width: ${theme.breakpoint.mobileMax}px) {
    align-items: flex-end;
  }
`;
