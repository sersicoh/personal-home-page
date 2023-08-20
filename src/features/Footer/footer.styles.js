import { styled } from "styled-components";
import { Typography } from "../../common/Typography/Typography";
import { theme } from "../../theme";
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
  :hover {
    fill: ${theme.colors.mainBlue};
  }
`;
export const FacebookIconStyled = styled(FacebookIconComponent)`
  :hover {
    fill: ${theme.colors.mainBlue};
  }
`;
export const LinkedinIconStyled = styled(LinkedinIconComponent)`
  :hover {
    fill: ${theme.colors.mainBlue};
  }
`;
