import { ContainerStyled } from "./container.styles";

export const Container = ({ children, backgroundColor, shadow, padding, border }) => (
  <ContainerStyled
    backgroundColor={backgroundColor}
    shadow={shadow}
    padding={padding}
    border={border}
  >
    {children}
  </ContainerStyled>
);
