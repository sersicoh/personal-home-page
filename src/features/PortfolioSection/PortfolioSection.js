import { useDispatch, useSelector } from "react-redux";
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
import {
  fetchRepositories,
  gitUserRepositories,
  gitUserRepositoriesLoadingStatus,
} from "../../services/sliceGitUserRepositories";
import { useEffect } from "react";

export const PortfolioSection = (props) => {
  const dispatch = useDispatch();

  const fetchStatus = useSelector(gitUserRepositoriesLoadingStatus);
  const repositories = useSelector(gitUserRepositories);
  console.log(fetchStatus);
  useEffect(() => {
    dispatch(fetchRepositories("sersicoh"));
  }, [dispatch]);

  return (
    <Container>
      <PortfolioSectionContainer>
        <PortfolioSectionHeader>
          <GithubIconComponentStyled />
          <PortfolioTitle tag={"h2"} content={"Portfolio"} />
          <PortfolioSubTitle tag={"p-lead"} content={"My recent projects"} />
        </PortfolioSectionHeader>
        {(() => {
          switch (fetchStatus) {
            case "null":
            case "loading":
              return <div>ładuje</div>;
            case "success":
              return (
                <ProjectContainer>
                  {repositories.map(
                    ({ id, name, description, homepage, html_url }) => (
                      <ProjectTile
                        key={id}
                        name={name}
                        description={description}
                        homepage={homepage ? homepage : "no content to display"}
                        html_url={html_url ? html_url : "no content to display"}
                        {...props}
                      />
                    )
                  )}
                </ProjectContainer>
              );
            case "error":
              return <div>błąd</div>;
            default:
              throw new Error(`invalid status: ${fetchStatus}`);
          }
        })()}
      </PortfolioSectionContainer>
    </Container>
  );
};
