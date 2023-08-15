import { styled } from "styled-components";
import { theme } from "../../theme";

export const ContainerStyled = styled.div`
  display: flex;
  margin: 0 auto;
  margin: ${(props) => (props.margin ? props.margin : null)};
  flex-direction: column;
  justify-content: ${(props) => (props.justify ? props.justify : null)};
  align-items: ${(props) => (props.align ? props.align : null)};
  border-radius: 4px;
  padding: ${(props) => (props.padding ? props.padding : null)};
  border: ${(props) => (props.border ? props.border : null)};
  background-color: ${(props) =>
    props.backgroundColor || theme.colors.background};
  max-width: ${theme.breakpoint.maxContentSize}px;
  box-shadow: ${(props) => (props.shadow ? props.shadow : null)};

  @media (max-width: ${theme.breakpoint.tabletMax}px) {
    align-items: ${(props) => (props.align ? props.align : null)};
  }
  @media (max-width: ${theme.breakpoint.mobileMax}px) {
    align-items: ${(props) => (props.align ? props.align : null)};
  }
`;