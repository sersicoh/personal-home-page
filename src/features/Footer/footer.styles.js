import { styled } from "styled-components";
import { Typography } from "../../common/Typography/Typography";
import { GithubIconComponent } from "../../icons/GithubIconComponent";
import { FacebookIconComponent } from "../../icons/FacebookIconComponent";
import { LinkedinIconComponent } from "../../icons/LinkedinIconComponent";

export const FooterCrumb = styled(Typography)`
  margin-bottom: 24px;
`;
export const Mail = styled(Typography)`
  margin-bottom: 24px;
`;

export const FooterDescription = styled(Typography)`
  margin-bottom: 56px;
  width: 60%;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 109px;
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
export const LinkIconContainer = styled.a``;
