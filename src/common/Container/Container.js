import { ContainerStyled } from "./container.styles";

export const Container = ({ children, ...props }) => (
  <ContainerStyled {...props}>{children}</ContainerStyled>
);
