import { styled } from "styled-components";
import { GithubIconComponent } from "../../icons/GithubIconComponent";
import { Typography } from "../../common/Typography/Typography";

export const PortfolioSectionContainer = styled.div`
  margin: 0 auto 120px;
`;
export const PortfolioSectionHeader = styled.div`
  display: block;
  text-align: center;
  margin-bottom: 24px;
`;
export const GithubIconComponentStyled = styled(GithubIconComponent)`
  margin-bottom: 12px;
  width: 40px;
  height: 40px;
  fill: ${(props) => props.theme.colors.iconBlue};
`;
export const PortfolioTitle = styled(Typography)`
  margin-bottom: 12px;
`;
export const PortfolioSubTitle = styled(Typography)`
  margin-bottom: 24px;
`;

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
`;
