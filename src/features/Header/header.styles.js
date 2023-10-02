import { styled } from "styled-components";
import { Typography } from "../../common/Typography/Typography";
import { breakpoints } from "../../theme";

export const HeaderBanner = styled.section`
  display: grid;
  width: 100%;
  justify-content: center;
  grid-template-columns: minmax(300px, 1fr) 2fr;
  column-gap: 72px;
  grid-template-areas:
    "selfie darkMode"
    "selfie crumb"
    "selfie name"
    "selfie description"
    "selfie button";

  @media (max-width: ${breakpoints.tabletMax}px) {
    column-gap: 36px;
  }

  @media (max-width: ${breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "darkMode"
      "selfie"
      "crumb"
      "name"
      "description"
      "button";
  }
`;

export const SelfieImageContainer = styled.section`
  grid-area: selfie;
  width: 100%;

  @media (max-width: ${breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    min-width: 128px;
    max-width: 40%;
    padding-bottom: 16px;
  }
`;
export const SelfieImage = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 50%;
`;
export const DarkModeSwitcher = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 38px;
  align-items: center;

  @media (max-width: ${breakpoints.mobileMax}px) {
    padding: 0;
    position: absolute;
    right: 17px;
    top: 21px;
    translate: translateY(-50%);
  }
`;
export const HeaderCrumb = styled(Typography)`
  grid-area: crumb;
  padding-bottom: 12px;

  @media (max-width: ${breakpoints.tabletMax}px) {
    padding-bottom: 8px;
  }
`;
export const HeaderName = styled(Typography)`
  grid-area: name;
  padding-bottom: 35px;

  @media (max-width: ${breakpoints.tabletMax}px) {
    padding-bottom: 16px;
  }
`;
export const HeaderDescription = styled(Typography)`
  grid-area: description;
  padding-bottom: 32px;

  @media (max-width: ${breakpoints.tabletMax}px) {
    padding-bottom: 24px;
  }
`;

export const HeaderButton = styled.div`
  grid-area: button;
  padding-bottom: 70px;

  @media (max-width: ${breakpoints.tabletMax}px) {
    padding-bottom: 48px;
  }
`;
