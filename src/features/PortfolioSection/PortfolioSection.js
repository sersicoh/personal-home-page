import { Container } from "../../common/Container/Container";
import {
  GithubIconComponentStyled,
  PortfolioSectionContainer,
  PortfolioSectionHeader,
  PortfolioSubTitle,
  PortfolioTitle,
} from "./portfolioSection.styles";

export const PortfolioSection = () => {

  //TODO zrobić kontenery dla stron
  return (
    <Container>
      <PortfolioSectionContainer>
        <PortfolioSectionHeader>
          <GithubIconComponentStyled />
          <PortfolioTitle tag={"h2"} content={"Portfolio"} />
          <PortfolioSubTitle tag={"p-lead"} content={"My recent projects"} />
        </PortfolioSectionHeader>

      </PortfolioSectionContainer>
    </Container>
  );
};
