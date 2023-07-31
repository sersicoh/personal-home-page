import { SelfieImageStyled } from "./selfieImage.styles";

export const SelfieImage = ({ image }) => (
  <SelfieImageStyled src={image} alt="My profile Photo" />
);
