import { Container } from "../../../common/Container/Container";
import { ContentStyled, Wrapper } from "./loadingComponent.styles";
//TODO zrobic obracający loader
export const LoadingComponent = (props) => {
  const content = "Please wait, projects are being loaded...";

  return (
    <Container {...props}>
      <Wrapper>
        <ContentStyled tag={"p-lead"} content={content} />
      </Wrapper>
    </Container>
  );
};
