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
  const content = {
    header: "Ooops! Something went wrong... ",
    description:
      "Sorry, failed to load Github projects. You can check them directly on Github.",
    button: "Go to Github",
    href: "https://github.com/sersicoh",
  };

  return (
    <Container {...props}>
      <Wrapper>
        <ErrorIconStyled>
          <ErrorIconComponent />
        </ErrorIconStyled>
        <HeaderStyled tag={"h3"} content={content.header} />
        <ContentStyled tag={"p-lead"} content={content.description} />
        <CustomButton
          content={content.button}
          href={content.href}
          target="_blank"
          rel="noreferrer noopener"
        />
      </Wrapper>
    </Container>
  );
};
