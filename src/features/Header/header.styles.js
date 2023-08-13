import { styled } from "styled-components";
import { Typography } from "../../common/Typography/Typography";
import { Button } from "../../common/Button/Button";

export const HeaderBanner = styled.section`
  display: grid;
  width: 100%;
  justify-content: center;
  grid-template-columns: max-content 1fr;
  grid-template-areas:
    "selfie whiteSpace"
    "selfie crumb"
    "selfie name"
    "selfie description"
    "selfie button";
`;

export const SelfieImage = styled.img`
  grid-area: selfie;
  border-radius: 50%;
  margin-right: 50px;
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

export const HeaderButton = styled(Button)`
  grid-area: button;
`;
