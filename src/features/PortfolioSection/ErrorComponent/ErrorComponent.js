import { Container } from "../../../common/Container/Container";
import {
  ContentStyled,
  ErrorIconStyled,
  HeaderStyled,
  Wrapper,
} from "./errorComponent.styles";
import { CustomButton } from "../../../common/CustomButton/CustomButton";
import { ErrorIconComponent } from "../../../icons/ErrorIconComponent";
export const ErrorComponent = (props) => {
  const header = "Ooops! Something went wrong... ";
  const content =
    "Sorry, failed to load Github projects. You can check them directly on Github.";
  const button = "Go to Github";

  return (
    <Container {...props}>
      <Wrapper>
        <ErrorIconStyled>
          <ErrorIconComponent />
        </ErrorIconStyled>
        <HeaderStyled tag={"h3"} content={header} />
        <ContentStyled tag={"p-lead"} content={content} />
        <CustomButton
          content={button}
          href={`https://github.com/sersicoh`}
          target="_blank"
          rel="noreferrer noopener"
        />
      </Wrapper>
    </Container>
  );
};
