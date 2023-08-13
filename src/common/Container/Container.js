import { ContainerStyled } from "./container.styles";

export const Container = ({ children, color }) => (
  <ContainerStyled color={color}>{children}</ContainerStyled>
);
