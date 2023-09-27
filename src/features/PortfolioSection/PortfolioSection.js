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
import { LoadingComponent } from "./LoadingComponent/LoadingComponent";
import { ErrorComponent } from "./ErrorComponent/ErrorComponent";

export const PortfolioSection = (props) => {
  const dispatch = useDispatch();

  const fetchStatus = useSelector(gitUserRepositoriesLoadingStatus);
  const repositories = useSelector(gitUserRepositories);
  console.log(fetchStatus);
  useEffect(() => {
    dispatch(fetchRepositories("sersicoh"));
  }, [dispatch]);

  return (
    <Container color={(props) => props.theme.colors.background}>
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
              return (
                <LoadingComponent
                  color={(props) => props.theme.colors.background}
                  maxContentSize={450}
                />
              );
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
              return (
                <ErrorComponent
                  color={(props) => props.theme.colors.background}
                  maxContentSize={450}
                />
              );
            default:
              throw new Error(`invalid status: ${fetchStatus}`);
          }
        })()}
      </PortfolioSectionContainer>
    </Container>
  );
};
