import { styled } from "styled-components";
import { Typography } from "../../common/Typography/Typography";

export const HeaderBanner = styled.section`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-areas:
    "selfie crumb"
    "selfie name"
    "selfie description"
    "selfie button";
`;

export const SelfieImage = styled.img`
  grid-area: selfie;
  border-radius: 20%;
`;
export const HeaderCrumb = styled(Typography)`
  grid-area: crumb;
`;
export const HeaderName = styled(Typography)`
  grid-area: name;
`;
export const HeaderDescription = styled(Typography)`
  grid-area: description;
`;
