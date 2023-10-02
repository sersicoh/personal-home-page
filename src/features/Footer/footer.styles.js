import { styled } from "styled-components";
import { Typography } from "../../common/Typography/Typography";
import { GithubIconComponent } from "../../icons/GithubIconComponent";
import { FacebookIconComponent } from "../../icons/FacebookIconComponent";
import { LinkedinIconComponent } from "../../icons/LinkedinIconComponent";
import { breakpoints } from "../../theme";

export const FooterCrumb = styled(Typography)`
  margin-bottom: 24px;

  @media (max-width: ${breakpoints.tabletMax}px) {
    margin-bottom: 12px;
  }
`;
export const Mail = styled(Typography)`
  margin-bottom: 24px;

  @media (max-width: ${breakpoints.tabletMax}px) {
    margin-bottom: 12px;
  }
`;

export const FooterDescription = styled(Typography)`
  margin-bottom: 56px;
  width: 60%;

  @media (max-width: ${breakpoints.tabletMax}px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 109px;

  @media (max-width: ${breakpoints.tabletMax}px) {
    gap: 16px;
    margin-bottom: 31px;
  }
`;

export const GithubIconStyled = styled(GithubIconComponent)`
  transition: all 0.25s ease;
  :hover {
    fill: ${(props) => props.theme.colors.iconHover};
  }
`;
export const FacebookIconStyled = styled(FacebookIconComponent)`
  transition: all 0.25s ease;
  :hover {
    fill: ${(props) => props.theme.colors.iconHover};
  }
`;
export const LinkedinIconStyled = styled(LinkedinIconComponent)`
  transition: all 0.25s ease;
  :hover {
    fill: ${(props) => props.theme.colors.iconHover};
  }
`;
//TODO dokonczyc linkowanie i stylowanie ikon
export const LinkIconContainer = styled.a`
  :active {
    fill: ${(props) => props.theme.colors.iconHover};
  }
`;
