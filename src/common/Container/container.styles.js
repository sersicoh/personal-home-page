import { styled } from "styled-components";
import { breakpoints } from "../../theme";

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
    props.color || props.theme.colors.backgroundContainer};
  max-width: ${(props) => props.maxContentSize || breakpoints.maxContentSize}px;
  box-shadow: ${(props) => (props.shadow ? props.shadow : null)};
  transition: ${(props) => (props.transition ? `all 0.7s ease` : null)};
  &:hover {
    border-color: ${(props) => (props.hoverColor ? props.hoverColor : null)};
  }

  @media (max-width: ${breakpoints.tabletMax}px) {
    align-items: ${(props) => (props.align ? props.align : null)};
  }
  @media (max-width: ${breakpoints.mobileMax}px) {
    align-items: ${(props) => (props.align ? props.align : null)};
  }
`;
