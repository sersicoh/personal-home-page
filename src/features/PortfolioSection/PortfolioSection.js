import { Container } from "../../common/Container/Container";
import { ProjectTile } from "../../common/ProjectTile/ProjectTile";
import {
  GithubIconComponentStyled,
  PortfolioSectionContainer,
  PortfolioSectionHeader,
  PortfolioSubTitle,
  PortfolioTitle,
  ProjectContainer,
} from "./portfolioSection.styles";

export const PortfolioSection = (props) => {
  return (
    <Container>
      <PortfolioSectionContainer>
        <PortfolioSectionHeader>
          <GithubIconComponentStyled />
          <PortfolioTitle tag={"h2"} content={"Portfolio"} />
          <PortfolioSubTitle tag={"p-lead"} content={"My recent projects"} />
        </PortfolioSectionHeader>
        <ProjectContainer>
          <ProjectTile {...props} />
          <ProjectTile {...props} />
          <ProjectTile {...props} />
          <ProjectTile {...props} />
        </ProjectContainer>
      </PortfolioSectionContainer>
    </Container>
  );
};
