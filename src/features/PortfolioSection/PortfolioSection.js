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

  const contnetto = [
    {
      title: "Tytuł1",
      description:
        "Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.",
      demo: "https://link.demo.com",
      code: "https://link.demo.com",
    },
    {
      title: "Tytuł2",
      description:
        "Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.",
      demo: "https://link.demo.com",
      code: "https://link.demo.com",
    },
    {
      title: "Tytuł3",
      description:
        "Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.",
      demo: "https://link.demo.com",
      code: "https://link.demo.com",
    },
    {
      title: "Tytuł4",
      description:
        "Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.",
      demo: "https://link.demo.com",
      code: "https://link.demo.com",
    },
  ];
  
  return (
    <Container>
      <PortfolioSectionContainer>
        <PortfolioSectionHeader>
          <GithubIconComponentStyled />
          <PortfolioTitle tag={"h2"} content={"Portfolio"} />
          <PortfolioSubTitle tag={"p-lead"} content={"My recent projects"} />
        </PortfolioSectionHeader>
        <ProjectContainer>
          {contnetto.map((item) => (
            <ProjectTile contnetto={item} key={item.title} {...props} />
          ))}
        </ProjectContainer>
      </PortfolioSectionContainer>
    </Container>
  );
};
