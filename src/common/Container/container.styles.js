import { styled } from "styled-components";
import { theme } from "../../theme";

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${theme.breakpoint.maxContentSize}px;

  @media (max-width: ${theme.breakpoint.tabletMax}px) {
    align-items: flex-start;
  }
  @media (max-width: ${theme.breakpoint.mobileMax}px) {
    align-items: flex-end;
  }
`;
