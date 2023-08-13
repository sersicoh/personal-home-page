import { styled } from "styled-components";
import { theme } from "../../theme";

export const ContainerStyled = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: ${(props) => (props.padding ? `32px` : null)};
  border: ${(props) => (props.border ? `6px solid ${theme.colors.border}` : null)};
  background-color: ${(props) =>
    props.backgroundColor || theme.colors.background};
  max-width: ${theme.breakpoint.maxContentSize}px;
  box-shadow: ${(props) =>
    props.shadow ? `0px 16px 58px 0px ${theme.colors.shadow}` : null};

  @media (max-width: ${theme.breakpoint.tabletMax}px) {
    align-items: flex-start;
  }
  @media (max-width: ${theme.breakpoint.mobileMax}px) {
    align-items: flex-end;
  }
`;
