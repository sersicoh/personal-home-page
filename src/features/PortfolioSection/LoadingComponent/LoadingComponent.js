import { Container } from "../../../common/Container/Container";
import { LoadingCircleComponent } from "../../../icons/LoadingCircleComponent";
import {
  ContentStyled,
  LoadingCricleStyled,
  Wrapper,
} from "./loadingComponent.styles";
export const LoadingComponent = (props) => {
  const content = "Please wait, projects are being loaded...";

  return (
    <Container {...props}>
      <Wrapper>
        <ContentStyled tag={"p-lead"} content={content} />
        <LoadingCricleStyled>
          <LoadingCircleComponent />
        </LoadingCricleStyled>
      </Wrapper>
    </Container>
  );
};
