import { styled } from "styled-components";
import { Typography } from "../Typography/Typography";

export const Title = styled(Typography)`
  margin-bottom: 24px;
`;
export const Description = styled(Typography)`
  margin-bottom: 24px;
`;

export const Links = styled.div`
  display: flex;
  gap: 8px;
`;

export const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-areas:
    "preffix link"
    "preffix link";
`;

export const Preffix = styled(Typography)`
  grid-area: preffix;
`;
export const Link = styled(Typography)`
  grid-area: link;
  color: blue;
`;
