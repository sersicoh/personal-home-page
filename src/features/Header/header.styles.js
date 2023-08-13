import { styled } from "styled-components";

export const HeaderBanner = styled.section`
  display: grid;
  width: 100%;
  margin-top: 100px;
  justify-content: center;
  grid-template-columns: max-content 1fr;
  grid-template-areas:
    "selfie darkMode"
    "selfie whiteSpace"
    "selfie crumb"
    "selfie name"
    "selfie description"
    "selfie button";
`;

export const SelfieImage = styled.img`
  grid-area: selfie;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  margin-right: 60px;
`;
export const HeaderDarkMode = styled.div``;
export const HeaderCrumb = styled.div`
  grid-area: crumb;
  padding-bottom: 10px;
`;
export const HeaderName = styled.div`
  grid-area: name;
  padding-bottom: 30px;
`;
export const HeaderDescription = styled.div`
  grid-area: description;
  padding-bottom: 30px;
`;

export const HeaderButton = styled.div`
  grid-area: button;
  padding-bottom: 70px;
`;
